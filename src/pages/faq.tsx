import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { FAQSection } from "@/components/sections";
import { SEOHead } from "@/components/common";

export default function FAQPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t("faq.title")}
        description={t("faq.subtitle")}
        pathname="/faq"
      />
      <FAQSection titleAs="h1" />
    </Layout>
  );
}
