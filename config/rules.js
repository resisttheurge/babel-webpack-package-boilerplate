'use strict'

const babel = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: ['babel-loader']
}

const rules = [babel]

module.exports = { babel, rules }
