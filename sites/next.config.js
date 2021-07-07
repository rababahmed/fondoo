module.exports = {
  reactStrictMode: true,
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
};
