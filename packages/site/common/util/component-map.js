const docs = require('component-docs-loader!')
console.log('docs', docs.components[0].component)

const componentMap = docs.components.reduce((acc, c) => {
  acc[c.name] = {
    name: c.name,
    doc: c.doc
  }
  return acc
}, {})

export default componentMap
