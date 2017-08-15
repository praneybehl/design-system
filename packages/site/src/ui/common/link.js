import Link from '@pluralsight/ps-design-system-link/react'
import NavLink from 'next/link'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }
  handleLocationChange(evt) {
    console.log('evt', evt)
  }
  componentDidMount() {
    // TODO: handle active links, waiting for real deal https://github.com/zeit/next.js/pull/2352
    if (window) {
      window.addEventListener('pushstate', this.handleLocationChange)
      window.addEventListener('popstate', this.handleLocationChange)
    }
  }
  handleClick(evt) {
    if (document)
      document.body.scrollTop = document.documentElement.scrollTop = 0
    if (this.props.onClick) this.props.onClick(evt)
  }
  render() {
    return /^http/.test(this.props.href)
      ? <Link {...this.props} onClick={this.handleClick}>
          <a href={this.props.href}>{this.props.children}</a>
        </Link>
      : <NavLink href={this.props.href}>
          <Link {...this.props} onClick={this.handleClick}>
            <a>{this.props.children}</a>
          </Link>
        </NavLink>
  }
}
