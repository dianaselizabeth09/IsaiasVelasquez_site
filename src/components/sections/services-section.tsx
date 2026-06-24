import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { APP_SERVICES, getServicePath } from "../../config/constants";

interface ServicesSectionProps {
  titleAs?: "h1" | "h2";
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  titleAs = "h2",
}) => {
  const { t } = useTranslation();
  const HeadingTag = titleAs;

  return (
    <section
      id="services"
      className="relative w-full bg-(--color-bg-light) py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="template-reveal text-center mb-16">
          <HeadingTag className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4">
            {t("services.title")}
          </HeadingTag>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24">
          {APP_SERVICES.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            const delayClass =
              index === 0
                ? ""
                : index % 2 === 0
                  ? "template-reveal-delay-2"
                  : "template-reveal-delay-1";

            return (
              <div
                key={service.key}
                id={service.key}
                className={`template-reveal ${delayClass} flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 lg:gap-16`}
              >
                <div className="w-full md:w-5/12">
                  <div className="relative overflow-hidden rounded-[2rem] surface-card template-border group">
                    <img
                      src={service.image}
                      alt={t(`services.${service.key}.title`)}
                      className="w-full h-60 sm:h-68 md:h-76 lg:h-88 object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/24 to-transparent" />
                  </div>
                </div>

                <div className="w-full md:w-5/12">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-text-primary) mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-(--color-text-muted) text-base sm:text-lg leading-relaxed mb-6">
                    {t(`services.${service.key}.description`)}
                  </p>
                  <Link
                    to={getServicePath(service.key)}
                    className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:text-(--color-primary-hover) transition-colors group/link cursor-pointer bg-transparent border-none p-0 text-base"
                  >
                    {t("services.cta")}
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
