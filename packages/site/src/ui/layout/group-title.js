import core from '@pluralsight/ps-design-system-core'
import React from 'react'

export default props =>
  <h3 className="root">
    {props.children}
    <style jsx>{`
      .root {
        margin: 0;
        color: ${core.colors.black};
        font-size: ${core.type.fontSizeXSmall};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </h3>
