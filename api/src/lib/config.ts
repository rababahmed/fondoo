export const config = {
  passport: {
    secret: `${process.env.JWT_SECRET}`,
    expiresIn: "30 days",
  },
};
