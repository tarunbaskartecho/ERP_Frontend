import { create } from 'zustand'

interface WarehouseState {
  activeWarehouseId: string | null
  setActiveWarehouse: (id: string) => void
}

export const useWarehouseStore = create<WarehouseState>((set) => ({
  activeWarehouseId: null,
  setActiveWarehouse: (id) => set({ activeWarehouseId: id }),
}))
