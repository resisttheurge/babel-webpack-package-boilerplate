import assert from 'assert'

import hello from 'hello'
import world from 'world'

describe(
  'the hello function',
  () => it('should return the string "hello"', () =>
    assert.equal(hello(), "hello")
  )
)

describe(
  'the world function',
  () => it('should return the string "world"', () =>
    assert.equal(world(), "world")
  )
)
