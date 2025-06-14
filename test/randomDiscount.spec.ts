/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* eslint-disable @typescript-eslint/no-floating-promises */

import { test } from 'node:test'
import assert from 'node:assert'
import randomDiscount from '../lib/randomDiscount.ts'

test('Random discount should always be between 10% and 40%', () => {
  for (let i = 0; i < 100; i++) {
    const discount = randomDiscount()
    assert.ok(discount >= 10 && discount <= 40)
  }
})
