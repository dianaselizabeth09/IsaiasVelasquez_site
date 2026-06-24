import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEOHead } from "@/components/common";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t("about.seo_title")}
        description={t("about.description")}
        pathname="/about"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
            {t("about.title")}
          </h1>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("about.mission.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("about.mission.text")}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("about.vision.title")}
            </h2>
            <p className="text-(--color-text-muted) leading-relaxed">
              {t("about.vision.text")}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-(--color-bg-dark)">
              {t("about.values.title")}
            </h2>
            <ul className="space-y-3 text-(--color-text-muted)">
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium">
                    {t("about.values.items.0.name")}
                  </p>
                  <p className="text-sm">
                    {t("about.values.items.0.description")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium">
                    {t("about.values.items.1.name")}
                  </p>
                  <p className="text-sm">
                    {t("about.values.items.1.description")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium">
                    {t("about.values.items.2.name")}
                  </p>
                  <p className="text-sm">
                    {t("about.values.items.2.description")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
