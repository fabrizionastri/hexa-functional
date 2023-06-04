import { Order } from '../entity/order.dto'
import { OrderItem } from '../entity/orderItem.dto'

export const priceWithoutTax = (item: OrderItem) => {
  const { quantity, price } = item
  return quantity * price
}
export const coefficientTax = (item: OrderItem) => item.tax / 100
export const amountTax = (item: OrderItem) =>
  coefficientTax(item) * priceWithoutTax(item)
export const priceWithTax = (item: OrderItem) =>
  priceWithoutTax(item) + amountTax(item)
export const reducePrincipal = (acc: number, item: OrderItem) =>
  acc + priceWithTax(item)
export const principal = (order: Order): number => {
  return order.orderItems.reduce(reducePrincipal, 0)
}
