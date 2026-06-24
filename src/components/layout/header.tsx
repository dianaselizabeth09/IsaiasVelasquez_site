import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BUSINESS_INFO,
  CONTACT_INFO,
  getNavLinks,
  getLocalizedBusinessName,
  getLocalizedServiceGroups,
  getServicePath,
} from "@/config/constants";
import menuBanner from "@/assets/images/gallery-1.jpeg";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const menuItems = getNavLinks(t);
  const serviceGroups = getLocalizedServiceGroups(t);
  const displayBusinessName = getLocalizedBusinessName(t).replace(" SRL", "");
  const getGroupMeta = (key: string) => {
    if (key === "Tree Services") {
      return { icon: "T", iconClass: "bg-lime-100 text-lime-700", label: t("header.nav_meta.tree_care") };
    }

    if (key === "Outdoor Living") {
      return { icon: "D", iconClass: "bg-orange-100 text-orange-700", label: t("header.nav_meta.decks_patios") };
    }

    if (key === "Landscape Services") {
      return { icon: "L", iconClass: "bg-emerald-100 text-emerald-700", label: t("header.nav_meta.landscape_care") };
    }

    if (key === "Cleanup & More") {
      return {
        icon: "+",
        iconClass: "bg-sky-100 text-sky-700",
        label: t("header.nav_meta.extra_services"),
      };
    }

    return {
      icon: "L",
      iconClass: "bg-emerald-100 text-emerald-700",
      label: t("header.nav_meta.lawn_care"),
    };
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-(--color-primary)/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center">
        <div className="flex items-center shrink-0">
          <Link
            to="/"
            className="flex items-center space-x-3 transition-transform hover:scale-[1.02] duration-300"
          >
            <img
              src={BUSINESS_INFO.LOGO}
              alt={t("header.logo", { name: displayBusinessName })}
              className="w-14 h-14 md:w-16 md:h-16 object-cover"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => {
            if (item.key !== "services") {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-(--color-bg-dark) hover:text-(--color-primary) transition-colors font-semibold text-sm relative py-2"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className="text-(--color-bg-dark) hover:text-(--color-primary) transition-colors font-semibold text-sm relative py-2 inline-flex items-center gap-1"
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </Link>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 pt-4 w-[42rem] -translate-x-1/2">
                    <div className="rounded-[1.25rem] border border-(--color-border-light) bg-white/98 p-5 shadow-2xl backdrop-blur-xl">
                      <div className="grid grid-cols-3 gap-4">
                        {serviceGroups.map((group) => {
                          const meta = getGroupMeta(group.key);

                          return (
                            <div key={group.title}>
                              <div className="mb-3 flex items-center gap-2 border-b border-(--color-border-light) pb-3">
                                <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black ${meta.iconClass}`}>
                                  {meta.icon}
                                </span>
                                <div>
                                  <p className="text-xs font-black uppercase tracking-[0.14em] text-(--color-primary)">
                                    {group.title}
                                  </p>
                                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-(--color-text-muted)">
                                    {meta.label}
                                  </p>
                                </div>
                              </div>
                              <div className="grid gap-1">
                                {group.services.map((service) => (
                                  <Link
                                    key={service.key}
                                    to={getServicePath(service.key)}
                                    className="group/link flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-(--color-text-primary) transition-all hover:bg-(--color-bg-light) hover:text-(--color-primary)"
                                  >
                                    <span className="text-(--color-text-muted) transition-colors group-hover/link:text-(--color-primary)">
                                      &gt;
                                    </span>
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-4 flex items-center gap-4 border-t border-(--color-border-light) pt-4">
                        <img src={menuBanner} alt="" className="h-16 w-24 rounded-xl object-cover" />
                        <div className="flex-1">
                          <p className="text-xs font-black uppercase tracking-[0.14em] text-(--color-primary)">{t("services_page.section_label")}</p>
                          <p className="text-[10px] text-(--color-text-muted) mt-0.5">{t("services_page.section_description")}</p>
                        </div>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-sm font-black text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
                        >
                          {t("services_page.view_all")}
                          <span>-&gt;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          </nav>
        </div>

        <div className="flex items-center space-x-4 shrink-0">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-full border border-(--color-bg-dark)/20 bg-(--color-bg-dark) px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-(--color-primary) hover:shadow-lg"
            aria-label={t("header.change_language")}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/15 text-[10px]">
              x
            </span>
            {i18n.language === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-(--color-bg-dark) text-2xl focus:outline-none p-2 rounded-lg hover:bg-(--color-primary)/10 transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-(--color-bg-light) border-t border-(--color-primary)/20">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {menuItems.map((item) => {
              if (item.key !== "services") {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-(--color-bg-dark) hover:text-(--color-primary) hover:bg-(--color-primary)/10 transition-all font-medium py-3 px-4 rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.key}
                  className="rounded-xl overflow-hidden border border-(--color-primary)/10"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-(--color-bg-dark) hover:text-(--color-primary) hover:bg-(--color-primary)/10 transition-all font-medium py-3 px-4"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>

                  {isMobileServicesOpen && (
                    <div className="flex flex-col border-t border-(--color-primary)/10 bg-(--color-surface)">
                      {serviceGroups.map((group) => {
                        const meta = getGroupMeta(group.key);

                        return (
                        <div key={group.title} className="px-3 py-3">
                          <div className="mb-2 flex items-center gap-2 px-1">
                            <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${meta.iconClass}`}>
                              {meta.icon}
                            </span>
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-(--color-primary)">
                              {group.title}
                            </p>
                          </div>
                          {group.services.map((service) => (
                            <Link
                              key={service.key}
                              to={getServicePath(service.key)}
                              className="block rounded-xl px-3 py-2 text-sm text-(--color-text-primary) hover:bg-(--color-surface-strong) hover:text-(--color-primary) transition-all"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                        );
                      })}
                      <Link
                        to="/services"
                        className="mx-3 mb-3 rounded-xl bg-(--color-bg-light) px-3 py-3 text-sm font-black text-(--color-primary)"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {t("services_page.view_all")} -&gt;
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href={CONTACT_INFO.PHONE_CALL}
              className="flex items-center justify-center rounded-xl border border-(--color-primary)/20 py-3 text-sm font-bold text-(--color-primary)"
            >
              {t("home_page.hero.call")} {CONTACT_INFO.PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
