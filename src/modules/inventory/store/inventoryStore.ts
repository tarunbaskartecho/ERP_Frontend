import { create } from 'zustand'

interface InventoryFilters {
  search: string
  categoryId: string
  warehouseId: string
  lowStockOnly: boolean
}

interface InventoryState {
  selectedProductIds: string[]
  filters: InventoryFilters
  setSelectedProductIds: (ids: string[]) => void
  setFilter: <K extends keyof InventoryFilters>(key: K, value: InventoryFilters[K]) => void
  resetFilters: () => void
}

const defaultFilters: InventoryFilters = {
  search: '',
  categoryId: '',
  warehouseId: '',
  lowStockOnly: false,
}

export const useInventoryStore = create<InventoryState>((set) => ({
  selectedProductIds: [],
  filters: defaultFilters,
  setSelectedProductIds: (ids) => set({ selectedProductIds: ids }),
  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value } })),
  resetFilters: () => set({ filters: defaultFilters }),
}))
