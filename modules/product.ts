export class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

export function getProductDetails(product: Product) {
  console.log(
    `Id: ${product.id}, Name: ${product.name}, Price: $${product.price}`
  )
}
