
# Exclude

Remove values in an array contained in other arrays.

```js
var arr = [
  1, 2, 3, 4, 5
]

var exclude = require('array-exclude')

var res = exclude(arr, [
  [2, 3],
  [5]
])

// => [1, 4]
