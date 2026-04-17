// Public API of the inventory module — only export what other modules need
export type { Product } from './types/product.schema'
export type { Warehouse } from './types/warehouse.schema'
export type { PurchaseOrder, POStatus } from './types/purchaseOrder.schema'
export type { StockMovement, MovementType } from './types/stockMovement.schema'
