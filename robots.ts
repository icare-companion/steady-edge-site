import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://steadyedge.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard/",
        "/account/",
        "/settings/",
        "/login/",
        "/signin/",
        "/signup/",
        "/reset-password/",
        "/auth/",
        "/trial/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}