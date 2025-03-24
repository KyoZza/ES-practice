interface User {
  name: string
  [k: symbol]: string | undefined
}

const API_KEY = Symbol('apiKey')

function storeApiKey(user: User, key: string) {
  user[API_KEY] = key
}

function getApiKey(user: User) {
  return user[API_KEY]
}

const user: User = { name: 'Alice' }

// Store API Key (Symbol)
storeApiKey(user, 'secret123')

console.log(user)
// Expected Output: { name: "Alice", [Symbol(apiKey)]: "secret123" }

console.log(getApiKey(user))
// Expected Output: "secret123"

// Ensure API key is NOT exposed in a loop
console.log(Object.keys(user))
// Expected Output: ["name"]
