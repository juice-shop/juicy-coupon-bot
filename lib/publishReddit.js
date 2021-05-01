/*
 * Copyright (c) 2019-2021 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')
const RedditAPI = require('reddit-wrapper-v2')
const R = new RedditAPI(
  {
    username: process.env.REDDIT_ACCOUNT_NAME,
    password: process.env.REDDIT_ACCOUNT_PASSWORD,
    app_id: process.env.REDDIT_APP_ID,
    api_secret: process.env.REDDIT_APP_SECRET
  })

module.exports = (text, title) => {
  if (process.env.PUBLISHING_MODE) {
    R.api.post('/api/submit', { api_type: 'json', sr: 'owasp_juiceshop', kind: 'self', title, text })
      .then(function (response) {
        logger.info(`[${colors.green('✔')}] Reddit post published: ${JSON.stringify(response[1].json.data)}`)
      })
      .catch(function (error) {
        logger.warn(`[${colors.red('❌')}] Reddit post failed: ${colors.red(error)}`)
      })
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped Reddit post: ${colors.yellow('Post will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}
