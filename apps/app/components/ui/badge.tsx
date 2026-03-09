import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-600',
        active: 'bg-green-50 text-green-700',
        pending: 'bg-yellow-50 text-yellow-700',
        intake: 'bg-blue-50 text-blue-700',
        closed: 'bg-gray-100 text-gray-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
