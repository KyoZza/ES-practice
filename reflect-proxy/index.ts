interface User {
  username: string
  password?: string
}

function secureData(user: User) {
  const handler: ProxyHandler<User> = {
    get(target, p: keyof User) {
      console.log(`Accessing: ${p}`)

      return target[p]
    },

    deleteProperty() {
      throw new Error('Cannot delete properties from secureData')
      // return false
    },
  }

  return new Proxy(user, handler)
}

const user = secureData({ username: 'Alice', password: 'secret123' })

console.log(user.username)
// Expected Output:
// Accessing: username
// "Alice"

delete user.password
// Expected Output:
// Error: Cannot delete properties from secureData
