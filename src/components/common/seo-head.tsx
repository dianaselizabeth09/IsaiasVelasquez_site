import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  SEO_DEFAULTS,
  TEMPLATE_STATUS,
  getLocalizedBusinessDescription,
  getLocalizedBusinessName,
  getLocalizedContactLocation,
  getResolvedSiteUrl,
} from "@/config/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  pathname: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  image = SEO_DEFAULTS.IMAGE,
  pathname,
  title,
  description,
}) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "es" ? "es" : "en";
  const siteName = getLocalizedBusinessName(t);
  const resolvedDescription = description ?? getLocalizedBusinessDescription(t);
  const resolvedTitle = title ?? siteName;
  const resolvedLocation = getLocalizedContactLocation(t);
  const siteUrl = getResolvedSiteUrl();
  const fullTitle =
    resolvedTitle.trim() === siteName
      ? siteName
      : `${resolvedTitle} | ${siteName}`;
  const fullUrl = siteUrl ? `${siteUrl}${pathname}` : "";
  const imageUrl = image.startsWith("http")
    ? image
    : siteUrl
      ? `${siteUrl}${image}`
      : image;
  const socialLinks = Object.values(CONTACT_INFO.SOCIAL).filter(Boolean);
  const phoneNumber = CONTACT_INFO.PHONE_CALL.replace(/^tel:/, "");
  const shouldPublishSeo = TEMPLATE_STATUS.shouldIndex && Boolean(siteUrl);
  const robotsContent = shouldPublishSeo
    ? "index, follow"
    : "noindex, nofollow";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: BUSINESS_INFO.LOGO.startsWith("data:") ? BUSINESS_INFO.LOGO : `${siteUrl}${BUSINESS_INFO.LOGO}`,
    description: resolvedDescription,
    sameAs: socialLinks,
    contactPoint:
      phoneNumber || CONTACT_INFO.EMAIL
        ? [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: phoneNumber || undefined,
              email: CONTACT_INFO.EMAIL || undefined,
              availableLanguage: [...CONTACT_INFO.LANGUAGES],
            },
          ]
        : undefined,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    logo: BUSINESS_INFO.LOGO.startsWith("data:") ? BUSINESS_INFO.LOGO : `${siteUrl}${BUSINESS_INFO.LOGO}`,
    image: imageUrl,
    description: resolvedDescription,
    telephone: phoneNumber || undefined,
    email: CONTACT_INFO.EMAIL || undefined,
    address: resolvedLocation
      ? {
          "@type": "PostalAddress",
          streetAddress: resolvedLocation,
        }
      : undefined,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={SEO_DEFAULTS.KEYWORDS} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={robotsContent} />
      <html lang={lang} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />
      {shouldPublishSeo && <meta property="og:url" content={fullUrl} />}
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      {shouldPublishSeo && <link rel="canonical" href={fullUrl} />}

      {/* JSON-LD Structured Data */}
      {shouldPublishSeo && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}
      {shouldPublishSeo && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

      {/* Breadcrumb Navigation Schema */}
      {shouldPublishSeo && pathname !== "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t("common.home"),
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name:
                  resolvedTitle.charAt(0).toUpperCase() +
                  resolvedTitle.slice(1),
                item: fullUrl,
              },
            ],
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
