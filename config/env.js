'use strict'

const env = id => process.env.NODE_ENV === id

const envs = ['DEV', 'PROD', 'TEST']

const { DEV, PROD, TEST } =
  Object.assign(...envs.map(e => ({ [e]: env(e) })))

module.exports = {
  env,
  DEV,
  PROD,
  TEST
}
