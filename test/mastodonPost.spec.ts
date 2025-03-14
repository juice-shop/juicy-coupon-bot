/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { test } from 'node:test'
import assert from 'node:assert'
import mastodonPost from '../lib/mastodonPost.ts'
import defaultParams from './testUtils.ts'

test('Mastodon post should always include robot emoji', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost(defaultParams).includes('[🤖]'))
  }
})

test('Mastodon post should always include #coupon hashtag', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost(defaultParams).includes('#coupon'))
  }
})

test('Mastodon post should always mention discount amount', () => {
  for (let i = 10; i < 40; i++) {
    assert.ok(mastodonPost(defaultParams).includes(i + '%'))
  }
})

test('Mastodon post should always contain coupon code', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost(defaultParams).includes(':COUPON:'))
  }
})

test('Mastodon post should always mention expiration date', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost(defaultParams).includes(':EXPIRATION:'))
  }
})

test('Mastodon post should never be longer than 500 characters', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(mastodonPost(defaultParams).length <= 500)
  }
})
