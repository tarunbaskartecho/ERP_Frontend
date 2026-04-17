import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/inventory/products/$productId')({
  component: () => <div>Page — TODO</div>,
})
