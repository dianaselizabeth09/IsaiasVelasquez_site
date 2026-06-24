import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  getLocalizedBusinessName,
} from "../../config/constants";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const displayBusinessName = getLocalizedBusinessName(t);
  const highlightItems = [
    {
      label: t("home.hero.floating_cards.rating.label"),
      value: t("home.hero.floating_cards.rating.value"),
    },
    {
      label: t("home.hero.floating_cards.experience.label"),
      value: t("home.hero.floating_cards.experience.value"),
    },
    {
      label: t("home.hero.floating_cards.projects.label"),
      value: t("home.hero.floating_cards.projects.value"),
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden bg-(--color-bg-dark)">
      <div className="absolute inset-0">
        <img
          src={BUSINESS_INFO.HERO_IMAGE}
          alt={displayBusinessName}
          className="w-full h-full object-cover opacity-80 template-slow-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark)/90 via-(--color-bg-dark)/72 to-(--color-bg-dark)/48"></div>
        <div className="absolute inset-0 template-primary-glow-hero"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="template-reveal inline-flex items-center gap-2 mb-6 bg-(--color-text-inverse)/10 backdrop-blur-sm border border-(--color-text-inverse)/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-(--color-primary) rounded-full"></span>
            <span className="text-(--color-text-inverse) text-xs font-semibold uppercase tracking-wider">
              {t("home.hero.badge")}
            </span>
          </div>

          <p className="template-reveal template-reveal-delay-1 text-(--color-primary) font-bold mb-3 tracking-[0.15em] uppercase text-sm">
            {t("home.hero.greeting")}
          </p>

          <h1 className="template-reveal template-reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-(--color-text-inverse) mb-6 leading-tight max-w-2xl">
            {t("home.hero.title")}
          </h1>

          <p className="template-reveal template-reveal-delay-2 text-lg text-(--color-text-inverse)/82 mb-8 leading-relaxed max-w-2xl">
            {t("home.hero.subtitle")}
          </p>

          <div className="template-reveal template-reveal-delay-2 flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl shadow-lg shadow-(--color-primary)/25 hover:shadow-(--color-primary)/40 hover:-translate-y-0.5 active:scale-[0.98] bg-(--color-primary) text-(--color-text-inverse) hover:bg-(--color-primary-hover) px-8 py-4 text-base"
            >
              {t("home.hero.cta")}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            {CONTACT_INFO.WHATSAPP_URL && (
              <a
                href={CONTACT_INFO.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl border-2 border-(--color-text-inverse)/30 text-(--color-text-inverse) hover:bg-(--color-text-inverse)/10 px-8 py-4 text-base"
              >
                <svg
                  className="w-5 h-5 text-(--color-social-whatsapp)"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("floating.whatsapp")}
              </a>
            )}
          </div>

          <div className="template-reveal template-reveal-delay-2 flex flex-wrap gap-3 text-(--color-text-inverse)/82">
            {highlightItems.map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-(--color-text-inverse)/10 border border-(--color-text-inverse)/15 px-4 py-2 text-sm"
              >
                <span className="text-(--color-primary) font-bold">
                  {item.value}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 mt-16">
          {highlightItems.map((item, index) => (
            <div
              key={item.label}
              className={`template-reveal ${index === 1 ? "template-reveal-delay-1" : index === 2 ? "template-reveal-delay-2" : ""} template-float rounded-2xl bg-(--color-text-inverse)/10 backdrop-blur-md border border-(--color-text-inverse)/20 p-5 min-w-52`}
            >
              <p className="text-xs text-(--color-text-inverse)/64 uppercase tracking-[0.18em] mb-2">
                {item.label}
              </p>
              <p className="text-(--color-text-inverse) font-bold text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
