import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.site.url;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified
    },
    {
      url: `${baseUrl}/examples`,
      lastModified
    },
    {
      url: `${baseUrl}/contact`,
      lastModified
    },
    {
      url: `${baseUrl}/scan`,
      lastModified
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified
    },
    {
      url: `${baseUrl}/terms`,
      lastModified
    }
  ];
}
