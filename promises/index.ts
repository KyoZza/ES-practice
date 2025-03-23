interface Product {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 1199,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 899,
  },
]

function getProduct(id: number) {
  return new Promise<Product>((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id)

      if (product) {
        resolve(product)
      } else {
        reject(new Error(`Product with ID ${id} not found`))
      }
    }, 2000)
  })
}

getProduct(1).then(console.log).catch(console.error)
getProduct(2).then(console.log).catch(console.error)
getProduct(3).then(console.log).catch(console.error)
