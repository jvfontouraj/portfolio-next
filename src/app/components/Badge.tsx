import { cva, type VariantProps } from 'class-variance-authority'
import React, { HTMLAttributes } from 'react'

const BadgeStyled = cva(
  'px-4 py-[10px] w-fit rounded-[10px] cursor-default border border-neutral-800/50 dark:border-white/50 md:text-base text-xs',
  {
    variants: {
      size: {},
    },
    defaultVariants: {},
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeStyled> {}

export const Badge: React.FC<BadgeProps> = ({ className, size, ...props }) => (
  <div className={BadgeStyled({ size, className })} {...props} />
)
