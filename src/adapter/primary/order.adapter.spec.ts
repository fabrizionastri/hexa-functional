import { orderA, orderB, orderC } from '../../../__mocks__/order.moks'
import { orderAdapter } from './order.adapter'

describe('Adapter : Order', () => {
  it('should trigger an error if sting is null', async () => {
    expect(() => getAdapter(null)).toThrowError('Account not defined')
  })
  it('should return an empty array when accountId is not found', async () => {
    const accountId: string = 'will not be found'
    expect(getAdapter(accountId).getAll()).toEqual([])
  })
  it('should return an order if orderId exists', async () => {
    const accountId: string = 'account-a'
    expect(getAdapter(accountId).getAll()).toMatchObject([orderA, orderC])
  })
})
const getAdapter = (orderId: string | null) => {
  const adapter = orderAdapter(orderId)
  adapter.feedWith(orderA, orderB, orderC)
  return adapter
}
