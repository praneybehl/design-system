const glob = require('glob')
const path = require('path')

const formatComponentName = filepath => {
  const pathParts = path.dirname(filepath).split(path.sep)
  const partBeforeReactSubDir = pathParts[pathParts.length - 2]
  return partBeforeReactSubDir
}

const formatComponentRequire = filepath =>
  `require(${JSON.stringify(filepath)})`

const createDoc = filepath => {
  return `
    {
      name: ${JSON.stringify(formatComponentName(filepath))},
      component: ${formatComponentRequire(filepath)}.default,
      doc: ${formatComponentRequire('!!docgen-loader!' + filepath)}
    }
    `
}

module.exports = function componentDocsLoader() {
  this.cacheable && this.cacheable()

  const componentEntryFiles = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'packages',
    'button',
    /*TODO: re-enable to try all packages at once '*',*/
    'react',
    'index.js'
  )
  console.log('componentEntryFiles', componentEntryFiles)
  const components = glob.sync(componentEntryFiles).map(createDoc)

  return `
module.hot && module.hot.accept([])
module.exports = {
  components: [${components.join(',')}]
}
`
}
