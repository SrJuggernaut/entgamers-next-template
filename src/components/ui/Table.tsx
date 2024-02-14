import { cx } from '@/styled-system/css'
import { table, type TableVariantProps } from '@/styled-system/recipes/table'
import { type MergeOmitting } from '@/types/utilities'
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'

type TableContainerProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TableVariantProps>

export const TableContainer: FC<TableContainerProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <div
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).container, className)}
    >
      {children}
    </div>
  )
}

type TableProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>, TableVariantProps>

export const Table: FC<TableProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <table
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).table, className)}
    >
      {children}
    </table>
  )
}

type TableHeadProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TableVariantProps>

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <thead
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).thead, className)}
    >
      {children}
    </thead>
  )
}

type TableBodyProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TableVariantProps>

export const TableBody: FC<TableBodyProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <tbody
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).tbody, className)}
    >
      {children}
    </tbody>
  )
}

type TableFootProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TableVariantProps>

export const TableFoot: FC<TableFootProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <tfoot
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).tfoot, className)}
    >
      {children}
    </tfoot>
  )
}

type TableRowProps = MergeOmitting<DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TableVariantProps>

export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const [tableRecipeArgs, allOtherTableProps] = table.splitVariantProps(props)
  return (
    <tr
      {...allOtherTableProps}
      className={cx(table(tableRecipeArgs).tr, className)}
    >
      {children}
    </tr>
  )
}

type TableCellProps = DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>

export const TableCell: FC<TableCellProps> = ({ children, ...props }) => {
  return (
    <td
      {...props}
    >
      {children}
    </td>
  )
}

type TableHeadCellProps = DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, ...props }) => {
  return (
    <th
      {...props}
    >
      {children}
    </th>
  )
}
