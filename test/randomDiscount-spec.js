/*
 * Copyright (c) 2019-2021 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const chai = require('chai')
const expect = chai.expect
const randomDiscount = require('../lib/randomDiscount')

describe('Random discount', () => {
  it('should always be between 10% and 40%', () => {
    for (let i = 0; i < 100; i++) {
      expect(randomDiscount() >= 10).to.equal(true)
      expect(randomDiscount() <= 40).to.equal(true)
    }
  })
})
