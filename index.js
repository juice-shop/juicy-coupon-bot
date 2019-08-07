const randomDiscount = require('./lib/randomDiscount')
const currentCoupons = require('./lib/currentCoupons')
const twitterStatus = require('./lib/twitterStatus')
const redditComment = require('./lib/redditComment')
const publishTweet = require('./lib/publishTweet')
const publishFacebook = require('./lib/publishFacebook')
const publishReddit = require('./lib/publishReddit')

module.exports = () => {
  const { expiryDate, discountCodes } = currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  publishTweet(twitterStatus(discount, coupon, expiryDate))
  publishFacebook(twitterStatus(discount, coupon, expiryDate)) // TODO Customize Facebook posts instead of using Twitter status layout
  publishReddit(redditComment(discount, coupon, expiryDate))
}
