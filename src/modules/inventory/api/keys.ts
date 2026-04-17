export const inventoryKeys = {
  all: ['inventory'] as const,
  products: () => [...inventoryKeys.all, 'products'] as const,
  product: (id: string) => [...inventoryKeys.products(), id] as const,
  stockMovements: (productId?: string) =>
    [...inventoryKeys.all, 'stock-movements', productId] as const,
  purchaseOrders: () => [...inventoryKeys.all, 'purchase-orders'] as const,
  purchaseOrder: (id: string) => [...inventoryKeys.purchaseOrders(), id] as const,
  warehouses: () => [...inventoryKeys.all, 'warehouses'] as const,
  warehouse: (id: string) => [...inventoryKeys.warehouses(), id] as const,
}
