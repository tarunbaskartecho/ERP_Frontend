export function isLowStock(current: number, minimum: number): boolean {
  return current <= minimum
}

export function stockStatus(current: number, minimum: number): 'ok' | 'low' | 'out' {
  if (current === 0) return 'out'
  if (current <= minimum) return 'low'
  return 'ok'
}

export function calculateStockValue(quantity: number, costPrice: number): number {
  return quantity * costPrice
}
