import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { APP_SERVICES, getServicePath } from "@/config/constants";

interface RelatedServicesProps {
  currentServiceKey: string;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentServiceKey,
}) => {
  const { t } = useTranslation();
  const relatedServices = APP_SERVICES.filter(
    (service) => service.key !== currentServiceKey,
  ).slice(0, 6);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-(--color-bg-light) py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="template-reveal text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4">
            {t("related_services.title")}
          </h2>
          <p className="text-lg text-(--color-text-muted) max-w-2xl mx-auto">
            {t("related_services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => {
            const delayClass =
              index % 3 === 1
                ? "template-reveal-delay-1"
                : index % 3 === 2
                  ? "template-reveal-delay-2"
                  : "";

            return (
              <Link
                key={service.key}
                to={getServicePath(service.key)}
                className={`template-reveal ${delayClass} group flex h-full flex-col overflow-hidden rounded-[2rem] surface-card template-border transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative h-64 overflow-hidden bg-(--color-surface-strong)">
                    <img
                      src={service.image}
                      alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/35 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-2xl font-bold text-(--color-text-primary) mb-3">
                    {service.title}
                  </h3>
                  <p className="text-(--color-text-muted) leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-(--color-primary) font-semibold group-hover:text-(--color-primary-hover) transition-colors">
                    {t("related_services.cta")}
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
