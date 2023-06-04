import { OrderItems } from './orderItem.dto'

export interface Order {
  id: string
  name: string
  accountId: string
  orderItems: OrderItems
}

export type Orders = Array<Order>

export type PartialOrders = Array<Partial<Order>>
