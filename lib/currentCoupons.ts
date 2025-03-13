/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger.ts'
import colors from 'colors'

export default async (apiEndpoint: string = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc'): Promise<{ expiryDate: string, discountCodes: Record<string, string> }> => {
  try {
    const res = await fetch(apiEndpoint)
    const body = await res.json()
    logger.info(`[${colors.green('✔')}] API lookup success: ${JSON.stringify(body)}`)
    return body
  } catch (error) {
    if (error instanceof Error) {
      logger.warn(`[${colors.red('❌')}] API lookup failed: ${colors.red(error.message)}`)
    }
    throw new Error('API lookup failed')
  }
}