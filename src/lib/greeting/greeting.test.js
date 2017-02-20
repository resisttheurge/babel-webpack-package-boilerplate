/* global describe */

import { property } from 'jsverify'
import { greeting } from './greeting'

describe('greeting', function () {
  property('should return `hello, world!`', function () {
    return greeting() === 'hello, world!'
  })
})
