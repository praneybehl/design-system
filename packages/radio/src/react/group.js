import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  buttonContainer: _ => glamor.css(css['.psds-radio-group__button-container']),
  group: ({ disabled }) =>
    glamor.css(
      css['.psds-radio-group'],
      disabled && css['.psds-radio-group--disabled']
    )
}

class Group extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value }
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }
  handleSelect(evt) {
    const value = evt.target.value
    this.setState(_ => ({ value }), this.props.onSelect)
  }
  render() {
    const { handleSelect, props, state } = this
    return (
      <div role="radiogroup" {...styles.group(props)}>
        {React.Children.map(props.children, (child, i) => (
          <div {...styles.buttonContainer(props)}>
            {React.cloneElement(child, {
              checked: state.value === child.props.value,
              ...(props.onSelect ? { onChange: handleSelect } : null),
              tabIndex:
                i === 0 && child.props.value > -1 ? child.props.value : 0,
              _onClick: this.handleSelect
            })}
          </div>
        ))}
      </div>
    )
  }
}

Group.propTypes = {
  // TODO: children only Radio.Button
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Group.defaultProps = {
  disabled: false,
  error: false
}

export default Group
