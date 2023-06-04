import { PartialOrders } from '../../domain/entity/order.dto'

export const orderAdapter = (accountId: string | null | undefined) => {
  let localArray: PartialOrders = []
  if (!accountId) throw new Error('Account not defined')
  return {
    getAll: () => {
      return localArray.filter((item) => item.accountId === accountId)
    },
    feedWith: (...data: PartialOrders): void => {
      localArray = data
    },
  }
}
