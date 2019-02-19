#!/usr/bin/env node
const colors = require('colors')
const juicyCouponBot = require('../index')

try {
  juicyCouponBot()
} catch (error) {
  console.log(`[${colors.red('☠')}] Unhandled error: ${colors.red(error.message)}`)
}
