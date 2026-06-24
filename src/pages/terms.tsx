import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { CONTACT_INFO, getLocalizedBusinessName } from "@/config/constants";

export default function TermsPage() {
  const { t } = useTranslation();
  const businessName = getLocalizedBusinessName(t);

  return (
    <Layout>
      <SEOHead
        title={t("terms.seo_title")}
        description={t("terms.seo_description")}
        pathname="/terms"
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark)">
            {t("terms.title")}
          </h1>
          <p className="text-lg text-(--color-text-muted) leading-relaxed">
            {t("terms.intro", { name: businessName })}
          </p>
        </header>

        <div className="rounded-2xl border border-(--color-primary)/20 bg-(--color-primary)/5 p-6">
          <p className="text-(--color-bg-dark) leading-relaxed">
            <strong>{t("terms.notice_title")}</strong>{" "}
            {t("terms.notice_text")}
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("terms.sections.use.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("terms.sections.use.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("terms.sections.estimates.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("terms.sections.estimates.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("terms.sections.liability.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("terms.sections.liability.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("terms.sections.contact.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("terms.sections.contact.body", {
                email: CONTACT_INFO.EMAIL,
              })}
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}