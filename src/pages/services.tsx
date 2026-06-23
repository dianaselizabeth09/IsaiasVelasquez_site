import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { ContactSection } from "@/components/sections/contact-section";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  getLocalizedServiceGroups,
  getServicePath,
} from "@/config/constants";

export default function ServicesPage() {
  const { t } = useTranslation();
  const serviceGroups = getLocalizedServiceGroups(t);
  const [activeGroupKey, setActiveGroupKey] = useState(serviceGroups[0]?.key ?? "");
  const activeGroups = serviceGroups.filter((group) => group.key === activeGroupKey);
  const visibleGroups = activeGroups.length > 0 ? activeGroups : serviceGroups;
  return (
    <Layout>
      <SEOHead
        title={t("services_page.seo_title")}
        description={t("services_page.seo_description")}
        pathname="/services"
      />

      <section className="relative overflow-hidden bg-(--color-bg-dark) pt-32 text-white md:pt-40">
        <img
          src={BUSINESS_INFO.HERO_IMAGE}
          alt="Landscaping and lawn care services"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark) via-(--color-bg-dark)/86 to-(--color-bg-dark)/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
              {t("services_page.badge")}
            </p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {t("services_page.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
              {t("services_page.subtitle")}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT_INFO.PHONE_CALL}
                className="rounded-2xl bg-(--color-primary) px-8 py-4 text-center font-black text-white transition-all hover:-translate-y-1 hover:bg-(--color-primary-hover)"
              >
                {t("services_page.call")} {CONTACT_INFO.PHONE_DISPLAY}
              </a>
              <a
                href={CONTACT_INFO.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/16"
              >
                {t("services_page.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-light) py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 -mt-24 relative z-20 rounded-[2rem] border border-(--color-border-light) bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:p-5">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {serviceGroups.map((group) => {
                const isActive = group.key === activeGroupKey;

                return (
                  <button
                    key={group.title}
                    type="button"
                    onClick={() => setActiveGroupKey(group.key)}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition-all ${
                      isActive
                        ? "bg-(--color-bg-dark) text-white shadow-lg"
                        : "bg-(--color-bg-light) text-(--color-text-primary) hover:bg-(--color-surface-strong) hover:text-(--color-primary)"
                    }`}
                  >

                    {group.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">
                {t("services_page.section_label")}
              </p>
              <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">
                {t("services_page.section_title")}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-(--color-text-muted)">
              {t("services_page.section_description")}
            </p>
          </div>

          <div className="grid gap-12">
            {visibleGroups.map((group) => (
              <div key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")}> 
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px flex-1 bg-(--color-primary)/20" />
                  <h3 className="text-center text-2xl font-black text-(--color-primary) md:text-3xl">
                    {group.title}
                  </h3>
                  <span className="h-px flex-1 bg-(--color-primary)/20" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.services.map((service) => (
                    <Link
                      key={service.key}
                      to={getServicePath(service.key)}
                      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-(--color-surface) shadow-sm ring-1 ring-(--color-border-light) transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-(--color-primary)/30"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/64 via-black/10 to-transparent" />
                        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/92 text-sm font-black text-(--color-primary) shadow-lg">
                          {service.icon}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-(--color-primary)">
                          {service.category}
                        </p>
                        <h4 className="text-2xl font-black leading-tight text-(--color-text-primary)">
                          {service.title}
                        </h4>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-(--color-text-muted)">
                          {service.description}
                        </p>
                        <span className="mt-5 inline-flex items-center font-black text-(--color-primary)">
                          {t("services_page.view_service")}
                          <span className="ml-2 transition-transform group-hover:translate-x-1">
                            -&gt;
                          </span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection isHomePage={true} />
    </Layout>
  );
}
