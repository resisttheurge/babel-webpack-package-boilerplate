/* global describe */

import { property } from 'jsverify'
import { greeting } from 'greeting'

describe('mocha and jsverify', function () {
  property('are working', function () {
    return true
  })
})

describe('the greeting function', function () {
  property('is working as expected', function () {
    return greeting() === 'hello, world!'
  })
})
