export type SortOrder = 'asc' | 'desc'

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface SortParams {
  sortBy: string
  sortOrder: SortOrder
}

export type FilterParams = Record<string, string | number | boolean | undefined>
