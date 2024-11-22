/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const chai = require('chai')
const expect = chai.expect
const blueSkyPost = require('../lib/blueSkyPost')

describe('BlueSky post', () => {
  it('should always include robot emoji', () => {
    for (let i = 0; i < 100; i++) {
      expect(blueSkyPost()).to.include('[🤖]')
    }
  })

  it('should always include #coupon hashtag', () => {
    for (let i = 0; i < 100; i++) {
      expect(blueSkyPost()).to.include('#coupon')
    }
  })

  it('should always mention discount amount', () => {
    for (let i = 10; i < 40; i++) {
      expect(blueSkyPost(i)).to.include(i + '%')
    }
  })

  it('should always contain coupon code', () => {
    for (let i = 0; i < 100; i++) {
      expect(blueSkyPost(undefined, ':COUPON:')).to.include(':COUPON:')
    }
  })

  it('should always mention expiration date', () => {
    for (let i = 0; i < 100; i++) {
      expect(blueSkyPost(undefined, undefined, ':EXPIRATION:')).to.include(':EXPIRATION:')
    }
  })

  it('should never be longer than 200 characters', () => {
    for (let i = 0; i < 100; i++) {
      expect(blueSkyPost().length <= 200).to.equal(true)
    }
  })
})
