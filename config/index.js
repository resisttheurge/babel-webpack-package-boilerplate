'use strict'

const { resolve } = require('./resolve')
const { rules } = require('./rules')
const { plugins } = require('./plugins')
const { entry, output } = require('./io')
const { devtool } = require('./dev')
const { target } = require('./target')

module.exports = {
  entry,
  output,
  resolve,
  plugins,
  devtool,
  target,
  module: { rules }
}
