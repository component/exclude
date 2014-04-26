
var flatten = require('array-flatten')

var slice = [].slice

module.exports = function (arr, against) {
  against = flatten(slice.call(arguments, 1))
  return arr.filter(function (val) {
    return !~against.indexOf(val)
  })
}
