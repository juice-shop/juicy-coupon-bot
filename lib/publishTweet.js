const logger = require('../lib/logger')
const colors = require('colors')
const Twitter = require('twitter')
const T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports = (status) => {
  if (process.env.PUBLISHING_MODE) {
    T.post('statuses/update', { status })
      .then(function (tweet) {
        logger.info(`[${colors.green('✔')}] Tweet published: ${tweet.id}`)
      })
      .catch(function (error) {
        logger.warn(`[${colors.red('❌')}] Tweet failed: ${colors.red(error)}`)
      })
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped Tweet: ${colors.yellow('Status will only be published when PUBLISHING_MODE is set as an environment variable')}`)
  }
}
