import { OrderItem } from '../src/domain/entity/orderItem.dto'

export const itemA: OrderItem = {
  id: 'item-a',
  orderId: 'order-b',
  quantity: 10,
  price: 1,
  tax: 20,
}
export const itemB: OrderItem = {
  id: 'item-b',
  orderId: 'order-b',
  quantity: 1,
  price: 100,
  tax: 5,
}
export const itemC: OrderItem = {
  id: 'item-c',
  orderId: 'order-b',
  quantity: 1,
  price: 10,
  tax: 0,
}
export const itemD: OrderItem = {
  id: 'item-d',
  orderId: 'order-c',
  quantity: 1,
  price: 10,
  tax: 0,
}
