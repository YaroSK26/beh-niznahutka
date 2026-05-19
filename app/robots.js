export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ochrana-sukromia", "/cookies"],
    },
    sitemap: "https://www.niznahutkabeh.eu/sitemap.xml",
  };
}
