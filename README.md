# ![Juice Shop Logo](https://raw.githubusercontent.com/juice-shop/juicy-coupon-bot/master/JuicyCouponBot_8bit_Avatar.png) Juicy Coupon Bot

[![npm Downloads](https://img.shields.io/npm/dm/juicy-coupon-bot.svg)](https://www.npmjs.com/package/juicy-coupon-bot)
[![CI Pipeline](https://github.com/juice-shop/juicy-coupon-bot/actions/workflows/ci.yml/badge.svg)](https://github.com/juice-shop/juicy-coupon-bot/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/juice-shop/juicy-coupon-bot/badge.svg?branch=master)](https://coveralls.io/github/juice-shop/juicy-coupon-bot?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Coupon code generator and distribution bot for OWASP Juice Shop

## Getting Started ![node](https://img.shields.io/node/v/juicy-coupon-bot.svg)

Install the module with:

```
npm install -g juicy-coupon-bot
```

## Documentation

Run...

```
npx tsx $(npm root -g)/juicy-coupon-bot/bin/juicy-coupon-bot.ts
```

...and it's done!

> :information_source: You need to set up a suitable cron job similar to
> [ours](https://github.com/juice-shop/juicy-coupon-bot/actions?query=workflow%3A%22Monthly+Coupon+Distribution%22).
> Next you need a BlueSky account
> to which you obviously have to provide your own identifier (i.e. email) and app password for
> the environment variables `BLUESKY_IDENTIFIER` and
> `BLUESKY_PASSWORD`. For Mastodon integration you have to generate an [Access Token](https://docs.joinmastodon.org/client/authorized/) and pass it in via `MASTODON_TOKEN` along with the `MASTODON_URL` of your instance. For Reddit integration you need a [Reddit App](https://www.reddit.com/prefs/apps) and have to
> define the environment variables `REDDIT_ACCOUNT_NAME`,
> `REDDIT_ACCOUNT_PASSWORD`, `REDDIT_APP_ID` and `REDDIT_APP_SECRET`.

## Licensing [![license](https://img.shields.io/github/license/juice-shop/juicy-coupon-bot.svg)](LICENSE)

This program is free software: you can redistribute it and/or modify it
under the terms of the [MIT license](LICENSE). Juicy Coupon Bot and any
contributions are Copyright © by Bjoern Kimminich & the OWASP Juice Shop
contributors 2019-2025.
