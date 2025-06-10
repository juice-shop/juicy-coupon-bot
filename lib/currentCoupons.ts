/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger.ts'
import colors from 'colors'

export default async (apiEndpoint: string = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc', apiKey: string = '6PPi37DBxP4lDwlriuaxP15HaDJpsUXY5TspVmie'): Promise<{ expiryDate: string, discountCodes: Record<string, string> }> => {
  try {
    const res = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey
      }
    })
    const body = await res.json()
    if (body.message) {
      logger.warn(`[${colors.red('❌')}] API lookup denied: ${colors.red(body.message)}`)
      throw new Error('API lookup denied')
    } else {
      logger.info(`[${colors.green('✔')}] API lookup success: ${JSON.stringify(body)}`)
      return body
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.warn(`[${colors.red('❌')}] API lookup failed: ${colors.red(error.message)}`)
    }
    throw new Error('API lookup failed')
  }
}
