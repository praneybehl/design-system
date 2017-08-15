import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

import Link from '../common/link'

const linkStyles = glamor.css({
  display: 'flex',
  alignItems: 'center',
  fontSize: core.type.fontSizeSmall,
  lineHeight: core.type.lineHeightExtra,
  textDecoration: 'none',
  color: `${core.colors.gray03} !important`,
  whiteSpace: 'nowrap',
  transition: `all ${core.motion.speedFastest} ease-in-out`,
  ':hover': {
    color: `${core.colors.black} !important`,
    textDecoration: 'none !important',
    '& span': {
      width: '8px',
      paddingLeft: '8px',
      marginRight: '12px'
    }
  }
  // TODO: active
})

export default props =>
  <div className="root">
    <Link href={props.href} className={linkStyles}>
      <span aria-hidden="true" className="box" />
      {props.children}
    </Link>
    <style jsx>{`
      .root {
        padding-left: 14px; /* TODO: how to handle additive spacing scenarios? */
      }
      .box {
        display: inline-block;
        height: 8px;
        width: 0px;
        margin-right: 0px;
        background: ${core.colors.gradientHorz};
        transition: all ${core.motion.speedFastest} ease-in-out;
      }
/* TODO: rm */
      .root .link {
        display: flex;
        align-items: center;
        font-size: ${core.type.fontSizeSmall};
        line-height: ${core.type.lineHeightExtra};
        text-decoration: none;
        color: ${core.colors.gray03};
        white-space: nowrap;
        transition: all ${core.motion.speedFastest} ease-in-out;
      }
      .root .link:hover {
        color: ${core.colors.black};
        text-decoration: none;
      }
      .link:hover .box {
        width: 8px;
        padding-left: 8px;
        margin-right: 12px;
      }
      .linkActive {
        color: ${core.colors.black};
        font-weight: ${core.type.fontWeightBold};
      }
      .linkActive .box {
        width: 8px;
        padding-left: 8px;
        margin-right: 12px;
      }
   `}</style>
  </div>
