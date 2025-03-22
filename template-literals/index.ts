interface Product {
  name: string
  price: number
  quantity: number
}

const products: Product[] = [
  { name: 'Laptop', price: 999.99, quantity: 5 },
  { name: 'Smartphone', price: 499.99, quantity: 10 },
  { name: 'Tablet', price: 299.99, quantity: 7 },
]

const formattedProducts = products.map(
  ({ name, price, quantity }) =>
    `Product: ${name}, Price: $${price}, Quantity: ${quantity}`
)

function sanitize(strings: TemplateStringsArray, ...values: string[]) {
  // const sanitizedValues = values.map((value) =>
  // value
  //   .replace(/&/g, '&amp;')
  //   .replace(/</g, '&lt;')
  //   .replace(/>/g, '&gt;')
  //   .replace(/"/g, '&quot;')
  //   .replace(/'/g, '&#39;')
  // )

  // return strings
  //   .map((string, i) => string + (sanitizedValues[i] || ''))
  //   .join('')

  return strings.reduce((sanitized, string, i) => {
    let value = values[i] || ''
    if (value) {
      value = value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    }

    return sanitized + string + value
  }, '')
}

const userComment = `<img src="x" onerror="alert('Hacked!')">Nice post!`
const safeComment = sanitize`User says: ${userComment}`
console.log(safeComment)
