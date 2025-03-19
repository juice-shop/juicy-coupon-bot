/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from "./logger.ts"
import colors from "colors"

const randomDiscount = (): number => {
  const discount = 10 * (Math.floor(Math.random() * 4) + 1) // 10, 20, 30 or 40
  logger.info(`[${colors.green("✔")}] Randomized discount: ${colors.cyan(discount + "%")}`)
  return discount
}

export default randomDiscount
