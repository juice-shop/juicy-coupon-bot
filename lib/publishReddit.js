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

module.exports = (text) => {
  if (process.env.TRAVIS_EVENT_TYPE === 'cron') {
    R.api.post('/api/comment', { api_type: 'json', text, thing_id: 't3_gqdv7s' })
      .then(function (response) {
        logger.info(`[${colors.green('✔')}] Reddit comment published: ${JSON.stringify(response[1].json.data)}`) // TODO Log ID of created comment instead of entire data
      })
      .catch(function (error) {
        logger.warn(`[${colors.red('❌')}] Reddit comment failed: ${colors.red(error)}`)
      })
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped Reddit comment: ${colors.yellow('Comment will only be published when running inside Travis-CI Cron Job')}`)
  }
}
