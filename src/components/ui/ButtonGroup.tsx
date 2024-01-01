import { cx } from '@/styled-system/css'
import { buttonGroup, type ButtonGroupVariantProps } from '@/styled-system/recipes/button-group'
import { type MergeOmitting } from '@/types/utilities'
import { type FC, type HTMLAttributes } from 'react'

export type ButtonGroupProps = MergeOmitting<HTMLAttributes<HTMLDivElement>, ButtonGroupVariantProps>

const ButtonGroup: FC<ButtonGroupProps> = ({ children, className, ...rest }) => {
  const [buttonGroupRecipeArgs, allOtherButtonGroupProps] = buttonGroup.splitVariantProps(rest)
  return (
    <div
      className={cx(buttonGroup(buttonGroupRecipeArgs), className)}
      {...allOtherButtonGroupProps}
    >
      {children}
    </div>
  )
}

export default ButtonGroup
