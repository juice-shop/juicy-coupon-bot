const randomDiscount = require('./lib/randomDiscount')
const currentCoupons = require('./lib/currentCoupons')
const statusText = require('./lib/statusText')
const publishTweet = require('./lib/publishTweet')

module.exports = () => {
  const { expiryDate, discountCodes } = currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  publishTweet(statusText(discount, coupon, expiryDate))
}
