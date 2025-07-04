/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors'

export default async (apiEndpoint: string = 'https://5j4d1u7jhf.execute-api.eu-west-1.amazonaws.com/default/JuicyCouponFunc', apiKey: string = process.env.AWS_API_KEY ?? ''): Promise<{ expiryDate: string, discountCodes: Record<string, string> }> => {
  try {
    const res = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey
      }
    })
    const body = await res.json()
    if (body.message != null) {
      throw new Error(body.message) // eslint-disable-line @typescript-eslint/no-unsafe-argument
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
