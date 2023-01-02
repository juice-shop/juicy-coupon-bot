#!/usr/bin/env node

/*
 * Copyright (c) 2019-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')
const juicyCouponBot = require('../index')

try {
  juicyCouponBot()
} catch (error) {
  logger.error(`[${colors.red('💀')}] Critical error: ${colors.red(error.message)}`)
}
