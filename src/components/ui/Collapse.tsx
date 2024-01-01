import { type MergeOmitting } from '@/types/utilities'
import { cx } from '@styled-system/css'
import { collapse, type CollapseVariantProps } from '@styled-system/recipes/collapse'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'

export type CollapseProps = MergeOmitting<HTMLAttributes<HTMLDetailsElement>, CollapseVariantProps> & {
  children?: ReactNode
  contentProps?: HTMLAttributes<HTMLElement>
  summary: ReactNode
  summaryProps?: HTMLAttributes<HTMLElement>
}

const Collapse: FC<CollapseProps> = ({ children, className, summary, summaryProps, contentProps, ...rest }) => {
  const [collapseRecipeArgs, allOtherCollapseProps] = collapse.splitVariantProps(rest)
  return (
    <details
      className={cx(collapse(collapseRecipeArgs).root, className)}
      {...allOtherCollapseProps}
    >
      <summary
        {...summaryProps}
        className={cx(collapse(collapseRecipeArgs).summary, summaryProps?.className)}
      >
        {summary}
      </summary>
      <div
        {...contentProps}
        className={cx(collapse(collapseRecipeArgs).content, contentProps?.className)}
      >
        {children}
      </div>
    </details>
  )
}

export default Collapse
