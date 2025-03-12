#!/usr/bin/env node

/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from '../lib/logger.ts'
import colors from 'colors'
import juicyCouponBot from '../index.ts'

try {
  juicyCouponBot()
} catch (error) {
  if (error instanceof Error) {
    logger.error(`[${colors.red('💀')}] Critical error: ${colors.red(error.message)}`)
  } else {
    logger.error(`[${colors.red('💀')}] Critical error: ${colors.red('Unknown error')}`)
  }
}
