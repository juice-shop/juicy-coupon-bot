# ![Juice Shop Logo](https://raw.githubusercontent.com/bkimminich/juicy-coupon-bot/master/JuicyCouponBot_8bit_Avatar.png) juicy-coupon-bot [![npm Downloads](https://img.shields.io/npm/dm/juicy-coupon-bot.svg)](https://www.npmjs.com/package/juicy-coupon-bot)

[![Build Status](https://secure.travis-ci.org/bkimminich/juicy-coupon-bot.png?branch=master)](http://travis-ci.org/bkimminich/juicy-coupon-bot)
[![Coverage Status](https://coveralls.io/repos/github/bkimminich/juicy-coupon-bot/badge.svg?branch=master)](https://coveralls.io/github/bkimminich/juicy-coupon-bot?branch=master)
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
juicy-coupon-bot
```

...and it's done!

> :information_source: You need to set up a
> [Travis-CI Cron Job](https://docs.travis-ci.com/user/cron-jobs/#adding-cron-jobs)
> and a [Twitter App](https://developer.twitter.com/en/apps) and
> obviously provide your own keys and tokens for the environment
> variables `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`,
> `TWITTER_ACCESS_TOKEN_KEY` and `TWITTER_ACCESS_TOKEN_SECRET`. For
> Reddit integration you additionally need a
> [Reddit App](https://www.reddit.com/prefs/apps) and have to define the
> environment variables `REDDIT_ACCOUNT_NAME`,
> `REDDIT_ACCOUNT_PASSWORD`, `REDDIT_APP_ID` and `REDDIT_APP_SECRET`.
> For Facebook integration you additionally need a
> [Facebook App](https://developers.facebook.com/apps) permitted to
> write to the
> [OWASP Juice Shop Facebook page](https://www.facebook.com/owasp.juiceshop)
> and have to provide the environment variables `FACEBOOK_ACCESS_TOKEN`
> and `FACEBOOK_APP_SECRET`.

## License

Copyright (c) 2019-2020 Bjoern Kimminich Licensed under the MIT license.
