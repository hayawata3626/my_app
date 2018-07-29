const glob = require('glob');
const path = require('path');

const entries = {};
glob.sync("./src/**/**/*.ts").map(function (file) {
  console.log(file)
  entries[file.replace(/.\/src\//, ".\/dist\/").replace(/\.ts$/, ".js")] = file;
});
module.exports = {
  entry: entries,
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: '[name]',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
};

