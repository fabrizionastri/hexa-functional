import { Order } from '../src/domain/entity/order.dto'
import { itemA, itemB, itemC, itemD } from './orderItem.mocks'

export const orderA: Order = {
  id: 'order-a',
  accountId: 'account-a',
  name: 'Order A',
  orderItems: [],
}
export const orderB: Order = {
  id: 'order-b',
  accountId: 'account-b',
  name: 'Order B',
  orderItems: [itemA, itemB, itemC],
}
export const orderC: Order = {
  id: 'order-c',
  accountId: 'account-a',
  name: 'Order C',
  orderItems: [itemD],
}

export const partialOrderA: Partial<Order> = {
  id: 'order-a',
  accountId: 'account-a',
  name: 'Order A',
}
export const partialOrderB: Partial<Order> = {
  id: 'order-b',
  accountId: 'account-b',
  name: 'Order B',
}
export const partialOrderC: Partial<Order> = {
  id: 'order-c',
  accountId: 'account-a',
  name: 'Order C',
}
