/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'node:test'
import assert from 'node:assert'
import blueSkyPost from '../lib/blueSkyPost.ts'
import defaultParams from './utils/testUtils.ts'

test('should always include robot emoji', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(blueSkyPost(defaultParams).includes('[🤖]'), 'Expected to include robot emoji')
  }
})

test('should always include #coupon hashtag', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(blueSkyPost(defaultParams).includes('#coupon'), 'Expected to include #coupon hashtag')
  }
})

test('should always mention discount amount', () => {
  for (let i = 10; i < 40; i++) {
    const params = { ...defaultParams, discount: i }
    assert.ok(blueSkyPost(params).includes(i + '%'), `Expected to include ${i}%`)
  }
})

test('should always contain coupon code', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(blueSkyPost(defaultParams).includes(':COUPON:'), 'Expected to include coupon code')
  }
})

test('should always mention expiration date', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(blueSkyPost(defaultParams).includes(':EXPIRATION:'), 'Expected to include expiration date')
  }
})

test('should never be longer than 200 characters', () => {
  for (let i = 0; i < 100; i++) {
    assert.ok(blueSkyPost(defaultParams).length <= 200, 'Expected length to be 200 characters or less')
  }
})
