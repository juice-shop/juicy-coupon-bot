/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors'

const generateCouponMessage = (discount: number, coupon: string, expiryDate: string): string => {
  const texts: string[] = [
    `[🤖] Enjoy ${discount}% off all our juicy products with this #coupon code: ${coupon} (valid until ${expiryDate})`,
    `[🤖] Save ${discount}% during your next shopping frenzy with #coupon code: ${coupon} (expires ${expiryDate})`,
    `[🤖] All your favorite juices are now ${discount}% off! Only with #coupon code: ${coupon} (use before ${expiryDate})`,
    `[🤖] ${discount}% off!?! We must be crazy! Use our #coupon code before we come to our senses: ${coupon} (valid until ${expiryDate})`,
    `[🤖] You're not seriously gonna miss out on ${discount}% off our assortment of juices? Better redeem #coupon code: ${coupon} (latest on ${expiryDate})`
  ]

  const status = texts[Math.floor(Math.random() * texts.length)]
  logger.info(`[${colors.green('✔')}] BlueSky post prepared: ${colors.cyan(status)}`)
  return status
}

export default generateCouponMessage
