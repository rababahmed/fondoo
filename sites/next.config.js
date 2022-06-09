const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.fondoo.io",
      "images.unsplash.com",
      "i2.wp.com",
      "maps.google.com",
    ],
  },
  async rewrites() {
    return [
      {
        has: [
          {
            type: "host",
            value: "(?<host>.*)",
          },
        ],
        source: "/",
        destination: "/:host",
      },
      {
        has: [
          {
            type: "host",
            value: "(?<host>.*)",
          },
        ],
        source: "/:path*",
        destination: "/:host/:path*",
      },
    ];
  },
});
