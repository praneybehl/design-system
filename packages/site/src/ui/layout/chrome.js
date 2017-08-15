import core from '@pluralsight/ps-design-system-core'
import Helmet from 'react-helmet'
import React from 'react'

import GlobalStyles from './global-styles'
import Head from './head'
import SideNav from './side-nav'
import TopBar from './top-bar'

export default props =>
  <div>
    <GlobalStyles />
    <Head title={props.title} />
    <TopBar />
    <div className="page">
      <div className="side">
        <SideNav />
      </div>
      <main className="main">
        {props.fullWidthContent}
        <div className="content">
          {props.children}
        </div>
      </main>
    </div>
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column-reverse;
      }
      .main {
        background: ${core.colors.white};
      }
      .content {
        margin: 0 auto;
        width: 100%;
        padding: ${core.layout.spacingSmall} ${core.layout.spacingLarge} ${core
      .layout.spacingLarge} ${core.layout.spacingLarge};
      }
      @media screen and (min-width: 769px) {
        .page {
          flex-direction: row;
        }
        .side {
          width: 200px;
        }
        .main {
          flex: 1;
          border-left: 1px solid ${core.colors.gray01};
        }
        .content {
          max-width: 900px;
          min-width: 300px;
        }
      }
    `}</style>
  </div>
