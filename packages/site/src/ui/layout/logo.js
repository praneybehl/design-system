import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import React from 'react'

import { Link } from '../common'

const Svg = props =>
  <svg className="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
        <stop stopColor="#F96816" offset="0%" />
        <stop stopColor="#E80A89" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M16 32c8.837 0 16-7.164 16-15.9993C32.0007 7.164 24.837 0 16 0 7.1637 0 0 7.164 0 16.0007 0 24.836 7.163 32 16 32z"
        fill="url(#a)"
      />
      <path
        d="M8.625 9.5v13l11.25-6.5-11.25-6.5zM10 11.8824L17.1265 16 10 20.1174v-8.235z"
        fill="#FFF"
      />
      <path
        d="M11.875 7.625v16.75L26.25 16 11.875 7.625zm1.375 2.3924L23.5186 16 13.25 21.9826V10.0174z"
        fill="#FFF"
      />
    </g>
    <style jsx>{`
      .img {
        height: 31px;
        width: 31px;
        margin-right: 8px;
      }
    `}</style>

  </svg>

const linkStyles = glamor.css({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none !important'
  },
  '@media(min-width: 769px)': {
    padding: '72px 0'
  }
})

export default _ =>
  <div className="root">
    <Link href="/" {...linkStyles}>
      <span className="linkInner">
        <Svg />
        <h2 className="text">
          <span className="textCompany">PLURALSIGHT</span>
          <span className="textTitle">
            DESIGN SYSTEM
          </span>
        </h2>
      </span>

    </Link>
    <style jsx>{`
      .root {
        border-bottom: 1px solid ${core.colors.gray01}
      }
      .linkInner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 72px 0;
      }
      .text {
        margin: 0;
      }
      .textCompany {
        display: block;
        letter-spacing: .15em;
        font-size: ${core.type.fontSizeXSmall};
        font-weight: ${core.type.fontWeightMedium};
        color: #000;
        font-family: ${core.type.fontFamily};
        padding-top: ${core.layout.spacingXSmall};
      }
      .textTitle {
        display: block;
        font-size: 8px;
        color: ${core.colors.gray03};
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </div>
