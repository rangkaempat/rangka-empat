// components/Seo.jsx
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Seo({
  title = "Rangka Empat Studio",
  description = "Malaysia Custom Web Design, Web Development, Web Applications & Digital Solutions.",
  image = "https://rangkaempat.com/og-default.jpg",
  type = "website",
  twitterHandle = "@rangkaempat", // Replace with your actual handle
  noIndex = false,
  structuredData = null, // JSON-LD object (optional)
}) {
  const { pathname } = useLocation();
  const currentUrl = `https://rangkaempat.com${pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_MY" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme + Favicons (in public/index.html) */}
      <meta name="theme-color" content="#ffffff" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
