/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { test } from 'node:test'
import assert from 'node:assert'
import currentCoupons from '../lib/currentCoupons.ts'

test('API response contains expiration date of coupon', async () => {
  const coupons = await currentCoupons()
  assert.ok('expiryDate' in coupons)
})

test('API response contains discount codes from 10% to 40%', async () => {
  const coupons = await currentCoupons()
  assert.ok('10%' in coupons.discountCodes)
  assert.ok('20%' in coupons.discountCodes)
  assert.ok('30%' in coupons.discountCodes)
  assert.ok('40%' in coupons.discountCodes)
})

test('throws error when API lookup fails from server error', async () => {
  await assert.rejects(async () => {
    await currentCoupons('https://httpstat.us/500')
  }, /API lookup failed/)
})

test('throws error when API lookup fails from wrong API key', async () => {
  await assert.rejects(async () => {
    await currentCoupons('https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc', 'wrongApiKey')
  }, /API lookup failed/)
})
