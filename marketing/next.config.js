const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io", "fondoo.cdn.prismic.io"],
  },
});
