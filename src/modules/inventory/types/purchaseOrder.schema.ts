import { z } from 'zod'

export const purchaseOrderLineSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
  unitPrice: z.number().positive(),
})

export const purchaseOrderSchema = z.object({
  supplierId: z.string().uuid('Supplier is required'),
  warehouseId: z.string().uuid('Warehouse is required'),
  expectedDeliveryDate: z.string().min(1, 'Expected date is required'),
  notes: z.string().optional(),
  lines: z.array(purchaseOrderLineSchema).min(1, 'Add at least one item'),
})

export type PurchaseOrderFormData = z.infer<typeof purchaseOrderSchema>

export type POStatus = 'draft' | 'submitted' | 'approved' | 'received' | 'cancelled'

export interface PurchaseOrder extends PurchaseOrderFormData {
  id: string
  poNumber: string
  status: POStatus
  totalAmount: number
  createdBy: string
  createdAt: string
  updatedAt: string
}
