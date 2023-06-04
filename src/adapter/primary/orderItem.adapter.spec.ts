import { itemA, itemB, itemC, itemD } from '../../../__mocks__/orderItem.mocks'
import { OrderItems } from '../../domain/entity/orderItem.dto'
import { orderItemAdapter } from './orderItem.apater'

describe('Adapter : OrderItem', () => {
  it('should return three items for order-b', () => {
    const orderId = 'order-b'
    const adapter = getAdapter()
    const expected: OrderItems = [itemA, itemB, itemC]
    expect(adapter.getAll(orderId)).toMatchObject(expected)
  })
  it('should return an empty array for an non existing order', () => {
    const orderId = 'non-existing-order'
    const adapter = getAdapter()
    const expected: OrderItems = []
    expect(adapter.getAll(orderId)).toMatchObject(expected)
  })
})

const getAdapter = () => {
  const adapter = orderItemAdapter()
  adapter.feedWith(itemA, itemB, itemC, itemD)
  return adapter
}
