export const PERMISSIONS = {
  // Inventory
  INVENTORY_VIEW: 'inventory:view',
  INVENTORY_CREATE: 'inventory:create',
  INVENTORY_EDIT: 'inventory:edit',
  INVENTORY_DELETE: 'inventory:delete',
  // Purchase Orders
  PO_VIEW: 'po:view',
  PO_CREATE: 'po:create',
  PO_APPROVE: 'po:approve',
  // Warehouse
  WAREHOUSE_VIEW: 'warehouse:view',
  WAREHOUSE_MANAGE: 'warehouse:manage',
  // Reports
  REPORTS_VIEW: 'reports:view',
} as const

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS]
