const colors = require('colors')
const z85 = require('z85')
const Twitter = require('twitter')
const T = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

function toMMMYY (date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  return months[month] + year.toString().substring(2, 4)
}

function toISO8601 (date) {
  let day = '' + date.getDate()
  let month = '' + (date.getMonth() + 1)
  const year = date.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

function expirationDate (date) {
  const d = new Date()
  d.setFullYear(date.getFullYear(), date.getMonth() + 1, 0)
  return toISO8601(d)
}

function generateCoupon (discount, date) {
  const coupon = toMMMYY(date) + '-' + discount
  return z85.encode(coupon)
}

function randomDiscount () {
  return 10 * (Math.floor(Math.random() * 4) + 1) // 10-40%
}

function generateStatus () {
  const date = new Date()
  const discount = randomDiscount()
  const coupon = generateCoupon(discount, date)
  const expiration = expirationDate(date)

  const texts = [
    `[🤖] Enjoy ${discount}% off all our juicy products with this #coupon code: ${coupon} (valid until ${expiration})`,
    `[🤖] Save ${discount}% during your next shopping frenzy with #coupon code: ${coupon} (expires ${expiration})`,
    `[🤖] All your favorite juices are now ${discount}% off! Only with #coupon code: ${coupon} (use before ${expiration})`
  ]

  return texts[Math.floor(Math.random() * texts.length)]
}

module.exports = () => {
  console.log()
  const status = generateStatus()
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
