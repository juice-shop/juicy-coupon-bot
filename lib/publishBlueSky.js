const { AtpAgent } = require('@atproto/api');

async function postToBlueSky(message) {
  const agent = new AtpAgent({ service: 'https://bsky.social' });

  try {
    // Authenticate using your BlueSky credentials
    await agent.login({
      identifier: process.env.BLUESKY_IDENTIFIER,
      password: process.env.BLUESKY_PASSWORD,
    });

    // Post a message
    const result = await agent.api.com.atproto.repo.createRecord({
      repo: agent.session?.did,
      collection: 'app.bsky.feed.post',
      record: {
        text: message,
        createdAt: new Date().toISOString(),
      },
    });

    console.log('Posted successfully to BlueSky:', result.data);
  } catch (error) {
    console.error('Failed to post to BlueSky:', error);
  }
}

// Example usage
postToBlueSky('Hello BlueSky! Here’s our latest coupon: CODE123 🚀');
