const generateCoupon = require('../lib/coupon')
const expirationDate = require('../lib/expiration')
const randomDiscount = require('../lib/discount')

module.exports = (date = new Date(), discount = randomDiscount()) => {
  const coupon = generateCoupon(date, discount)
  const expiration = expirationDate(date)

  const texts = [
    `[🤖] Enjoy ${discount}% off all our juicy products with this #coupon code: ${coupon} (valid until ${expiration})`,
    `[🤖] Save ${discount}% during your next shopping frenzy with #coupon code: ${coupon} (expires ${expiration})`,
    `[🤖] All your favorite juices are now ${discount}% off! Only with #coupon code: ${coupon} (use before ${expiration})`
  ]

  return texts[Math.floor(Math.random() * texts.length)]
}
