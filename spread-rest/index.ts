function processScores(name: string, ...scores: number[]) {
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length

  return `${name}'s average score is ${average}`
}

console.log(processScores('Alice', 80, 90, 85))
console.log(processScores('Bob', 75, 95, 88, 92))
