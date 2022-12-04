module.exports = {
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
};
