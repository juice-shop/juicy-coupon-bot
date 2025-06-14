/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import randomDiscount from './lib/randomDiscount'
import currentCoupons from './lib/currentCoupons'
import blueSkyPost from './lib/blueSkyPost'
import mastodonPost from './lib/mastodonPost'
import redditPost from './lib/redditPost'
import publishBlueSky from './lib/publishBlueSky'
import publishMastodon from './lib/publishMastodon'
import publishReddit from './lib/publishReddit'
import { type PostParameters } from './lib/types/types'

const distributeCoupons = async (): Promise<void> => {
  const { expiryDate, discountCodes } = await currentCoupons()
  const discount = randomDiscount()
  const coupon = discountCodes[discount + '%']

  const postParams: PostParameters = { discount, coupon, expiryDate }

  await publishBlueSky(blueSkyPost(postParams))
  await publishMastodon(mastodonPost(postParams))
  publishReddit(redditPost(postParams), `New coupon code (valid until ${expiryDate})`)
}

export default distributeCoupons
