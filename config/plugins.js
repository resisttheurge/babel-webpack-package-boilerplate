'use strict'

const { DefinePlugin } = require('webpack')

const { DEV, PROD, TEST } = require('./env')

const define =
  new DefinePlugin({
    DEV,
    PROD,
    TEST
  })

module.exports = {
  define,
  plugins: [
    define
  ]
}
