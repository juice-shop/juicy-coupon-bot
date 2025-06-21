/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { test } from 'node:test'
import assert from 'node:assert'
import currentCoupons from '../lib/currentCoupons.ts'

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
