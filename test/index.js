
var exclude = require('..')

describe('Exclude', function () {
  it('should exclude', function () {
    exclude([1, 2, 3, 4, 5], [
      [1],
      [3, 4]
    ]).should.eql([2, 5])
  })
})
