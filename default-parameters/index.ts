function calculateFinalPrice(price: number, taxRate = 0.1, discount = 0) {
  return price + price * taxRate - discount
}

console.log(calculateFinalPrice(100))
// Expected Output: 110 (10% tax, no discount)

console.log(calculateFinalPrice(100, 0.2))
// Expected Output: 120 (20% tax, no discount)

console.log(calculateFinalPrice(100, 0.2, 10))
// Expected Output: 110 (20% tax, $10 discount)
