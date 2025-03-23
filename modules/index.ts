import {
  addToCart,
  cart,
  removeFromCart,
  getProductDetails,
  Product,
} from './store.ts'

const product1 = new Product(1, 'Laptop', 1200)
const product2 = new Product(2, 'Smartphone', 800)

getProductDetails(product1)

addToCart(product1)
addToCart(product2)

console.log(cart)

removeFromCart(1)

console.log(cart)

async function loadChart() {
  // dynamic import
  const { renderChart } = await import('./chart.ts')

  renderChart()
}

loadChart()
