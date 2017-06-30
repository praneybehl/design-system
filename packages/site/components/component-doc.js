import React from 'react'
import styleable from 'react-styleable'

import ComponentDescription from './component-description'

export default _ =>
  <div>
    <br />TODO: title
    <br />TODO: src link
    <br />TODO: install step
    <ComponentDescription
      name={props.name}
      description={props.doc.description}
    />
    <br />TODO: component props table
  </div>
