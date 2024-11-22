/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('./logger')
const colors = require('colors')
const { AtpAgent } = require('@atproto/api')
const agent = new AtpAgent({ service: 'https://bsky.social' })

module.exports = async (post) => {
  if (process.env.PUBLISHING_MODE) {
    try {
      await agent.login({
        identifier: process.env.BLUESKY_IDENTIFIER,
        password: process.env.BLUESKY_PASSWORD
      })

      const res = await agent.api.com.atproto.repo.createRecord({
        repo: agent.session.did,
        collection: 'app.bsky.feed.post',
        record: {
          text: post,
          createdAt: new Date().toISOString()
        }
      })

      logger.info(`[${colors.green('✔')}] Post published: ${res}`)
    } catch (error) {
      logger.warn(`[${colors.red('❌')}] Post failed: ${colors.red(error)}`)
    }
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped BlueSky post: ${colors.yellow('Post will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}
