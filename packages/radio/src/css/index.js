import core from '@pluralsight/ps-design-system-core'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/vars'
import { transparentize } from 'polished'

import * as vars from '../vars'

export default {
  // group

  // __button-container
  '.psds-radio-group__button-container': {
    padding: `${core.layout.spacingXXSmall} 0`
  },

  // button

  '.psds-radio-button': {
    display: 'flex',
    alignItems: 'center',
    padding: `${core.layout.spacingXXSmall} 0`,
    cursor: 'pointer'
  },

  // __circle
  '.psds-radio-button__circle': {
    display: 'inline-block',
    height: '16px',
    width: '16px',
    borderRadius: '50%',
    border: `2px solid ${core.colors.gray02}`,
    background: core.colors.gray05
  },
  '.psds-radio-button__circle:focus': {
    outline: 'none'
  },
  '.psds-radio-button__circle:focus:before': {
    content: ' ',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: core.colors.black,
    zIndex: '-1',
    borderRadius: '2px'
  },
  '.psds-radio-button__circle:focus:after': {
    content: ' ',
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    background: core.colors.blue,
    zIndex: '-2',
    borderRadius: '4px'
  },
  '.psds-radio-button__circle--checked': {
    borderColor: core.colors.blue
  },

  // __circle-inner
  '.psds-radio-button__circle-inner': {
    display: 'block',
    height: 'calc(100% - 4px)',
    width: 'calc(100% - 4px)',
    margin: '2px',
    borderRadius: '50%',
    background: core.colors.blue
  },

  // __input
  '.psds-radio-button__input': {
    display: 'none'
  },

  // __label
  '.psds-radio-button__label': {
    marginLeft: core.layout.spacingSmall,
    color: core.colors.bone,
    fontSize: core.type.fontSizeSmall,
    lineHeight: core.type.lineHeightStandard,
    fontWeight: core.type.fontWeightMedium
  }

  // // __field
  // '.psds-radio-button__field': {
  //   position: 'relative',
  //   height: '40px',
  //   minWidth: '192px',
  //   width: '100%',
  //   borderRadius: '2px',
  //   background: core.colors.bone,
  //   fontSize: core.type.fontSizeSmall,
  //   lineHeight: core.type.lineHeightStandard,
  //   fontWeight: core.type.fontWeightBook,
  //   color: core.colors.gray03,
  //   padding: `${core.layout.spacingXSmall} ${core.layout.spacingMedium}`,
  //   border: 'none'
  // },
  // '.psds-radio-button__field:focus': {
  //   outline: 'none'
  // },
  // [`.psds-radio-button__field.psds-theme--${themeNames.light}`]: {
  //   background: core.colors.white,
  //   border: `1px solid ${core.colors.gray02}`
  // },
  // [`.psds-radio-button__field--appearance-${vars.appearances.subtle}`]: {
  //   color: core.colors.gray01,
  //   background: core.colors.gray06,
  //   border: `1px solid ${core.colors.gray03}`
  // },
  // [`.psds-radio-button__field--icon-align-${vars.iconAligns.left}`]: {
  //   padding: `0 ${core.layout.spacingMedium} 0 calc(${
  //     core.layout.spacingXSmall
  //   } + ${iconVars.widths.medium} + ${core.layout.spacingXSmall})`
  // },
  // [`.psds-radio-button__field--icon-align-${vars.iconAligns.right}`]: {
  //   padding: `0 calc(${core.layout.spacingXSmall} + ${
  //     iconVars.widths.medium
  //   } + ${core.layout.spacingXSmall}) 0 ${core.layout.spacingMedium}`
  // },

  // // __field-container
  // '.psds-radio-button__field-container': {
  //   position: 'relative',
  //   display: 'flex',
  //   alignItems: 'center',
  //   minWidth: `calc(192px + ${iconVars.widths.medium} + ${
  //     core.layout.spacingXSmall
  //   })`
  // },
  // '.psds-radio-button__field-container:focus:before': {
  //   content: ' ',
  //   position: 'absolute',
  //   top: '-1px',
  //   left: '-1px',
  //   right: '-1px',
  //   bottom: '-1px',
  //   background: core.colors.black,
  //   zIndex: '-1',
  //   borderRadius: '2px'
  // },
  // [`.psds-radio-button__field-container.psds-theme--${
  //   themeNames.light
  // }:focus:before`]: {
  //   background: core.colors.bone
  // },
  // '.psds-radio-button__field-container:focus:after': {
  //   content: ' ',
  //   position: 'absolute',
  //   top: '-4px',
  //   left: '-4px',
  //   right: '-4px',
  //   bottom: '-4px',
  //   background: core.colors.blue,
  //   zIndex: '-2',
  //   borderRadius: '4px'
  // },
  // '.psds-radio-button__field-container--error:before': {
  //   content: ' ',
  //   position: 'absolute',
  //   top: '-1px',
  //   left: '-1px',
  //   right: '-1px',
  //   bottom: '-1px',
  //   background: core.colors.black,
  //   zIndex: '-1',
  //   borderRadius: '2px'
  // },
  // [`.psds-radio-button__field-container--error.psds-theme--${
  //   themeNames.light
  // }:before`]: {
  //   background: core.colors.bone
  // },
  // '.psds-radio-button__field-container--error:after': {
  //   content: ' ',
  //   position: 'absolute',
  //   top: '-4px',
  //   left: '-4px',
  //   right: '-4px',
  //   bottom: '-4px',
  //   background: core.colors.red,
  //   zIndex: '-2',
  //   borderRadius: '4px'
  // },

  // // __icon
  // '.psds-radio-button__icon': {
  //   position: 'absolute',
  //   left: core.layout.spacingXSmall,
  //   display: 'flex',
  //   alignItems: 'center',
  //   color: core.colors.gray03
  // },
  // [`.psds-radio-button__icon.psds-theme--${themeNames.light}`]: {
  //   color: core.colors.gray02
  // },
  // [`.psds-radio-button__icon--icon-align-${vars.iconAligns.right}`]: {
  //   left: 'auto',
  //   right: core.layout.spacingXSmall
  // },
  // [`.psds-radio-button__icon--appearance-${vars.appearances.subtle}`]: {
  //   color: core.colors.gray02
  // },

  // // __label
  // '.psds-radio-button__label': {
  //   color: core.colors.bone,
  //   fontSize: core.type.fontSizeSmall,
  //   lineHeight: '16px',
  //   fontWeight: core.type.fontWeightMedium,
  //   paddingBottom: core.layout.spacingXSmall
  // },
  // [`.psds-radio-button__label.psds-theme--${themeNames.light}`]: {
  //   color: core.colors.gray05
  // },

  // // __sub-label
  // '.psds-radio-button__sub-label': {
  //   color: core.colors.gray02,
  //   fontSize: core.type.fontSizeXSmall,
  //   lineHeight: '16px',
  //   fontWeight: core.type.fontWeightMedium,
  //   paddingTop: core.layout.spacingXSmall
  // },
  // [`.psds-radio-button__sub-label.psds-theme--${themeNames.light}`]: {
  //   color: core.colors.gray03
  // },

  // // __error
  // '.psds-radio-button__error': {
  //   position: 'absolute',
  //   right: `calc(-1 * (${iconVars.widths.medium} + ${
  //     core.layout.spacingXSmall
  //   }))`,
  //   display: 'flex',
  //   alignItems: 'center',
  //   color: core.colors.red,
  //   marginLeft: core.layout.spacingXSmall
  // }
}
