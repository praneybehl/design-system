import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

const getStyle = themeName => ({
  overflow: 'scroll',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transition: `background ${core.motion.speedNormal}`,
  backgroundSize: 'cover',
  background: 'transparent',
  ...{
    [Theme.names.dark]: { background: core.colors.gray06 },
    [Theme.names.light]: { background: core.colors.bone }
  }[themeName]
})

export class ThemeDecorator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { themeName: Theme.defaultName }
    this.channel = this.props.addons.getChannel()
    this.story = this.props.story()

    this.setTheme = this.setTheme.bind(this)
  }
  componentWillMount() {
    this.channel.on('theme', this.setTheme)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.story = nextProps.story()
    }
  }
  componentWillUnmount() {
    this.channel.removeListener('theme', this.setTheme)
  }
  setTheme(themeName) {
    this.setState({ themeName })
  }
  handleClick(themeName) {
    this.setState({ themeName })

    this.channel.emit('ps-design-system-theme/names/select', themeName)
  }
  render() {
    return (
      <div style={getStyle(this.state.themeName)}>
        <Theme name={this.state.themeName}>{this.story}</Theme>
      </div>
    )
  }
}

// NOTE: unconventional need to pass addons here.  dealt with this for a day
// https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel
// this is the way I solved it, finally
export default addons => story => (
  <ThemeDecorator addons={addons} story={story} />
)
