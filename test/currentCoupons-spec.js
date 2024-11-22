/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const chai = require('chai')
const expect = chai.expect
const currentCoupons = require('../lib/currentCoupons')

describe('Current coupons', () => {
  it('API response contains expiration date of coupon', () => {
    const coupons = currentCoupons()
    expect(coupons).to.have.property('expiryDate')
  })

  it('API response contains discount codes from 10% to 40%', () => {
    const coupons = currentCoupons()
    expect(coupons).to.have.nested.property('discountCodes.10%')
    expect(coupons).to.have.nested.property('discountCodes.20%')
    expect(coupons).to.have.nested.property('discountCodes.30%')
    expect(coupons).to.have.nested.property('discountCodes.40%')
  })

  it('throws error when API lookup fails', () => {
    expect(() => currentCoupons('https://httpstat.us/500')).to.throw(/API lookup failed/)
  })
})
