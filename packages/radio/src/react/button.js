import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as propsUtil from '@pluralsight/ps-design-system-util/props'

import css from '../css'
import * as vars from '../vars'

const textInputHtmlPropsWhitelist = [
  'type',
  'name',
  'autocomplete',
  'autofocus',
  'role',
  'tabIndex',
  'value',
  'defaultValue',
  /^on/,
  /^aria-/,
  /^data-/,
  /^form/
]

const styles = {
  button: () => glamor.css(css['.psds-radio-button']),
  circle: ({ checked }, { isFocused }) =>
    glamor.css(
      css['.psds-radio-button__circle'],
      checked && css['.psds-radio-button__circle--checked'],
      { ':focus': css['.psds-radio-button__circle:focus'] },
      isFocused
        ? {
            ':before': {
              ...css['.psds-radio-button__circle:focus:before']
            },
            ':after': css['.psds-radio-button__circle:focus:after']
          }
        : null
    ),
  circleInner: ({ checked }) =>
    glamor.css(css['.psds-radio-button__circle-inner']),
  input: () => glamor.css(css['.psds-radio-button__input']),
  label: () => glamor.css(css['.psds-radio-button__label'])
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isFocused: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleClick(evt) {
    this.props._onClick(evt)
    if (typeof this.props.onClick === 'function') this.props.onClick(evt)
  }
  handleFocus() {
    this.setState(_ => ({ isFocused: true }))
  }
  handleBlur() {
    this.setState(_ => ({ isFocused: false }))
  }
  render() {
    const { context, props, state } = this
    const allProps = {
      ...props,
      themeName: context.themeName || themeDefaultName
    }
    // TODO: whitelist and ...props onto input
    if (props.value === 'blue') {
      console.log('isFocused', this.state.isFocused)
    }

    return (
      <label {...styles.button(allProps)}>
        <div
          role="radio"
          aria-checked={allProps.checked}
          tabIndex="-1"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...styles.circle(allProps, state)}
        >
          {allProps.checked && <div {...styles.circleInner(allProps)} />}
        </div>
        <input
          tabIndex="tabIndex || 0/-1"
          type="radio"
          readOnly
          checked={allProps.checked}
          onChange={allProps.onChange}
          value={allProps.value}
          ref={allProps.innerRef}
          {...styles.input(allProps)}
        />
        <div {...styles.label(allProps)}>{allProps.label}</div>
      </label>
    )
  }
}

Button.propTypes = {
  checked: PropTypes.bool,
  innerRef: PropTypes.func,
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  _onClick: PropTypes.func
}
Button.defaultProps = {
  checked: false
}
Button.contextTypes = {
  themeName: PropTypes.string
}

export default Button
