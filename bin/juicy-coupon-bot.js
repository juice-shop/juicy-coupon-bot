#!/usr/bin/env node
const juicyCouponBot = require('../index')

try {
  if (process.env.TRAVIS_EVENT_TYPE === 'cron') {
    juicyCouponBot()
  } else {
    throw new Error('Coupon codes will only be published by Travis-CI Cron Job!')
  }
} catch (error) {
  console.error(error.message)
}
