import { cn } from '@/lib/utils'

type Status = 'ok' | 'low' | 'out' | 'active' | 'inactive' | 'pending' | 'approved' | 'cancelled'

const statusConfig: Record<Status, { label: string; className: string }> = {
  ok:        { label: 'In Stock',  className: 'bg-green-100 text-green-800' },
  low:       { label: 'Low Stock', className: 'bg-yellow-100 text-yellow-800' },
  out:       { label: 'Out',       className: 'bg-red-100 text-red-800' },
  active:    { label: 'Active',    className: 'bg-green-100 text-green-800' },
  inactive:  { label: 'Inactive',  className: 'bg-gray-100 text-gray-600' },
  pending:   { label: 'Pending',   className: 'bg-blue-100 text-blue-800' },
  approved:  { label: 'Approved',  className: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-800' },
}

export function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status]
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded text-xs font-medium', config.className)}>
      {config.label}
    </span>
  )
}
