const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractTextPlugin = new ExtractTextPlugin('styles.css')

module.exports = {
  // webpack(config) {
  //   // config.plugins.push(extractTextPlugin)

  //   config.module.rules = config.module.rules.concat([
  //     {
  //       test: /\.module\.css$/,
  //       exclude: /node_modules/,
  //       use: [
  //         'style-loader',
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             modules: true,
  //             importLoaders: 1,
  //             localIdentName: '[local]___[hash:base64:5]'
  //           }
  //         },
  //         'postcss-loader'
  //       ]
  //       // use: ExtractTextPlugin.extract({
  //       //   fallback: 'style-loader',
  //       //   use: [
  //       //     {
  //       //       loader: 'css-loader',
  //       //       options: {
  //       //         modules: true,
  //       //         importLoaders: 1,
  //       //         localIdentName: '[local]___[hash:base64:5]'
  //       //       }
  //       //     },
  //       //     'postcss-loader'
  //       //   ]
  //       // })
  //     },
  //     {
  //       test: /^(?!.*?\.module).*\.css$/,
  //       include: /codemirror/,
  //       use: ['style-loader', 'css-loader']
  //       // use: ExtractTextPlugin.extract({
  //       //   fallback: 'style-loader',
  //       //   use: ['css-loader']
  //       // })
  //     }
  //   ])

  //   return config
  // },
  exportPathMap() {
    return {
      '/': { page: '/' }
      // TODO: add other paths
    }
  }
}
