interface User {
  profile: MaybeReadonly<UserProfile>
  settings: MaybeReadonly<UserSettings>
}

interface UserProfile {
  name: string
  age: number
}

interface UserSettings {
  theme: 'dark' | 'light'
}

type MaybeReadonly<T> = T & { readonly?: boolean }

function createDeepProxy<T extends MaybeReadonly<object>>(target: T) {
  return new Proxy(target, {
    get(target, p) {
      console.log(`Accessing: ${p.toString()}`)

      const value = Reflect.get(target, p)

      if (typeof value === 'object' && value !== null) {
        return createDeepProxy(value as unknown as T)
      }

      return value
    },

    set(target, p, value) {
      if (target.readonly) {
        throw new Error(`Property ${p.toString()} is readonly`)
      }

      return Reflect.set(target, p, value)
    },
  })
}

const user = createDeepProxy<User>({
  profile: { name: 'Alice', age: 30 },
  settings: { theme: 'dark', readonly: true },
})

user.profile.age = 31 // ✅ Works
console.log(user.profile.name) // ✅ Logs access

user.settings.theme = 'light' // ❌ Throws: "Cannot modify readonly property: theme"
