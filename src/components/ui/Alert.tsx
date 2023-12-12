import { type MergeOmitting } from '@/types/utilities'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cx } from '@styled-system/css'
import { alert, type AlertVariantProps } from '@styled-system/recipes/alert'
import { type DetailedHTMLProps, type FC, type HTMLAttributes, type ReactNode } from 'react'
import IconButton, { type IconButtonProps } from './IconButton'

type ComposedAlertProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, AlertVariantProps>

const Alert: FC<ComposedAlertProps> = ({ className, children, ...props }) => {
  const [alertRecipeArgs, allOtherAlertProps] = alert.splitVariantProps(props)
  return (
    <div
      className={cx(alert(alertRecipeArgs).body, className)}
      {...allOtherAlertProps}
    >
      {children}
    </div>
  )
}

type ComposedAlertCloseButtonProps = MergeOmitting<IconButtonProps, AlertVariantProps> & {
  children?: ReactNode
}

export const AlertCloseButton: FC<ComposedAlertCloseButtonProps> = ({ children, className, ...props }) => {
  const [alertRecipeArgs, allOtherAlertProps] = alert.splitVariantProps(props)
  return (
    <IconButton
      className={cx(alert(alertRecipeArgs).closeButton, className)}
      {...allOtherAlertProps}
    >
      {children === undefined
        ? <FontAwesomeIcon icon={faTimes} fixedWidth size='sm' />
        : children
      }
    </IconButton>
  )
}

export default Alert
