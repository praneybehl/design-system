import core from '@pluralsight/ps-design-system-core'
import React from 'react'

import Group from './group'
import GroupTitle from './group-title'
import Link from './link'
import Logo from './logo'

export default _ =>
  <nav className="root">
    <Logo />
    <Group>
      <GroupTitle>INTRODUCTION</GroupTitle>
      <Link href="/">Get Started</Link>
      <Link href="/install">Install</Link>
    </Group>
    <Group>
      <GroupTitle>CORE</GroupTitle>
      <Link href="/core/color">Color</Link>
      <Link href="/core/typography">Typography</Link>
      <Link href="/core/spacing">Spacing</Link>
    </Group>
    <Group>
      <GroupTitle>COMPONENTS</GroupTitle>
      <Link href="/components/button">Buttons</Link>
      <Link href="/components/card">Card</Link>
      <Link href="/components/icon">Icon</Link>
      <Link href="/components/tabs">Tabs</Link>
      <Link href="/components/text-styles">Text styles</Link>
    </Group>

    <style jsx>{`
      .root {
        border-top: 1px solid ${core.colors.gray01};
        display: flex;
        flex-direction: column-reverse;
      }
      @media screen and (min-width: 769px) {
        .root {
          min-height: 100%;
          border-top: none;
          flex-direction: column;
        }
      }
    `}</style>
  </nav>
