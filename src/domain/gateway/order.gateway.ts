import { Order, Orders, PartialOrders } from '../entity/order.dto'

export const orderGateway = (
  adapterForOrders: any | null | undefined,
  adapterForOrderItems: any | null | undefined
) => {
  if (!adapterForOrders) throw new Error(`No order adapter provided`)
  if (!adapterForOrderItems) throw new Error(`No order items adapter provided`)
  return {
    getAll: (): PartialOrders => adapterForOrders.getAll(),
    getAllWithDetails: (): Orders => {
      let orders = adapterForOrders.getAll()
      return orders.map((order: Partial<Order>) => {
        const orderItems = adapterForOrderItems.getAll(order.id)
        return {
          ...order,
          orderItems,
        }
      })
    },
  }
}
