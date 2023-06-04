import { orderA, orderB } from '../../../__mocks__/order.moks'
import { itemA, itemB, itemC } from '../../../__mocks__/orderItem.mocks'
import {
  amountTax,
  coefficientTax,
  priceWithoutTax,
  principal,
} from './order.util'

describe('Utils : Order', () => {
  describe('Price and tax computation', () => {
    it('should return price without tax for item-a', () => {
      const expected: number = 10
      expect(priceWithoutTax(itemA)).toEqual(expected)
    })
    it('should return coefficientTax for an item-b', () => {
      const expected: number = 0.05
      expect(coefficientTax(itemB)).toEqual(expected)
    })
    it('should return amountTax for an item-c', () => {
      const expected: number = 0
      expect(amountTax(itemC)).toEqual(expected)
    })
    it('should return principal for an order', () => {
      const expected: number = 0
      expect(principal(orderA)).toEqual(expected)
    })
    it('should return principal for an order-a', () => {
      const expected: number = 127
      expect(principal(orderB)).toEqual(expected)
    })
  })
})
