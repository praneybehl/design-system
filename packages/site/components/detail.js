import React from 'react'

import ButtonDoc from './button'
import ComponentDoc from './component-doc'
import componentMap from '../common/util/component-map'
import InstallationDoc from './installation'
import Chrome from '../layouts/chrome'
import TabsDoc from './tabs'
import TextStylesDoc from './text-styles'

const docs = {
  button: <ButtonDoc />,
  installation: <InstallationDoc />,
  tabs: <TabsDoc />,
  'text-styles': <TextStylesDoc />
}

const renderDoc = props => {
  const componentId = props.match.params.componentId
  if (componentId === 'button') {
    const component = componentMap[componentId]

    return <ComponentDoc {...component} />
  } else return docs[componentId]
}

export default props =>
  <Chrome title={props.match.params.componentId}>
    {renderDoc(props)}
  </Chrome>
