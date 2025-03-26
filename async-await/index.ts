interface User {
  id: number
  name: string
  role: 'admin' | 'user'
}

const users: User[] = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
]

function getUser(id: number) {
  return new Promise<User>((resolve, reject) => {
    const user = users.find((user) => user.id === id)

    setTimeout(() => {
      if (!user) return reject(`User with ID ${id} not found!`)
      resolve(user)
    }, 2000)
  })
}

try {
  console.log(await getUser(1))
  console.log(await getUser(2))
  console.log(await getUser(99))
} catch (error) {
  console.error(error)
}
