import core from '@pluralsight/ps-design-system-core'
import React from 'react'

const topBarHeight = '8px'

export default _ =>
  <div className="root">
    <style jsx>{`
    .root {
      height: ${topBarHeight};
      background: ${core.colors.gradientHorz};
    }
`}</style>
  </div>
