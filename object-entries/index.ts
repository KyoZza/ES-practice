interface UserSettings {
  readonly language: 'en' | 'ja'
  readonly notifications: boolean
  readonly theme: 'dark' | 'light'
}

function displaySettings(settings: UserSettings) {
  Object.entries(settings).forEach(([key, value]) =>
    console.log(`${key} → ${value}`)
  )
}

const userSettings: UserSettings = {
  theme: 'dark',
  notifications: true,
  language: 'en',
}

displaySettings(userSettings)
// Expected Output:
// theme → dark
// notifications → true
// language → en
