/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import randomDiscount from "./lib/randomDiscount.ts";
import currentCoupons from "./lib/currentCoupons.ts";
import blueSkyPost from "./lib/blueSkyPost.ts";
import mastodonPost from "./lib/mastodonPost.ts";
import redditPost from "./lib/redditPost.ts";
import publishBlueSky from "./lib/publishBlueSky.ts";
import publishMastodon from "./lib/publishMastodon.ts";
import publishReddit from "./lib/publishReddit.ts";
import { type PostParameters } from "./lib/types/types.ts";

const distributeCoupons = async (): Promise<void> => {
  const { expiryDate, discountCodes } = await currentCoupons();
  const discount = randomDiscount();
  const coupon = discountCodes[discount + "%"];

  const postParams: PostParameters = { discount, coupon, expiryDate };

  await publishBlueSky(blueSkyPost(postParams));
  await publishMastodon(mastodonPost(postParams));
  publishReddit(redditPost(postParams), `New coupon code (valid until ${expiryDate})`);
};

export default distributeCoupons;
