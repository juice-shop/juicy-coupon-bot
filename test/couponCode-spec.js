const chai = require('chai')
const expect = chai.expect
const generateCoupon = require('../lib/couponCode')

describe('Coupon code', () => {
  it('should be z85 encoded "MMMYY-%%"', () => {
    expect(generateCoupon(10, new Date(2019, 0, 1))).to.equal('n<Mibiv#%t')
    expect(generateCoupon(10, new Date(2019, 1, 1))).to.equal('mNYS#iv#%t')
    expect(generateCoupon(10, new Date(2019, 2, 1))).to.equal('o*IViiv#%t')
    expect(generateCoupon(10, new Date(2019, 3, 1))).to.equal('k#pDliv#%t')
    expect(generateCoupon(10, new Date(2019, 4, 1))).to.equal('o*I]piv#%t')
    expect(generateCoupon(10, new Date(2019, 5, 1))).to.equal('n(XRviv#%t')
    expect(generateCoupon(10, new Date(2019, 6, 1))).to.equal('n(XLtiv#%t')
    expect(generateCoupon(10, new Date(2019, 7, 1))).to.equal('k#*Afiv#%t')
    expect(generateCoupon(10, new Date(2019, 8, 1))).to.equal('q:<Iqiv#%t')
    expect(generateCoupon(10, new Date(2019, 9, 1))).to.equal('pEw8oiv#%t')
    expect(generateCoupon(10, new Date(2019, 10, 1))).to.equal('pes[Biv#%t')
    expect(generateCoupon(10, new Date(2019, 11, 1))).to.equal('l}6D$iv#%t')
  })

  it('should by valid in current month by default', () => {
    expect(generateCoupon(10)).to.equal(generateCoupon(10, new Date()))
  })

  it('should generate no coupon code on missing discount', () => {
    expect(generateCoupon()).to.equal(null)
  })
})
