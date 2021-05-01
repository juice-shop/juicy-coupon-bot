/*
 * Copyright (c) 2019-2021 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')

module.exports = (discount, coupon, expiryDate) => {
  const texts = [
    `Enjoy **${discount}%** off all our juicy products with this coupon code: \`${coupon}\` _(valid until ${expiryDate})_`,
    `Save **${discount}%** during your next shopping frenzy with coupon code: \`${coupon}\` _(expires ${expiryDate})_`,
    `All your favorite juices are now **${discount}%** off! Only with coupon code: \`${coupon}\` _(use before ${expiryDate})_`,
    `**${discount}%** off!?! We must be crazy! Use our coupon code before we come to our senses: \`${coupon}\` _(valid until ${expiryDate})_`,
    `You're not seriously gonna miss out on **${discount}%** off our assortment of juices? Better redeem coupon code: \`${coupon}\` _(latest on ${expiryDate})_`
  ]
  const post = texts[Math.floor(Math.random() * texts.length)]
  logger.info(`[${colors.green('✔')}] Reddit post prepared: ${colors.cyan(post)}`)
  return post
}
