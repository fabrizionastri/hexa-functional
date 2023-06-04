import {
  orderB,
  partialOrderA,
  partialOrderB,
  partialOrderC,
} from '../../../__mocks__/order.moks'
import { itemA, itemB, itemC, itemD } from '../../../__mocks__/orderItem.mocks'
import { orderAdapter } from '../../adapter/primary/order.adapter'
import { orderItemAdapter } from '../../adapter/primary/orderItem.apater'
import { orderGateway } from '../gateway/order.gateway'

describe('Use case: Order', () => {
  it('should return an empty array', () => {
    const accountId = 'this-account-does-not-exists'
    const gateway = buildOrderCase(accountId)
    const expected = []
    expect(gateway.getAllWithDetails()).toMatchObject(expected)
  })
  it('should return an empty array', () => {
    const accountId = 'account-b'
    const gateway = buildOrderCase(accountId)
    const expected = [orderB]
    expect(gateway.getAllWithDetails()).toMatchObject(expected)
  })
})
const buildOrderCase = (accountId: string) => {
  const adapterForOrders = orderAdapter(accountId)
  const adapterForOrderItems = orderItemAdapter()
  adapterForOrders.feedWith(partialOrderA, partialOrderB, partialOrderC)
  adapterForOrderItems.feedWith(itemA, itemB, itemC, itemD)
  return orderGateway(adapterForOrders, adapterForOrderItems)
}
