import { type MergeOmitting } from '@/types/utilities'
import { cx } from '@styled-system/css'
import { listGroup, type ListGroupVariantProps } from '@styled-system/recipes/list-group'
import { type FC } from 'react'

type ComposedInputProps = MergeOmitting<React.HTMLAttributes<HTMLUListElement>, ListGroupVariantProps>

const ListGroup: FC<ComposedInputProps> = ({ children, className, ...rest }) => {
  const [listGroupRecipeArgs, allOtherListGroupProps] = listGroup.splitVariantProps(rest)
  return (
    <ul
      className={cx(listGroup(listGroupRecipeArgs).root, className)}
      {...allOtherListGroupProps}
    >
      {children}
    </ul>
  )
}

export default ListGroup
