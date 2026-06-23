import { Navigate, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { ContactSection } from "@/components/sections/contact-section";
import { RelatedServices } from "@/components/sections/related-services";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  SERVICE_PROCESS,
  getPrimaryServicePath,
  getServiceByKey,
  getServicePath,
} from "@/config/constants";

export default function ServiceDetailPage() {
  const { t } = useTranslation();
  const { serviceKey = "" } = useParams();
  const service = getServiceByKey(serviceKey);

  if (!service) {
    return <Navigate to={getPrimaryServicePath()} replace />;
  }

  const servicePath = getServicePath(service.key);
  const serviceTitle = t(`services.${service.key}.title`);
  const serviceDescription = t(`services.${service.key}.description`);
  const seoDescription = `${serviceTitle} by ${BUSINESS_INFO.NAME}. ${t("services_detail.seo_description")}`;
  const benefits = [0, 1, 2, 3].map((index) => t(`services_detail.benefits.items.${index}`));
  const processSteps = SERVICE_PROCESS.map((_, index) => t(`services_detail.process.steps.${index}`));
  const faqs = [0, 1].map((index) => ({
    question: t(`services_detail.faqs.${index}.question`, { service: serviceTitle.toLowerCase() }),
    answer: t(`services_detail.faqs.${index}.answer`),
  }));

  return (
    <Layout>
      <SEOHead title={serviceTitle} description={seoDescription} pathname={servicePath} />

      <section className="relative min-h-[78vh] overflow-hidden bg-(--color-bg-dark) pt-28 text-white">
        <img src={service.image} alt={serviceTitle} className="absolute inset-0 h-full w-full object-cover opacity-62" />
        <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark) via-(--color-bg-dark)/82 to-(--color-bg-dark)/38" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
              {service.category} {t("services_detail.service_label")}
            </p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">{serviceTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">{serviceDescription}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={CONTACT_INFO.PHONE_CALL} className="rounded-2xl bg-(--color-primary) px-8 py-4 text-center font-black text-white transition-all hover:-translate-y-1 hover:bg-(--color-primary-hover)">
                {t("services_page.call")} {CONTACT_INFO.PHONE_DISPLAY}
              </a>
              <a href={CONTACT_INFO.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/16">
                {t("services_detail.whatsapp_quote")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-light) py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.professional_service")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("services_detail.reliable_prefix")} {serviceTitle.toLowerCase()} {t("services_detail.reliable_suffix")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-(--color-text-muted)">
              {t("services_detail.intro")}
            </p>
          </div>
          <div className="surface-card template-border rounded-[2rem] p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.quote_details")}</p>
            <div className="mt-5 grid gap-3">
              <a href={CONTACT_INFO.PHONE_CALL} className="rounded-2xl bg-(--color-bg-light) px-5 py-4 font-black text-(--color-text-primary) hover:text-(--color-primary)">{CONTACT_INFO.PHONE_DISPLAY}</a>
              <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="rounded-2xl bg-(--color-bg-light) px-5 py-4 font-black text-(--color-text-primary) hover:text-(--color-primary)">{CONTACT_INFO.EMAIL}</a>
              <div className="rounded-2xl bg-(--color-bg-light) px-5 py-4 font-bold text-(--color-text-muted)">{CONTACT_INFO.HOURS}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.benefits.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("services_detail.benefits.title")}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.5rem] bg-(--color-bg-light) p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-primary) font-black text-white">✓</div>
                <p className="font-bold leading-relaxed text-(--color-text-primary)">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-dark) py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.process.label")}</p>
            <h2 className="text-4xl font-black md:text-6xl">{t("services_detail.process.title")}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-bold leading-relaxed text-white/82">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-light) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.gallery.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("services_detail.gallery.title")}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[service.image, BUSINESS_INFO.HERO_IMAGE, BUSINESS_INFO.CAROUSEL_IMAGE].map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt={`${serviceTitle} ${t("services_detail.gallery.label")} ${index + 1}`} className="h-80 w-full rounded-[2rem] object-cover shadow-xl" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("services_detail.local.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("services_detail.local.title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-(--color-text-muted)">
              {t("services_detail.local.text", { service: serviceTitle.toLowerCase() })}
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-(--color-bg-light) p-6">
                <h3 className="text-xl font-black text-(--color-text-primary)">{faq.question}</h3>
                <p className="mt-2 text-(--color-text-muted)">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection isHomePage={true} />

      <section className="bg-(--color-bg-dark) px-4 py-16 text-center text-white md:px-8 md:py-24">
        <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-6xl">{t("services_detail.final.title", { service: serviceTitle.toLowerCase() })}</h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={CONTACT_INFO.PHONE_CALL} className="rounded-2xl bg-(--color-primary) px-8 py-4 font-black text-white hover:bg-(--color-primary-hover)">{t("home_page.final.call")}</a>
          <Link to={`/contact?service=${service.key}`} className="rounded-2xl border border-white/25 px-8 py-4 font-black text-white hover:bg-white/10">{t("services_detail.final.form")}</Link>
        </div>
      </section>

      <RelatedServices currentServiceKey={service.key} />
    </Layout>
  );
}
