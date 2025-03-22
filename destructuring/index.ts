interface User {
  id: number
  name: string
  email: string
  age: number
  isAdmin: boolean
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 30,
  isAdmin: false,
}

function processUser({ name, email }: User) {
  console.log(`Name: ${name}\nEmail: ${email}  `)
}

processUser(user)

const userData = ['John', 'Doe', 30, true]

const [firstName, lastName, , isAdmin = 'Unknown'] = userData
console.log(firstName)
console.log(lastName)
console.log(isAdmin)
