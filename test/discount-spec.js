const chai = require('chai')
const expect = chai.expect
const randomDiscount = require('../lib/discount')

describe('Discount', () => {
  it('should be between 10% and 40%', () => {
    for (let i = 0; i < 100; i++) {
      expect(randomDiscount() >= 10).to.equal(true)
      expect(randomDiscount() <= 40).to.equal(true)
    }
  })
})
