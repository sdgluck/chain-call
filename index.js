'use strict'

/**
 * Chain call methods beginning with `fn`.
 * @param {Object} obj The object to invoke calls on
 * @param {Object} calls The methods and their args to call
 */
module.exports = function chainCall (obj, calls) {
  if (!calls || !Array.isArray(calls)) {
    throw new Error('Expecting calls to be array, got "' + typeof calls + '".')
  }

  return calls.reduce(function (result, call) {
    const isArray = Array.isArray(call)
    const methodName = String(isArray ? call[0] : call)
    const args = isArray ? call[1] : null

    if (typeof result[methodName] !== 'function') {
      throw new Error('make-chain-fn: result[' + methodName + '] is not a function.')
    }

    return args ? result[methodName](args) : result[methodName]()
  }, obj)
}
