/* global describe */

import { property } from 'jsverify'
import { world } from './world'

describe('the world function', function () {
  property('should return `world`', function () {
    return world() === 'world'
  })
})
