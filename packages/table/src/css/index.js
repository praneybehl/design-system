import core from '@pluralsight/ps-design-system-core'

import * as vars from '../vars'

export default {
  '.psds-table': {
    width: '100%',
    fontWeight: core.type.fontWeightBook,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard
  },

  // __row
  '.psds-table__row': {
    display: 'flex',
    borderBottom: `1px solid ${core.colors.gray04}`
  },

  // __cell
  '.psds-table__cell': {
    flex: 1,
    padding: `${core.layout.spacingSmall} 0`,
    color: core.colors.gray02
  },
  '.psds-table__cell--emphasis': {
    color: core.colors.white
  },
  [`.psds-table__cell--align-${vars.cellAligns.left}`]: {
    textAlign: 'left'
  },
  [`.psds-table__cell--align-${vars.cellAligns.right}`]: {
    textAlign: 'right'
  },
  [`.psds-table__cell--align-${vars.cellAligns.center}`]: {
    textAlign: 'center'
  },

  // __column-header
  '.psds-table__column-header': {
    padding: `${core.layout.spacingSmall} 0`,
    color: core.colors.gray02
  },
  [`.psds-table__column-header--sort-${vars.columnHeaderSorts.asc}`]: {
    color: core.colors.white
  },
  [`.psds-table__column-header--sort-${vars.columnHeaderSorts.desc}`]: {
    color: core.colors.white
  }
}
