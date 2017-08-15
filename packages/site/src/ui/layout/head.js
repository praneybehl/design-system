import Head from 'next/head'
import React from 'react'

const defaultTitle = 'Pluralsight Design System'

export const capitalize = str =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str

const formatTitle = props =>
  props.title ? capitalize(props.title) + ' | ' + defaultTitle : defaultTitle

export default props =>
  <Head>
    <title>
      {props.title || 'Pluralsight Design System'}
    </title>
    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cloud.typography.com/6966154/691568/css/fonts.css"
    />
    <link rel="stylesheet" href="/static/css/ps-design-system-normalize.css" />
  </Head>
