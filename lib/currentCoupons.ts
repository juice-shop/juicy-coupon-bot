/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger.ts'
import colors from 'colors'
import request from 'sync-request'

export default (apiEndpoint: string = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc'): { expiryDate: string, discountCodes: Record<string, string> } => {
  try {
    const res = (request as unknown as (method: string, url: string) => any)('GET', apiEndpoint)
    const body = res.getBody()
    logger.info(`[${colors.green('✔')}] API lookup success: ${body}`)
    return JSON.parse(body)
  } catch (error) {
    if (error instanceof Error) {
      logger.warn(`[${colors.red('❌')}] API lookup failed: ${colors.red(error.message)}`)
    }
    throw new Error('API lookup failed')
  }
}
