export const config = {
  passport: {
    secret: `${process.env.JWT_SECRET}`,
    expiresIn: "30 days",
  },
  s3: {},
  mailgun: {
    apiKey: `${process.env.MAILGUN_API_KEY}`,
    domain: `${process.env.MAILGUN_DOMAIN}`,
  },
};

export const vercel = {
  TOKEN: process.env.VERCEL_TOKEN,
  PROJECT_ID: process.env.VERCEL_PROJECT_ID,
  URL: process.env.VERCEL_API_URL,
};
