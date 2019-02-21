const chai = require('chai')
const expect = chai.expect
const statusText = require('../lib/statusText')

describe('Status Text', () => {
  it('should always include robot emoji', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText()).to.include('[🤖]')
    }
  })

  it('should always include #coupon hashtag', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText()).to.include('#coupon')
    }
  })

  it('should always mention discount amount', () => {
    for (let i = 10; i < 40; i++) {
      expect(statusText(i)).to.include(i + '%')
    }
  })

  it('should always contain coupon code', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText(undefined, ':COUPON:')).to.include(':COUPON:')
    }
  })

  it('should always mention expiration date', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText(undefined, undefined, ':EXPIRATION:')).to.include(':EXPIRATION:')
    }
  })
})
