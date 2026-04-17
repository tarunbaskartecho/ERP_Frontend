import { useAuth } from '@/features/auth/useAuth'
import { ROLES } from './roles'
import type { Permission } from './permissions'

interface PermissionGateProps {
  permission: Permission
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function PermissionGate({ permission, children, fallback = null }: PermissionGateProps) {
  const { user } = useAuth()
  if (!user) return <>{fallback}</>
  const userPermissions = ROLES[user.role] ?? []
  if (!userPermissions.includes(permission)) return <>{fallback}</>
  return <>{children}</>
}
