/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const randomDiscount = require('./lib/randomDiscount')
const currentCoupons = require('./lib/currentCoupons')
const blueSkyPost = require('./lib/blueSkyPost')
const mastodonPost = require('./lib/mastodonPost')
const redditPost = require('./lib/redditPost')
const publishBlueSky = require('./lib/publishBlueSky')
const publishMastodon = require('./lib/publishMastodon')
const publishReddit = require('./lib/publishReddit')

module.exports = () => {
  const { expiryDate, discountCodes } = currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  publishBlueSky(blueSkyPost(discount, coupon, expiryDate))
  publishMastodon(mastodonPost(discount, coupon, expiryDate))
  publishReddit(redditPost(discount, coupon, expiryDate), `New coupon code (valid until ${expiryDate})`)
}
