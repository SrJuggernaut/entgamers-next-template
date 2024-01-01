import { cx } from '@/styled-system/css'
import { chip, type ChipVariantProps } from '@/styled-system/recipes/chip'
import { type MergeOmitting } from '@/types/utilities'
import { type FC, type HTMLAttributes } from 'react'

export type ChipProps = MergeOmitting<HTMLAttributes<HTMLSpanElement>, ChipVariantProps>

const Chip: FC<ChipProps> = ({ children, className, ...rest }) => {
  const [chipRecipeArgs, allOtherChipProps] = chip.splitVariantProps(rest)
  return (
    <span
      className={cx(chip(chipRecipeArgs), className)}
      {...allOtherChipProps}
    >
      {children}
    </span>
  )
}
export default Chip
