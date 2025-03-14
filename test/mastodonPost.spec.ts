/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { test } from 'node:test'
import assert from 'node:assert'
import mastodonPost from '../lib/mastodonPost.ts'

test('Mastodon post should always include robot emoji', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost({ discount: 20, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).includes('[🤖]'))
  }
})

test('Mastodon post should always include #coupon hashtag', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost({ discount: 20, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).includes('#coupon'))
  }
})

test('Mastodon post should always mention discount amount', () => {
  for (let i = 10; i < 40; i++) {
    assert.ok(mastodonPost({ discount: i, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).includes(i + '%'))
  }
})

test('Mastodon post should always contain coupon code', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost({ discount: 20, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).includes(':COUPON:'))
  }
})

test('Mastodon post should always mention expiration date', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost({ discount: 20, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).includes(':EXPIRATION:'))
  }
})

test('Mastodon post should never be longer than 500 characters', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost({ discount: 20, coupon: ':COUPON:', expiryDate: ':EXPIRATION:' }).length <= 500)
  }
})
