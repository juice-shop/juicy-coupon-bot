/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { test } from "node:test";
import assert from "node:assert";
import redditComment from "../lib/redditPost.ts";
import defaultParams from "./utils/testUtils.ts";

test("Reddit comment should always contain discount amount in bold text", () => {
  for (let i = 10; i <= 40; i++) {
    const customParams = { ...defaultParams, discount: i };
    assert.ok(redditComment(customParams).includes(`**${i}%**`));
  }
});

test("Reddit comment should always contain coupon code in code syntax", () => {
  for (let i = 0; i < 100; i++) {
    const customParams = { ...defaultParams, discount: i };
    assert.ok(
      redditComment(customParams).includes("`:COUPON:`"),
      "Expected coupon code in code syntax: `:COUPON:`"
    );
  }
});

test("Reddit comment should always mention expiration date", () => {
  for (let i = 0; i < 100; i++) {
    const comment = redditComment(defaultParams);
    assert.ok(
      comment.includes(":EXPIRATION:"),
      "Expected expiration date: :EXPIRATION:"
    );
  }
});
