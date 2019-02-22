const randomDiscount = require('./lib/randomDiscount')
const currentCoupons = require('./lib/currentCoupons')
const statusText = require('./lib/statusText')
const publishTweet = require('./lib/publishTweet')
const publishReddit = require('./lib/publishReddit')

module.exports = () => {
  const { expiryDate, discountCodes } = currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  const status = statusText(discount, coupon, expiryDate)

  publishTweet(status)
  publishReddit(status)
}
