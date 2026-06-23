import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import {
  getNavLinks,
  getServiceGroups,
  getServicePath,
  getLocalizedBusinessName,
} from "@/config/constants";

export default function SitemapPage() {
  const { t } = useTranslation();
  const businessName = getLocalizedBusinessName(t);
  const navLinks = getNavLinks(t);
  const serviceGroups = getServiceGroups();

  return (
    <Layout>
      <SEOHead
        title={t("sitemap.seo_title")}
        description={t("sitemap.seo_description")}
        pathname="/sitemap"
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark)">
            {t("sitemap.title")}
          </h1>
          <p className="text-lg text-(--color-text-muted) leading-relaxed">
            {t("sitemap.intro", { name: businessName })}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-(--color-bg-dark) mb-4">
              {t("sitemap.pages")}
            </h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-(--color-bg-dark) mb-4">
              {t("sitemap.services")}
            </h2>
            {serviceGroups.map((group) => (
              <div key={group.key} className="mb-5">
                <h3 className="font-bold text-(--color-text-primary) mb-2">{group.title}</h3>
                <ul className="space-y-2 ml-4">
                  {group.services.map((service) => (
                    <li key={service.key}>
                      <Link
                        to={getServicePath(service.key)}
                        className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors text-sm"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-(--color-border-light)">
          <h2 className="text-2xl font-bold text-(--color-bg-dark) mb-4">
            {t("sitemap.legal")}
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors">
                {t("footer.legal.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors">
                {t("footer.legal.terms")}
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors">
                {t("footer.legal.cookies")}
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors">
                {t("footer.legal.accessibility")}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
