export interface PostParameters {
  discount: number;
  coupon: string;
  expiryDate: string;
}

export interface RedditAPIOptions {
  username: string;
  password: string;
  app_id: string;
  api_secret: string;
}

export interface MastodonAPIOptions {
  accessToken: string;
  baseUrl: string;
}



