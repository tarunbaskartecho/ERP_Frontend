import { z } from 'zod'

export const warehouseSchema = z.object({
  name: z.string().min(2, 'Warehouse name is required'),
  code: z.string().min(2, 'Warehouse code is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2),
  state: z.string().min(2),
  pincode: z.string().length(6, 'Enter valid pincode'),
  isActive: z.boolean().default(true),
})

export type WarehouseFormData = z.infer<typeof warehouseSchema>

export interface Warehouse extends WarehouseFormData {
  id: string
  zones: WarehouseZone[]
  createdAt: string
}

export interface WarehouseZone {
  id: string
  warehouseId: string
  name: string
  code: string
  racks: WarehouseRack[]
}

export interface WarehouseRack {
  id: string
  zoneId: string
  name: string
  shelves: number
  bins: number
}
