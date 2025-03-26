function formatBalance(balance: number) {
  return "$" + balance.toFixed(2).padStart(10, " ");
}

function maskCardNumber(last4: number) {
  return last4.toString().padStart(19, "**** ");
}

console.log(formatBalance(100));
// Expected Output: "$     100.00"

console.log(formatBalance(5000));
// Expected Output: "$    5000.00"

console.log(maskCardNumber(1234));
// Expected Output: "**** **** **** 1234"
