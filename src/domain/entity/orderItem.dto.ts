export interface OrderItem {
  id: string
  orderId: string
  quantity: number
  price: number
  tax: number
}

export type OrderItems = Array<OrderItem>
