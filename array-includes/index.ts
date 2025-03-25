interface User {
  name: string
}

function isUserRegistered(name: string, users: string[] | User[]) {
  // better to use .some here
  return users
    .map((user) => (typeof user === 'string' ? user : user.name))
    .includes(name)
}

const users = ['Alice', 'Bob', 'Charlie']

console.log(isUserRegistered('Alice', users)) // true
console.log(isUserRegistered('Dave', users)) // false

const userObjects: User[] = [{ name: 'Alice' }, { name: 'Bob' }]
console.log(isUserRegistered('Alice', userObjects)) // true
console.log(isUserRegistered('Charlie', userObjects)) // false
