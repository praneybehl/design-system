import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  cell: ({ align, emphasis }) =>
    glamor.css(
      css['.psds-table__cell'],
      emphasis && css['.psds-table__cell--emphasis'],
      align && css[`.psds-table__cell--align-${align}`]
    ),
  columnHeader: ({ sort }) =>
    glamor.css({
      ...css['.psds-table__column-header'],
      ...css[`.psds-table__column-header--sort-${sort}`]
    })
}

const SortIconAsc = _ => <span>A</span>
const SortIconDesc = _ => <span>D</span>
const SortIconDefault = _ => <span>S</span>

const getSortIcon = props =>
  ({
    [vars.columnHeaderSorts.asc]: <SortIconAsc />,
    [vars.columnHeaderSorts.desc]: <SortIconDesc />
  }[props.sort] || <SortIconDefault />)

class ColumnHeader extends React.Component {
  render() {
    const { props } = this
    return (
      <div {...styles.columnHeader(props)}>
        {props.children}
        {props.sort && getSortIcon(props)}
      </div>
    )
  }
}
ColumnHeader.propTypes = {
  sort: PropTypes.oneOf([true, ...Object.keys(vars.columnHeaderSorts)])
}
ColumnHeader.defaultProps = {}
ColumnHeader.displayName = 'Table.ColumnHeader'

class Cell extends React.Component {
  render() {
    const { props } = this
    const style = props.style || {}
    if ((!props.styles || (props.styles && !props.styles.flex)) && props.flex)
      style.flex = props.flex
    return (
      <div {...styles.cell(props)} style={style}>
        {props.children}
      </div>
    )
  }
}
Cell.propTypes = {
  emphasis: PropTypes.bool,
  flex: PropTypes.string
}
Cell.defaultProps = {
  emphasis: false
}
Cell.displayName = 'Table.Cell'

class Row extends React.Component {
  render() {
    const { props } = this
    return <div {...glamor.css(css['.psds-table__row'])}>{props.children}</div>
  }
}
Row.displayName = 'Table.Row'

class Table extends React.Component {
  render() {
    const { props } = this
    return <div {...glamor.css(css['.psds-table'])}>{props.children}</div>
  }
}
Table.displayName = 'Table'
Table.propTypes = {}
Table.defaultProps = {}
Table.contextTypes = {
  themeName: PropTypes.string
}

Table.Row = Row
Table.Cell = Cell
Table.ColumnHeader = ColumnHeader

Table.cellAligns = vars.cellAligns
Table.columnHeaderSorts = vars.columnHeaderSorts

export const cellAligns = vars.cellAligns
export const columnHeaderSorts = vars.columnHeaderSorts

export default Table
