const colors = require('colors')
const Twitter = require('twitter')
const T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
const statusText = require('./lib/statusText')

module.exports = (status = statusText()) => {
  console.log()
  console.log(`[${colors.green('✔')}] Status prepared: ${colors.cyan(status)}`)
  if (process.env.TRAVIS_EVENT_TYPE === 'cron') {
    T.post('statuses/update', { status })
      .then(function (tweet) {
        console.log(`[${colors.green('✔')}] Tweet published: ${tweet}`)
      })
      .catch(function (error) {
        console.log(`[${colors.red('❌')}] Tweet failed: ${colors.red(error)}`)
      })
  } else {
    console.log(`[${colors.yellow('⏭')}] Skipped Tweet: ${colors.yellow('Coupon codes will only be tweeted when running inside Travis-CI Cron Job')}`)
  }
}
