'use strict'

const test = require('tape')

const chainCall = require('./index')

const mockApi = {
  feedOnce: () => ({
    feedTwice: (result) => result
  })
}

test('is a fn', (t) => {
  t.equal(typeof chainCall, 'function')
  t.end()
})

test('correctly chains method calls', (t) => {
  const result = chainCall(mockApi, [
    ['feedOnce'],
    ['feedTwice', 'result']
  ])
  t.equal(result, 'result')
  t.end()
})

test('accepts string as call', (t) => {
  const result = chainCall(mockApi, [
    'feedOnce',
    ['feedTwice', 'result']
  ])
  t.equal(result, 'result')
  t.end()
})

test('throws if prop is not a fn', (t) => {
  t.throws(() => chainCall(mockApi, ['blah']), /not a function/)
  t.end()
})
