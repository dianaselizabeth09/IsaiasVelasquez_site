import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEOHead } from "@/components/common";
import { Layout } from "@/components/layout";
import { ContactSection } from "@/components/sections";
import {
  APP_SERVICES,
  BUSINESS_INFO,
  CONTACT_INFO,
  FEATURED_SERVICE_KEYS,
  getServiceByKey,
  getServicePath,
} from "@/config/constants";
import bannerImg from "@/assets/images/gallery-8.jpeg";
import beforeImg from "@/assets/images/gallery-1.jpeg";
import afterImg from "@/assets/images/gallery-2.jpeg";

const featuredServices = FEATURED_SERVICE_KEYS.map((key) => getServiceByKey(key)).filter(
  (service): service is (typeof APP_SERVICES)[number] => Boolean(service),
);

export default function HomePage() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 6 && hour >= 7 && hour < 18;
  const heroSlides = [
    {
      image: bannerImg,
      badge: t("home_page.hero.slides.0.badge"),
      title: t("home_page.hero.slides.0.title"),
      subtitle: t("home_page.hero.slides.0.subtitle"),
    },
    {
      image: getServiceByKey("decks-and-patios")?.image ?? BUSINESS_INFO.HERO_IMAGE,
      badge: t("home_page.hero.slides.1.badge"),
      title: t("home_page.hero.slides.1.title"),
      subtitle: t("home_page.hero.slides.1.subtitle"),
    },
    {
      image: getServiceByKey("lawn-mowing")?.image ?? BUSINESS_INFO.CAROUSEL_IMAGE,
      badge: t("home_page.hero.slides.2.badge"),
      title: t("home_page.hero.slides.2.title"),
      subtitle: t("home_page.hero.slides.2.subtitle"),
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[activeSlide];
  const whyChoose = [0, 1, 2, 3].map((index) => t(`home_page.why.items.${index}`));
  const solutionCards = [
    {
      title: t("home_page.solutions.cards.tree.title"),
      description: t("home_page.solutions.cards.tree.description"),
      image: getServiceByKey("tree-services")?.image ?? BUSINESS_INFO.HERO_IMAGE,
      path: "/services#tree-services",
    },
    {
      title: t("home_page.solutions.cards.decks.title"),
      description: t("home_page.solutions.cards.decks.description"),
      image: getServiceByKey("decks-and-patios")?.image ?? BUSINESS_INFO.HERO_IMAGE,
      path: "/services#outdoor-living",
    },
    {
      title: t("home_page.solutions.cards.lawn.title"),
      description: t("home_page.solutions.cards.lawn.description"),
      image: getServiceByKey("landscape-maintenance")?.image ?? BUSINESS_INFO.CAROUSEL_IMAGE,
      path: "/services#landscape-services",
    },
  ];
  const clientTypes = [0, 1, 2, 3, 4, 5].map((index) => t(`home_page.clients.items.${index}`));
  const faqs = [0, 1, 2].map((index) => ({
    question: t(`home_page.faq.items.${index}.question`),
    answer: t(`home_page.faq.items.${index}.answer`),
  }));

  return (
    <Layout>
      <SEOHead
        title={t("home_page.seo_title")}
        description={t("home_page.seo_description")}
        pathname="/"
      />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07130c] pt-24">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={t("home_page.hero.image_alt")}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              activeSlide === index ? "scale-100 opacity-78" : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-[#06150d]/96 via-[#0d2418]/72 to-[#0d2418]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(127,194,65,0.24),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-[#07130c] via-[#07130c]/70 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div className="max-w-4xl rounded-[2rem] border border-white/14 bg-white/[0.08] p-6 shadow-2xl shadow-black/35 backdrop-blur-md md:p-9 lg:p-11">
              <div
                className={`mb-6 inline-flex flex-col gap-1 rounded-full border px-4 py-2 backdrop-blur-md sm:flex-row sm:items-center sm:gap-3 ${
                isOpen
                  ? "border-green-300/35 bg-green-500/18 text-white"
                  : "border-white/18 bg-white/10 text-white/82"
              }`}
              >
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-green-300 shadow-[0_0_18px_rgba(134,239,172,0.85)]" : "bg-slate-300"}`}
                  />
                  {isOpen ? t("home_page.hours.open") : t("home_page.hours.closed")}
                </span>
                <span className="text-xs font-semibold text-white/78">
                  {t("home_page.hours.schedule")}
                </span>
              </div>

              <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
                {currentSlide.badge}
              </p>
              <h1 className="max-w-5xl text-4xl font-black leading-[1.05] text-white md:text-5xl lg:text-6xl">
                {currentSlide.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
                {currentSlide.subtitle}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={CONTACT_INFO.PHONE_CALL}
                  className="inline-flex items-center justify-center rounded-2xl bg-(--color-primary) px-8 py-4 text-base font-black text-(--color-text-inverse) shadow-2xl shadow-black/20 transition-all hover:-translate-y-1 hover:bg-(--color-primary-hover)"
                >
                  {t("home_page.hero.call")} {CONTACT_INFO.PHONE_DISPLAY}
                </a>
                <a
                  href={CONTACT_INFO.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-black text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/18"
                >
                  {t("home_page.hero.whatsapp")}
                </a>
              </div>
            </div>

            <div className="hidden lg:grid gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={`${slide.badge}-${index}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group overflow-hidden rounded-3xl border p-3 text-left backdrop-blur-md transition-all ${
                    activeSlide === index
                      ? "border-white/40 bg-white/18 shadow-2xl"
                      : "border-white/12 bg-white/8 hover:bg-white/12"
                  }`}
                >
                  <div className="grid grid-cols-[5rem_1fr] items-center gap-3">
                    <img
                      src={slide.image}
                      alt={slide.badge}
                      className="h-16 w-20 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="line-clamp-2 text-sm font-black leading-tight text-white">
                        {slide.badge}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex justify-center gap-3 lg:hidden">
            {heroSlides.map((slide, index) => (
              <button
                key={`${slide.badge}-${index}`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeSlide === index ? "w-10 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={t("common.slide", { number: index + 1 })}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-light) py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.about.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("home_page.about.title")}</h2>
          </div>
          <div className="surface-card template-border rounded-[2rem] p-8 md:p-10">
            <p className="text-lg leading-relaxed text-(--color-text-muted)">
              {t("home_page.about.text", { business: BUSINESS_INFO.NAME })}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">
              {t("home_page.solutions.label")}
            </p>
            <h2 className="mx-auto max-w-4xl text-4xl font-black text-(--color-text-primary) md:text-6xl">
              {t("home_page.solutions.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-(--color-text-muted)">
              {t("home_page.solutions.subtitle")}
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <Link
                key={card.title}
                to={card.path}
                className="group overflow-hidden rounded-[2rem] bg-(--color-bg-light) shadow-sm ring-1 ring-(--color-border-light) transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 text-3xl font-black text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="p-7">
                  <p className="text-(--color-text-muted) leading-relaxed">{card.description}</p>
                  <span className="mt-6 inline-flex font-black text-(--color-primary)">
                    {t("home_page.common.view_services")} -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-(--color-bg-light) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.featured.label")}</p>
              <h2 className="max-w-3xl text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("home_page.featured.title")}</h2>
            </div>
            <Link to="/services" className="font-black text-(--color-primary) hover:text-(--color-primary-hover)">
              {t("services_page.view_all")}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.key}
                to={getServicePath(service.key)}
                className="group overflow-hidden rounded-[2rem] bg-(--color-bg-light) shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={t(`services.${service.key}.title`)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-(--color-primary)">
                    {service.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-(--color-text-primary)">{t(`services.${service.key}.title`)}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-(--color-text-muted)">{t(`services.${service.key}.description`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-dark) py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.why.label")}</p>
            <h2 className="text-4xl font-black md:text-6xl">{t("home_page.why.title")}</h2>
          </div>
          <div className="grid gap-4">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm transition-all hover:bg-white/12">
                <p className="font-bold text-white/88">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">
                {t("home_page.clients.label")}
              </p>
              <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">
                {t("home_page.clients.title")}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-(--color-text-muted)">
              {t("home_page.clients.subtitle")}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((client) => (
              <div key={client} className="rounded-2xl bg-(--color-bg-light) p-6 font-bold text-(--color-text-primary) ring-1 ring-(--color-border-light)">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-bg-light) py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.projects.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("home_page.projects.title")}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative h-96 overflow-hidden rounded-[2rem] shadow-xl">
              <img src={beforeImg} alt={t("common.before")} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-block rounded-full bg-red-500/90 px-4 py-1 text-xs font-black uppercase tracking-wider text-white mb-2">{t("common.before")}</span>
                <p className="text-xl font-black text-white">{t("common.before")}</p>
              </div>
            </div>
            <div className="group relative h-96 overflow-hidden rounded-[2rem] shadow-xl">
              <img src={afterImg} alt={t("common.after")} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-block rounded-full bg-(--color-primary) px-4 py-1 text-xs font-black uppercase tracking-wider text-white mb-2">{t("common.after")}</span>
                <p className="text-xl font-black text-white">{t("common.after")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.areas.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("home_page.areas.title")}</h2>
          </div>
          <div className="surface-card template-border rounded-[2rem] p-8">
            <p className="text-lg leading-relaxed text-(--color-text-muted)">
              {t("home_page.areas.text")}
            </p>
            <a href={CONTACT_INFO.PHONE_CALL} className="mt-6 inline-flex rounded-2xl bg-(--color-primary) px-7 py-4 font-black text-white hover:bg-(--color-primary-hover)">
              {t("home_page.areas.cta")}
            </a>
          </div>
        </div>
      </section>

      <section className="py-[100px] px-5"
        style={{
          background:
            "radial-gradient(circle at top left,rgba(47,125,50,.12),transparent 35%)," +
            "radial-gradient(circle at bottom right,rgba(13,36,24,.08),transparent 35%)," +
            "linear-gradient(135deg,#f3f7ee 0%,#e8efe2 50%,#ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-[900px] mb-[50px] text-center">
          <span className="text-[14px] font-bold tracking-[3px] uppercase" style={{ color: "#2f7d32" }}>
            {t("home_page.testimonials.label")}
          </span>
          <h2 className="text-[56px] font-bold m-[15px_0_20px] leading-tight" style={{ color: "#0d2418" }}>
            {t("home_page.testimonials.title")}
          </h2>
          <p className="text-[18px] leading-[1.8] max-w-[750px] mx-auto" style={{ color: "#5f6f62" }}>
            {t("home_page.testimonials.subtitle")}
          </p>
        </div>
        <div className="mx-auto max-w-[1200px] bg-white p-[35px] rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,.08)] border border-[rgba(13,36,24,.06)]">
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((index) => t(`home_page.testimonials.items.${index}`)).map((quote) => (
              <blockquote key={quote} className="p-7 text-center">
                <svg className="w-8 h-8 mx-auto mb-4 opacity-30" style={{ color: "#2f7d32" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-lg font-semibold leading-relaxed mb-5" style={{ color: "#102419" }}>"{quote}"</p>
                <footer className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: "#2f7d32" }}>
                  {t("home_page.testimonials.client")}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-surface) py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-(--color-primary)">{t("home_page.faq.label")}</p>
            <h2 className="text-4xl font-black text-(--color-text-primary) md:text-6xl">{t("home_page.faq.title")}</h2>
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
        <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-6xl">{t("home_page.final.title")}</h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={CONTACT_INFO.PHONE_CALL} className="rounded-2xl bg-(--color-primary) px-8 py-4 font-black text-white hover:bg-(--color-primary-hover)">{t("home_page.final.call")}</a>
          <a href={CONTACT_INFO.WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/25 px-8 py-4 font-black text-white hover:bg-white/10">{t("services_page.whatsapp")}</a>
        </div>
      </section>
    </Layout>
  );
}
