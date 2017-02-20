'use strict'

const { paths: { src, dist } } = require('./paths')

const entry = {
  main: ['babel-polyfill', src('main')],
  lib: ['babel-polyfill', src('lib')]
}

const output = {
  path: dist(),
  filename: '[name].js'
}

module.exports = { entry, output }
