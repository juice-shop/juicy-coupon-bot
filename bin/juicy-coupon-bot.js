#!/usr/bin/env node
const logger = require('../lib/logger')
const colors = require('colors')
const juicyCouponBot = require('../index')

try {
  juicyCouponBot()
} catch (error) {
  logger.error(`[${colors.red('💀')}] Critical error: ${colors.red(error.message)}`)
}
