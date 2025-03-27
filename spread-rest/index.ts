interface User {
  id: number;
  name: string;
  age: number;
  city?: string;
}

function processScores(name: string, ...scores: number[]) {
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  return `${name}'s average score is ${average}`;
}

console.log(processScores("Alice", 80, 90, 85));
console.log(processScores("Bob", 75, 95, 88, 92));

function mergeUsers(base: User, newData: Partial<User>): User {
  const { id, ...rest } = newData;

  return {
    ...base,
    ...rest,
  };
}

const baseUser: User = { id: 1, name: "Alice", age: 25 };
const newData: Partial<User> = { id: 2, age: 30, city: "Tokyo" };

console.log(mergeUsers(baseUser, newData));
// Expected Output: { id: 1, name: "Alice", age: 30, city: "Tokyo" }
