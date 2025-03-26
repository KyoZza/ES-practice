function calculateCompoundInterest(
  principal: number,
  rate: number,
  years: number
) {
  return (principal * (1 + rate) ** years).toFixed(2)
}

console.log(calculateCompoundInterest(1000, 0.05, 3))
// Expected Output: 1157.64
