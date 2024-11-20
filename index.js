/*
 * Copyright (c) 2019-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const randomDiscount = require('./lib/randomDiscount')
const currentCoupons = require('./lib/currentCoupons')
// const twitterStatus = require('./lib/twitterStatus')
// const facebookPost = require('./lib/facebookPost')
const redditPost = require('./lib/redditPost')
// const publishTweet = require('./lib/publishTweet')
// const publishFacebook = require('./lib/publishFacebook')
const publishReddit = require('./lib/publishReddit')
const {postToBlueSky} = require('./lib/publishBlueSky')

module.exports = () => {
  const { expiryDate, discountCodes } = currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  // publishTweet(twitterStatus(discount, coupon, expiryDate))
  
   // Post to BlueSky
   postToBlueSky(`New coupon code: ${coupon} (valid until ${expiryDate})`)

  publishReddit(redditPost(discount, coupon, expiryDate), `New coupon code (valid until ${expiryDate})`)
}
