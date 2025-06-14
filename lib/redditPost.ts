/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors'
import { type PostParameters } from './types/types'
import generateCouponMessage from './utils/generateCoupon'

const prepareRedditPost = (params: PostParameters): string => {
  const { discount, coupon } = params
  let status = generateCouponMessage(params)

  const discountText = `${discount}%`
  status = status.replace(discountText, `**${discountText}**`)

  const couponText = `${coupon}`
  status = status.replace(couponText, `\`${couponText}\``)

  logger.info(
    `[${colors.green('✔')}] Reddit post prepared: ${colors.cyan(status)}`
  )
  return status
}

export default prepareRedditPost
