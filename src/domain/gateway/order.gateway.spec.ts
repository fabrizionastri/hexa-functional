import {
  orderA,
  orderC,
  partialOrderA,
  partialOrderB,
  partialOrderC,
} from '../../../__mocks__/order.moks'
import { itemA, itemB, itemC, itemD } from '../../../__mocks__/orderItem.mocks'
import { orderAdapter } from '../../adapter/primary/order.adapter'
import { orderItemAdapter } from '../../adapter/primary/orderItem.apater'
import { Orders, PartialOrders } from '../entity/order.dto'
import { orderGateway } from './order.gateway'

describe('Gateway : Order', () => {
  describe('undefined adapters', () => {
    it('should trigger an error if order adapter is not definded', () => {
      const accountId: string = 'i do not care'
      expect(() => orderGateway(null, null)(accountId).getAll()).toThrowError(
        'No order adapter provided'
      )
    })
    it('should trigger an error if order items adapter is not definded', () => {
      const accountId: string = 'i do not care'
      const adapterForOrders = orderAdapter(accountId)
      expect(() =>
        orderGateway(adapterForOrders, null)(accountId).getAll()
      ).toThrowError('No order items adapter provided')
    })
  })
  describe('for accounts', () => {
    it('should return an empty array', () => {
      const accountId: string = 'will not found'
      const gateway = buildOrderCase(accountId)
      const result: PartialOrders = gateway.getAll()
      const expected: PartialOrders = []
      expect(result).toEqual(expected)
    })
    it('should return an array of orders with details', () => {
      const accountId: string = 'account-a'
      const gateway = buildOrderCase(accountId)
      const result: Orders = gateway.getAllWithDetails()
      const expected: Orders = [orderA, orderC]
      expect(result).toMatchObject(expected)
    })
  })
})

const buildOrderCase = (accountId: string) => {
  const adapterForOrders = orderAdapter(accountId)
  const adapterForOrderItems = orderItemAdapter()
  adapterForOrders.feedWith(partialOrderA, partialOrderB, partialOrderC)
  adapterForOrderItems.feedWith(itemA, itemB, itemC, itemD)
  return orderGateway(adapterForOrders, adapterForOrderItems)
}
