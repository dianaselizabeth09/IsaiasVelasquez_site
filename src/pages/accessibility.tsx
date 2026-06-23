import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { CONTACT_INFO, getLocalizedBusinessName } from "@/config/constants";

export default function AccessibilityPage() {
  const { t } = useTranslation();
  const businessName = getLocalizedBusinessName(t);

  return (
    <Layout>
      <SEOHead
        title={t("accessibility.seo_title")}
        description={t("accessibility.seo_description")}
        pathname="/accessibility"
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark)">
            {t("accessibility.title")}
          </h1>
          <p className="text-lg text-(--color-text-muted) leading-relaxed">
            {t("accessibility.intro", { name: businessName })}
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("accessibility.sections.standards.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("accessibility.sections.standards.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("accessibility.sections.features.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("accessibility.sections.features.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("accessibility.sections.limitations.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("accessibility.sections.limitations.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("accessibility.sections.contact.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("accessibility.sections.contact.body", { email: CONTACT_INFO.EMAIL })}
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
