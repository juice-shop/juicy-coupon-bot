/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors'
import { createRestAPIClient } from 'masto'

const masto = createRestAPIClient({
  url: process.env.MASTODON_URL ?? '',
  accessToken: process.env.MASTODON_TOKEN ?? ''
})

const publishMastodon = async (status: string): Promise<void> => {
  if (process.env.PUBLISHING_MODE === 'true') {
    try {
      const res = await masto.v1.statuses.create({ status })
      logger.info(`[${colors.green('✔')}] Mastodon post published: ${res?.url}`)
    } catch (error) {
      if (error instanceof Error) {
        logger.warn(`[${colors.red('❌')}] Mastodon post failed: ${colors.red(error.message)}`)
      } else {
        logger.warn(`[${colors.red('❌')}] Mastodon post failed with unknown error`)
      }
    }
  } else {
    logger.info(`[${colors.yellow('🟡')}] Mastodon post skipped: ${colors.yellow('Post will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}

export default publishMastodon
