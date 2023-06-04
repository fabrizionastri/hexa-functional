import { OrderItems } from '../../domain/entity/orderItem.dto'

export const orderItemAdapter = (): any => {
  let localArray: OrderItems = []
  return {
    getAll: (orderId: string): OrderItems => {
      return localArray.filter((item) => item.orderId === orderId)
    },
    feedWith: (...data: OrderItems): void => {
      localArray = data
    },
  }
}
