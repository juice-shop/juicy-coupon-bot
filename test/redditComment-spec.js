/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const chai = require('chai')
const expect = chai.expect
const redditComment = require('../lib/redditPost')

describe('Reddit comment', () => {
  it('should always contain discount amount in bold text', () => {
    for (let i = 10; i < 40; i++) {
      expect(redditComment(i)).to.include(`**${i}%**`)
    }
  })

  it('should always contain coupon code in code syntax', () => {
    for (let i = 0; i < 100; i++) {
      expect(redditComment(undefined, ':COUPON:')).to.include('`:COUPON:`')
    }
  })

  it('should always mention expiration date', () => {
    for (let i = 0; i < 100; i++) {
      expect(redditComment(undefined, undefined, ':EXPIRATION:')).to.include(':EXPIRATION:')
    }
  })
})
