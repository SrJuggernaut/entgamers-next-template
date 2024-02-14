import { cx } from '@/styled-system/css'
import { skeleton, type SkeletonVariantProps } from '@/styled-system/recipes/skeleton'
import { type MergeOmitting } from '@/types/utilities'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'

export type SkeletonProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SkeletonVariantProps & { children?: never }>

const Skeleton: FC<SkeletonProps> = ({ children: _, className, ...props }) => {
  const [skeletonRecipeArgs, allOtherSkeletonProps] = skeleton.splitVariantProps(props)
  return (
    <div
      {...allOtherSkeletonProps}
      className={cx(skeleton(skeletonRecipeArgs), className)}
    />
  )
}

export default Skeleton
