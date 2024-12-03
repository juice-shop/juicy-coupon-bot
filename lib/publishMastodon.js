/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { createRestAPIClient } from 'masto'
const logger = require('./logger')
const colors = require('colors')
const masto = createRestAPIClient({
  url: process.env.MASTODON_URL,
  accessToken: process.env.MASTODON_TOKEN
})

module.exports = async (status) => {
  if (process.env.PUBLISHING_MODE) {
    try {
      const res = await masto.v1.statuses.create({ status })
      logger.info(`[${colors.green('✔')}] Post published: ${res.url}`)
    } catch (error) {
      logger.warn(`[${colors.red('❌')}] Post failed: ${colors.red(error)}`)
    }
  } else {
    logger.info(`[${colors.yellow('🟡')}] Skipped Mastodon post: ${colors.yellow('Post will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}
