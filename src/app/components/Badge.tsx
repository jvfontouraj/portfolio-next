import { cva, type VariantProps } from 'class-variance-authority'
import React, { HTMLAttributes } from 'react'

const BadgeStyled = cva(
  'px-4 py-[10px] w-fit rounded-[10px] cursor-default border border-neutral-800 shadow-[0px_4px_4px_0px_#0000007f] dark:border-white md:text-base text-xs',
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
