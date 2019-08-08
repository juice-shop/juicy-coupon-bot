const logger = require('../lib/logger')
const colors = require('colors')
const graph = require('fbgraph')
graph.setAccessToken(process.env.FACEBOOK_ACCESS_TOKEN)
graph.setAppSecret(process.env.FACEBOOK_APP_SECRET)

module.exports = (message) => {
  if (process.env.TRAVIS_EVENT_TYPE === 'cron') {
    graph.post('owasp.juiceshop/feed', { message }, function (err, res) {
      if (err) {
        logger.warn(`[${colors.red('❌')}] Facebook post failed: ${colors.red(err)}`)
      } else {
        logger.info(`[${colors.green('✔')}] Facebook post published: ${res.id}`)
      }
    })
    graph.extendAccessToken({
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET
    }, function (err, res) {
      if (err) {
        logger.warn(`[${colors.yellow('❌')}] Extending Facebook page access token lifetime failed: ${colors.yellow(err)}`)
      } else {
        logger.info(`[${colors.green('✔')}] Facebook page access token lifetime extended: ${res.expires_in}`)
      }
    })
  } else {
    logger.info(`[${colors.yellow('❌')}] Skipped Facebook post: ${colors.yellow('Post will only be published when running inside Travis-CI Cron Job')}`)
  }
}
