/**
 * Created on 6/10/2017.
 * @author vita
 * @desc polyfill functions most taken from js mdn
 */

if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) {
    // .length of function is 2
    'use strict'
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object')
    }

    var to = Object(target)

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index]

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
    return to
  }
}

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0
    }

    if (start + search.length > this.length) {
      return false
    } else {
      return this.indexOf(search, start) !== -1
    }
  }
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined')
    }

    var O = Object(this)
    var len = parseInt(O.length, 10) || 0
    if (len === 0) {
      return false
    }
    var n = fromIndex ? parseInt(arguments[1], 10) : 0
    var k
    if (n >= 0) {
      k = n
    } else {
      k = len + n
      if (k < 0) {
        k = 0
      }
    }
    var currentElement
    while (k < len) {
      currentElement = O[k]
      if (searchElement === currentElement || (searchElement !== searchElement && currentElement !== currentElement)) {
        // NaN !== NaN
        return true
      }
      k++
    }
    return false
  }
}

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}

if (!Array.prototype.randomElement) {
  Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
  }
}
