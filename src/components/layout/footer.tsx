import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LogoMarketing from "@/assets/images/logo-marketing.jpeg";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  getNavLinks,
  getLocalizedBusinessName,
  getServiceGroups,
  getServiceLinks,
} from "@/config/constants";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { PHONE_DISPLAY, PHONE_CALL, EMAIL } = CONTACT_INFO;

  const navLinks = getNavLinks(t);
  const serviceLinks = getServiceLinks(t);
  const serviceGroups = getServiceGroups();
  const displayBusinessName = getLocalizedBusinessName(t).replace(" SRL", "");
  const primaryServices = serviceLinks.slice(0, 6);
  const additionalServices = serviceLinks.slice(6, 11);
  const companyLinks = navLinks.filter((link) => ["about", "gallery", "faq", "contact"].includes(link.key));

  return (
    <footer className="bg-[#f4efe5] text-(--color-text-primary) border-t border-[#ded6c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.15fr] gap-8 sm:gap-10 lg:gap-16">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-5 transition-opacity hover:opacity-80"
            >
              <img
                src={BUSINESS_INFO.LOGO}
                alt={t("header.logo", { name: displayBusinessName })}
                className="w-14 h-14 object-cover rounded-full"
              />

            </Link>
            <p className="text-(--color-text-muted) text-sm leading-relaxed mb-5">
              {t("footer.tagline")}
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_CALL}
                  className="inline-flex items-center gap-2 text-(--color-text-muted) hover:text-(--color-primary) transition-colors"
                >
                  <svg className="w-4 h-4 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5C2 4.12 3.12 3 4.5 3h2.1c.74 0 1.38.5 1.56 1.21l.63 2.54a2 2 0 0 1-.52 1.88L7.1 9.8a13.02 13.02 0 0 0 7.1 7.1l1.17-1.17a2 2 0 0 1 1.88-.52l2.54.63A1.6 1.6 0 0 1 21 17.4v2.1c0 1.38-1.12 2.5-2.5 2.5A16.5 16.5 0 0 1 2 5.5z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-(--color-text-muted) hover:text-(--color-primary) transition-colors break-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l8.3 5.53a1.25 1.25 0 0 0 1.4 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-extrabold text-sm mb-4">
              {t("footer.main_services")}
            </h3>
            <ul className="space-y-3">
              {primaryServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-(--color-text-muted) hover:text-(--color-primary) transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-extrabold text-sm mb-4">
              {t("footer.more_services")}
            </h3>
            <ul className="space-y-3">
              {additionalServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-(--color-text-muted) hover:text-(--color-primary) transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li className={serviceGroups.length ? "" : "hidden"}>
                <Link
                  to="/services"
                  className="text-(--color-primary) hover:text-(--color-primary-hover) transition-colors text-sm font-semibold"
                >
                  {t("services_page.view_all")} -&gt;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-extrabold text-sm mb-4">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3 mb-5">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-(--color-text-muted) hover:text-(--color-primary) transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-xs text-(--color-text-muted)">
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-(--color-primary)">{t("footer.hours_label")}</span>
                <span>{t("contact.info.hours")}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-(--color-primary)">{t("footer.payment_label")}</span>
                <span>{t("contact.info.payment")}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-semibold text-(--color-primary)">{t("footer.area_label")}</span>
                <span>{t("footer.zip")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ded6c8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-(--color-text-muted)">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <p>
              &copy; {BUSINESS_INFO.COPYRIGHT_YEAR} {displayBusinessName}. {t("footer.copyright_rights")}
            </p>
            <a
              href={CONTACT_INFO.AGENCY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-l-0 sm:border-l border-[#ded6c8] sm:pl-5"
            >
              <span className="text-(--color-text-muted)/70">
                {t("footer.marketing_by", { agency: CONTACT_INFO.AGENCY_NAME })}
              </span>
              <img
                src={LogoMarketing}
                alt="Crescendo"
                className="h-8 w-8 rounded-full object-cover ring-1 ring-[#ded6c8] transition-transform group-hover:scale-105"
              />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-(--color-primary) transition-colors">
              {t("footer.legal.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-(--color-primary) transition-colors">
              {t("footer.legal.terms")}
            </Link>
            <Link to="/cookies" className="hover:text-(--color-primary) transition-colors">
              {t("footer.legal.cookies")}
            </Link>
            <Link to="/accessibility" className="hover:text-(--color-primary) transition-colors">
              {t("footer.legal.accessibility")}
            </Link>
            <Link to="/sitemap" className="hover:text-(--color-primary) transition-colors">
              {t("footer.legal.sitemap")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
