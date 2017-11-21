/*
    ./webpack.config.js
*/
const webpack = require('webpack');
// const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const AssetsPlugin = require('assets-webpack-plugin')
  ;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: '!!raw-loader!./server/src/views/index.ejs',
  filename: 'index.html',
  inject: 'body',
});
const root = process.cwd();
module.exports = () =>
  // devtool: 'source-map',
  // target: 'web',
  ({
    context: path.resolve(__dirname),
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json'],
      modules: [
        path.resolve('./client'),
        path.resolve('./admin'),
        path.resolve('./shared'),
        path.resolve('./node_modules'),
      ],
      alias: {
        Shared: path.resolve(__dirname, './shared'),
      },
    },
    entry: {
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'react-router',
        'redux',
        'redux-thunk',
      ],
      app: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './client/renderers/hmr.js',
      ],
      admin: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './admin/renderers/hmr.js',
      ],
    },
    // stats: "detailed",
    output: {
      path: path.join(__dirname, 'public/dist'),
      filename: '[name].js',
      // chunkFilename: '[id].[hash].js',
      publicPath: '/dist/',
    },
    devServer: {
      publicPath: '/dist',
      port: 8080,
      host: 'localhost',
      hot: true,
      inline: true,
      proxy: {
        '**': 'http://localhost:3000',
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-2'],
            },
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /(\.css|\.scss)$/,
          loader: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                query: {
                  localIdentName: '[hash:8]',
                  modules: true,
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      // new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(['public/dist']),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NamedModulesPlugin(),
      new AssetsPlugin({ path: path.join(process.cwd(), 'public/dist/'), filename: 'assets.json' }),
      new ManifestPlugin({
        merge: 'customize',
        customize(a, b, c, d) { return test(a); },
        done(manifest, stats) {
          console.log(`STATS FROM BUILD ${stats}`);
        },
      },
      ),
      new ExtractTextPlugin({
        publicPath: '/public',
        filename: '[name].css',
        allChunks: true,
      }),
      // new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }),
      //  new webpack.optimize.CommonsChunkPlugin({
      //    name: 'runtime'
      //  }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  });
