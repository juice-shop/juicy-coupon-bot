/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from "./logger.ts";
import colors from "colors";
import RedditAPI, { type IRedditAPIOptions } from "reddit-wrapper-v2";

const redditOptions: IRedditAPIOptions = {
  username: process.env.REDDIT_ACCOUNT_NAME ?? "",
  password: process.env.REDDIT_ACCOUNT_PASSWORD ?? "",
  app_id: process.env.REDDIT_APP_ID ?? "",
  api_secret: process.env.REDDIT_APP_SECRET ?? ""
};

const R = RedditAPI(redditOptions);

const publishReddit = (text: string, title: string): void => {
  if (process.env.PUBLISHING_MODE === "true") {
    R.api.post("/api/submit", { api_type: "json", sr: "owasp_juiceshop", kind: "self", title, text })
      .then((res: Record<number, { json: { data: { url: string } } }>) => {
        logger.info(`[${colors.green("✔")}] Reddit post published: ${res[1]?.json?.data?.url}`);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          logger.warn(`[${colors.red("❌")}] Reddit post failed: ${colors.red(error.message)}`);
        } else {
          logger.warn(`[${colors.red("❌")}] Reddit post failed with unknown error`);
        }
      });
  } else {
    logger.info(`[${colors.yellow("🟡")}] Reddit post skipped: ${colors.yellow("Post will only be published when PUBLISHING_MODE is set as an environment variable")}`);
  }
};

export default publishReddit;
