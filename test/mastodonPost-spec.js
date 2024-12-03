/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const chai = require('chai')
const expect = chai.expect
const mastodonPost = require('../lib/mastodonPost')

describe('Mastodon post', () => {
  it('should always include robot emoji', () => {
    for (let i = 0; i < 100; i++) {
      expect(mastodonPost()).to.include('[🤖]')
    }
  })

  it('should always include #coupon hashtag', () => {
    for (let i = 0; i < 100; i++) {
      expect(mastodonPost()).to.include('#coupon')
    }
  })

  it('should always mention discount amount', () => {
    for (let i = 10; i < 40; i++) {
      expect(mastodonPost(i)).to.include(i + '%')
    }
  })

  it('should always contain coupon code', () => {
    for (let i = 0; i < 100; i++) {
      expect(mastodonPost(undefined, ':COUPON:')).to.include(':COUPON:')
    }
  })

  it('should always mention expiration date', () => {
    for (let i = 0; i < 100; i++) {
      expect(mastodonPost(undefined, undefined, ':EXPIRATION:')).to.include(':EXPIRATION:')
    }
  })

  it('should never be longer than 500 characters', () => {
    for (let i = 0; i < 100; i++) {
      expect(mastodonPost().length <= 500).to.equal(true)
    }
  })
})
