'use strict'

const { DEV } = require('./env')

const devtool =
  DEV ? 'source-map' : 'nosource-source-map'

module.exports = {
  devtool
}
