const chai = require('chai')
const expect = chai.expect
const statusText = require('../lib/statusText')

describe('Status Text', () => {
  it('should include robot emoji', () => {
    expect(statusText()).to.include('[🤖]')
  })

  it('should include #coupon hashtag', () => {
    expect(statusText()).to.include('#coupon')
  })

  it('should mention discount amount', () => {
    expect(statusText(40)).to.include('40%')
  })
})
