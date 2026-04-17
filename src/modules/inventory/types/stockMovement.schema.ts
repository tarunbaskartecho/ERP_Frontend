import { z } from 'zod'

export type MovementType = 'IN' | 'OUT' | 'TRANSFER' | 'ADJUSTMENT' | 'RETURN'

export const stockMovementSchema = z.object({
  productId: z.string().uuid(),
  movementType: z.enum(['IN', 'OUT', 'TRANSFER', 'ADJUSTMENT', 'RETURN']),
  quantity: z.number().int().positive(),
  fromWarehouseId: z.string().uuid().optional(),
  toWarehouseId: z.string().uuid().optional(),
  referenceId: z.string().optional(),
  notes: z.string().optional(),
})

export type StockMovementFormData = z.infer<typeof stockMovementSchema>

export interface StockMovement extends StockMovementFormData {
  id: string
  balanceAfter: number
  performedBy: string
  createdAt: string
}
