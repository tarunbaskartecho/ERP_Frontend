import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(2, 'Product name is required'),
  sku: z.string().min(3, 'SKU is required'),
  categoryId: z.string().uuid('Invalid category'),
  supplierId: z.string().uuid('Invalid supplier'),
  costPrice: z.number().positive('Cost price must be positive'),
  sellingPrice: z.number().positive('Selling price must be positive'),
  minStockLevel: z.number().int().min(0, 'Cannot be negative'),
  maxStockLevel: z.number().int().min(0).optional(),
  unit: z.string().min(1, 'Unit is required'),
  barcode: z.string().optional(),
  description: z.string().optional(),
})

export type ProductFormData = z.infer<typeof productSchema>

export interface Product extends ProductFormData {
  id: string
  currentStock: number
  warehouseId: string
  createdAt: string
  updatedAt: string
}
