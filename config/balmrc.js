var balm = require('balm');

module.exports = {
  roots: {
    source: 'app'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['>0.25%', 'not ie 11', 'not op_mini all']
  },
  scripts: {
    entry: {
      main: './app/scripts/main.js' // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
};
