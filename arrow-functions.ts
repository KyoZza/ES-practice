interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 15 },
  { name: 'David', age: 19 },
]

const minors = users.filter(({ age }) => age < 18)
console.log(minors)

const formatted = users.map(({ name, age }) => `${name} (${age})`)
console.log(formatted)
