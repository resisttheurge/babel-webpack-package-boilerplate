'use strict'

const { resolve } = require('path')

const from =
  path => (...segs) => resolve(path, ...segs)

const project =
  from(resolve(__dirname, '..'))

const { bin, config, dist, src } =
  Object.assign(
    { project },
    ...['bin', 'config', 'dist', 'src']
      .map(
        name => ({
          [name]: from(project(name))
        })
      )
  )

module.exports = {
  from,
  paths: {
    project,
    bin,
    config,
    dist,
    src
  }
}
