/*
 * Copyright (c) 2019-2021 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')
const request = require('sync-request')

module.exports = (apiEndpoint = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc') => {
  try {
    const res = request('GET', apiEndpoint)
    const body = res.getBody()
    logger.info(`[${colors.green('✔')}] API lookup success: ${body}`)
    return JSON.parse(body)
  } catch (error) {
    logger.warn(`[${colors.red('❌')}] API lookup failed: ${colors.red(error.message)}`)
    throw new Error('API lookup failed')
  }
}
