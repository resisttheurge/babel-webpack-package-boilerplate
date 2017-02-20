/* global describe */

import { property } from 'jsverify'
import { hello } from './hello'

describe('the hello function', function () {
  property('should return `hello`', function () {
    return hello() === 'hello'
  })
})
