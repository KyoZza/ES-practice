import { Product } from './product.ts'

export const cart: Product[] = []

export function addToCart(product: Product) {
  cart.push(product)
}

export function removeFromCart(productId: number) {
  const productIndex = cart.findIndex(({ id }) => id === productId)

  if (productIndex === -1) {
    console.error('Product not in cart')
    return
  }

  cart.splice(productIndex, 1)
}
