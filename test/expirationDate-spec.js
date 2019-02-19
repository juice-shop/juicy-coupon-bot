const chai = require('chai')
const expect = chai.expect
const expirationDate = require('../lib/expirationDate')

describe('Expiration date', () => {
  it('should be last day of month of passed date', () => {
    expect(expirationDate(new Date(2019, 0, 1))).to.equal('2019-01-31')
    expect(expirationDate(new Date(2019, 1, 1))).to.equal('2019-02-28')
    expect(expirationDate(new Date(2019, 2, 1))).to.equal('2019-03-31')
    expect(expirationDate(new Date(2019, 3, 1))).to.equal('2019-04-30')
    expect(expirationDate(new Date(2019, 4, 1))).to.equal('2019-05-31')
    expect(expirationDate(new Date(2019, 5, 1))).to.equal('2019-06-30')
    expect(expirationDate(new Date(2019, 6, 1))).to.equal('2019-07-31')
    expect(expirationDate(new Date(2019, 7, 1))).to.equal('2019-08-31')
    expect(expirationDate(new Date(2019, 8, 1))).to.equal('2019-09-30')
    expect(expirationDate(new Date(2019, 9, 1))).to.equal('2019-10-31')
    expect(expirationDate(new Date(2019, 10, 1))).to.equal('2019-11-30')
    expect(expirationDate(new Date(2019, 11, 1))).to.equal('2019-12-31')
  })
})
