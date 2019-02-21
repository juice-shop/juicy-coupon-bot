#!/usr/bin/env node
const colors = require('colors')
const juicyCouponBot = require('../index')

try {
  juicyCouponBot()
} catch (error) {
  console.log(`[${colors.red('💀')}] Critical error: ${colors.red(error.message)}`)
}
