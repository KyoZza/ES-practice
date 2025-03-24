// function createUserProfile(
//   name: string,
//   age: number,
//   roleKey: string,
//   roleValue: string
// ) {
//   return {
//     name,
//     age,
//     [roleKey]: roleValue,
//     greet() {
//       console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`
//       )
//     },
//   }
// }

function createUserProfile(
  name: string,
  age: number,
  extraProps: Record<string, string>
) {
  return {
    name,
    age,
    ...extraProps,
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      )
    },
  }
}

// const user = createUserProfile('Alice', 30, 'role', 'admin')
const user = createUserProfile('Alice', 30, { role: 'admin', country: 'USA' })

console.log(user)
/* Expected Output:
{
  name: "Alice",
  age: 30,
  role: "admin",
  country: "USA",
  greet: [Function]
}
*/

user.greet()
// Expected Output: Hello, my name is Alice and I am 30 years old.
