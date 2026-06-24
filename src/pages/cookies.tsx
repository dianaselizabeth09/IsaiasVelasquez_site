import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { CONTACT_INFO, getLocalizedBusinessName } from "@/config/constants";

export default function CookiesPage() {
  const { t } = useTranslation();
  const businessName = getLocalizedBusinessName(t);

  return (
    <Layout>
      <SEOHead
        title={t("cookies.seo_title")}
        description={t("cookies.seo_description")}
        pathname="/cookies"
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark)">
            {t("cookies.title")}
          </h1>
          <p className="text-lg text-(--color-text-muted) leading-relaxed">
            {t("cookies.intro", { name: businessName })}
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("cookies.sections.what.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("cookies.sections.what.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("cookies.sections.how.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("cookies.sections.how.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("cookies.sections.control.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("cookies.sections.control.body")}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("cookies.sections.contact.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("cookies.sections.contact.body", { email: CONTACT_INFO.EMAIL })}
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
}
