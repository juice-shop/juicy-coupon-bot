/*
 * Copyright (c) 2019-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' })
  ],
  format: winston.format.simple()
})
