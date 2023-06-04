export const order =
  (gateway: any) => (accountId: string, dateReference: date) => {
    return gateway.order(accountId, dateReference)
  }
