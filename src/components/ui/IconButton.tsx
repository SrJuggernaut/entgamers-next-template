import { type MergeOmitting } from '@/types/utilities'
import { cx } from '@styled-system/css'
import { iconButton, type IconButtonVariantProps } from '@styled-system/recipes/icon-button'
import { type FC, type HTMLAttributes } from 'react'

type ComposedIconButtonProps = MergeOmitting<HTMLAttributes<HTMLButtonElement>, IconButtonVariantProps>

export interface IconButtonProps extends ComposedIconButtonProps {}

const IconButton: FC<IconButtonProps> = ({ children, className, ...rest }) => {
  const [iconButtonRecipeArgs, allOtherIconButtonProps] = iconButton.splitVariantProps(rest)
  return (
    <button
      className={cx(iconButton(iconButtonRecipeArgs), className)}
      {...allOtherIconButtonProps}
    >
      {children}
    </button>
  )
}

export default IconButton
