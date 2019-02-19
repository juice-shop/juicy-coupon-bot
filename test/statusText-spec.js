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

  it('should always contain coupon code', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText(42, new Date(2019, 0, 1))).to.include('n<Mibiw06y')
    }
  })

  it('should always mention discount amount', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText(42)).to.include('42%')
    }
  })

  it('should always mention expiration date', () => {
    for (let i = 0; i < 100; i++) {
      expect(statusText(undefined, new Date(2019, 0, 1))).to.include('2019-01-31')
    }
  })
})
