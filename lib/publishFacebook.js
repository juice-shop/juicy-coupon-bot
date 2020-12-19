/*
 * Copyright (c) 2019-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')
const graph = require('fbgraph')
graph.setAccessToken(process.env.FACEBOOK_ACCESS_TOKEN)
graph.setAppSecret(process.env.FACEBOOK_APP_SECRET)

module.exports = (message) => {
  if (process.env.PUBLISHING_MODE) {
    graph.post('owasp.juiceshop/feed', { message }, function (err, res) {
      if (err) {
        logger.warn(`[${colors.red('❌')}] Facebook post failed: ${colors.red(err)}`)
      } else {
        logger.info(`[${colors.green('✔')}] Facebook post published: ${res.id}`)
      }
    })
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped Facebook post: ${colors.yellow('Post will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}
