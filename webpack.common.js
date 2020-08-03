const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


const htmlConfig = {
  title: 'Webpack 5',
  filename: 'index.html',
  inject: 'body',
  scriptLoading: 'defer',
  favicon: './public/favicon.ico',
  meta: {
    viewport: 'width=device-width, initial-scale=1.0'
  },
  template: './public/template.html',
}

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue/]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlConfig),
  ]
}