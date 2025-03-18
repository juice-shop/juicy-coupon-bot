/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from "./logger.ts";
import colors from "colors";
import { AtpAgent } from "@atproto/api";

const agent = new AtpAgent({ service: "https://bsky.social" });

const publishBlueSky = async (post: string): Promise<void> => {
  if (process.env.PUBLISHING_MODE === "true") {
    try {
      await agent.login({
        identifier: process.env.BLUESKY_IDENTIFIER ?? "",
        password: process.env.BLUESKY_PASSWORD ?? ""
      });

      if (agent.session == null) {
        throw new Error("Agent session is not initialized");
      }

      const res = await agent.api.com.atproto.repo.createRecord({
        repo: agent.session.did,
        collection: "app.bsky.feed.post",
        record: {
          text: post,
          createdAt: new Date().toISOString()
        }
      });

      logger.info(`[${colors.green("✔")}] BlueSky post published: ${res?.data?.uri}`);
    } catch (error) {
      if (error instanceof Error) {
        logger.warn(`[${colors.red("❌")}] BlueSky post failed: ${colors.red(error.message)}`);
      } else {
        logger.warn(`[${colors.red("❌")}] BlueSky post failed with unknown error`);
      }
    }
  } else {
    logger.info(`[${colors.yellow("🟡")}] BlueSky post skipped: ${colors.yellow("Post will only be published when PUBLISHING_MODE is set as an environment variable")}`);
  }
};

export default publishBlueSky;
