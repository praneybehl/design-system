const docgen = require('react-docgen')
const matter = require('gray-matter')

module.exports = function docgenLoader(src) {
  this.cacheable && this.cacheable()

  let value = {}

  try {
    value = docgen.parse(src)
    const valueMatter = matter(value.description)
    value.description = valueMatter.content
    value.data = valueMatter.data
  } catch (err) {
    console.error('docgen-loader failed to parse', this.request, err.toString())
  }

  return `
  module.hot && module.hot.accept([])
  module.exports = ${JSON.stringify(value, undefined, '\t')}
`
}
