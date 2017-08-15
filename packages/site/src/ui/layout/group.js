import core from '@pluralsight/ps-design-system-core'
import React from 'react'

export default props =>
  <div className="root">
    {props.children}
    <style jsx>{`
      .root {
        padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge};
        border-bottom: 1px solid ${core.colors.gray01};
      }
    `}</style>
  </div>
