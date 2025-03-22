class User {
  name: string
  #password: string

  constructor(name: string, password: string) {
    this.name = name
    this.#password = password
  }

  get maskedPassed() {
    return '******'
  }

  set password(value: string) {
    if (value.length < 6) {
      console.error('Password must be at least 6 characters')
      return
    }

    this.#password = value
  }

  static async hashPassword(password: string) {
    const data = new TextEncoder().encode(password)
    // hash the password
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    // convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(hashBuffer))

    // convert bytes to hex string
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  }
}

const user = new User('john_doe', 'mypassword')

user.password = '123'
user.password = 'newpassword'

const hashedPassword = await User.hashPassword('mypassword')

console.log(hashedPassword)

export {}
