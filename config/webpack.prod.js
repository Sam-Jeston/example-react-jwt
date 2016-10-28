const webpack = require('webpack')
const helpers = require('./helpers')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './ts/index.tsx',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'cheap-module-source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: `Teacher's Pet`
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
