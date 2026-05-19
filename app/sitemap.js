export default function sitemap() {
  return [
    {
      url: "https://www.niznahutkabeh.eu",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.niznahutkabeh.eu/ochrana-sukromia",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.niznahutkabeh.eu/cookies",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
