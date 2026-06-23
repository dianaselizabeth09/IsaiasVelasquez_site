import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_INFO } from "@/config/constants";

function CookiePopup({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();

  const acceptAll = () => {
    localStorage.setItem("hvCookieConsent", "accepted");
    onClose();
  };

  const rejectAll = () => {
    localStorage.setItem("hvCookieConsent", "rejected");
    onClose();
  };

  const savePreferences = () => {
    localStorage.setItem("hvCookieConsent", "saved");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[4px]" onClick={onClose} />
      <div className="relative w-[550px] max-w-[95%] rounded-[22px] bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#eee] p-[25px]">
          <h3 className="m-0 text-[28px] font-bold" style={{ color: "#0d2418" }}>
            {t("floating.cookie_title")}
          </h3>
          <button onClick={onClose} className="cursor-pointer text-[30px] border-none bg-transparent" style={{ color: "#2f7d32" }}>
            &times;
          </button>
        </div>
        <div className="p-[25px]">
          <p className="leading-[1.8]" style={{ color: "#666" }}>
            {t("floating.cookie_text")}
          </p>
          <div className="flex gap-3 my-5">
            <button onClick={acceptAll} className="flex-1 rounded-xl border-none py-[14px] font-bold text-white cursor-pointer" style={{ background: "linear-gradient(135deg,#2f7d32,#205b2b)" }}>
              {t("floating.cookie_accept")}
            </button>
            <button onClick={rejectAll} className="flex-1 rounded-xl border border-[#ddd] bg-white py-[14px] cursor-pointer">
              {t("floating.cookie_reject")}
            </button>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <div>
              <strong style={{ color: "#0d2418" }}>{t("floating.cookie_essential")}</strong>
              <small className="block" style={{ color: "#888" }}>{t("floating.cookie_essential_desc")}</small>
            </div>
            <input type="checkbox" checked disabled />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <div>
              <strong style={{ color: "#0d2418" }}>{t("floating.cookie_preference")}</strong>
              <small className="block" style={{ color: "#888" }}>{t("floating.cookie_preference_desc")}</small>
            </div>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <div>
              <strong style={{ color: "#0d2418" }}>{t("floating.cookie_analytics")}</strong>
              <small className="block" style={{ color: "#888" }}>{t("floating.cookie_analytics_desc")}</small>
            </div>
            <input type="checkbox" />
          </div>
          <button onClick={savePreferences} className="mt-[10px] w-full rounded-xl border-none py-[15px] font-bold text-white cursor-pointer" style={{ background: "#0d2418" }}>
            {t("floating.cookie_save")}
          </button>
        </div>
      </div>
    </div>
  );
}

function AccessPopup({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const [contrast, setContrast] = useState(false);
  const [gray, setGray] = useState(false);
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("hv-contrast", contrast);
    document.body.classList.toggle("hv-gray", gray);
    document.body.classList.toggle("hv-underline", underline);
    return () => {
      document.body.classList.remove("hv-contrast", "hv-gray", "hv-underline");
    };
  }, [contrast, gray, underline]);

  return (
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[4px]" onClick={onClose} />
      <div className="relative w-[550px] max-w-[95%] rounded-[22px] bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#eee] p-[25px]">
          <h3 className="m-0 text-[28px] font-bold" style={{ color: "#0d2418" }}>
            {t("floating.access_title")}
          </h3>
          <button onClick={onClose} className="cursor-pointer text-[30px] border-none bg-transparent" style={{ color: "#2f7d32" }}>
            &times;
          </button>
        </div>
        <div className="p-[25px]">
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <span>{t("floating.access_contrast")}</span>
            <input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <span>{t("floating.access_grayscale")}</span>
            <input type="checkbox" checked={gray} onChange={(e) => setGray(e.target.checked)} className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-[#eee] p-[18px] mb-3">
            <span>{t("floating.access_underline")}</span>
            <input type="checkbox" checked={underline} onChange={(e) => setUnderline(e.target.checked)} className="w-5 h-5" />
          </div>
          <button onClick={onClose} className="mt-[10px] w-full rounded-xl border-none py-[15px] font-bold text-white cursor-pointer" style={{ background: "#0d2418" }}>
            {t("floating.access_save")}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SocialFab: React.FC = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [showAccessPopup, setShowAccessPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("hvCookieConsent")) {
      setShowCookiePopup(true);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Left side - Cookies & Accessibility buttons */}
      <div className="fixed left-[15px] bottom-5 z-[9999999] flex flex-col gap-3">
        <button
          onClick={() => setShowCookiePopup(true)}
          className="w-[60px] h-[60px] md:w-[52px] md:h-[52px] border-none rounded-full cursor-pointer text-white text-[22px] shadow-[0_10px_25px_rgba(0,0,0,.25)] transition-transform duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg,#2f7d32,#0d2418)" }}
          aria-label={t("floating.cookie_title")}
        >
          <i className="fas fa-cookie-bite" />
        </button>
        <button
          onClick={() => setShowAccessPopup(true)}
          className="w-[60px] h-[60px] md:w-[52px] md:h-[52px] border-none rounded-full cursor-pointer text-white text-[22px] shadow-[0_10px_25px_rgba(0,0,0,.25)] transition-transform duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg,#0d2418,#2f7d32)" }}
          aria-label={t("floating.access_title")}
        >
          <i className="fas fa-universal-access" />
        </button>
      </div>

      {/* Right side - Social buttons */}
      <div className="fixed right-[15px] top-1/2 -translate-y-1/2 z-[999999] flex flex-col gap-3">
        {CONTACT_INFO.PHONE_CALL && (
          <a
            href={CONTACT_INFO.PHONE_CALL}
            className="w-[55px] h-[55px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center text-white no-underline text-[22px] md:text-[18px] shadow-[0_8px_20px_rgba(0,0,0,.18)] transition-all duration-300 hover:scale-110"
            style={{ background: "linear-gradient(135deg,#0d2418,#2f7d32)" }}
            aria-label={t("floating.call")}
          >
            <i className="fas fa-phone-alt" />
          </a>
        )}
        {CONTACT_INFO.WHATSAPP_URL && (
          <a
            href={CONTACT_INFO.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[55px] h-[55px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center text-white no-underline text-[22px] md:text-[18px] shadow-[0_8px_20px_rgba(0,0,0,.18)] transition-all duration-300 hover:scale-110"
            style={{ background: "#25D366" }}
            aria-label={t("floating.whatsapp")}
          >
            <i className="fab fa-whatsapp" />
          </a>
        )}
        <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-[55px] h-[55px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center text-white no-underline text-[22px] md:text-[18px] shadow-[0_8px_20px_rgba(0,0,0,.18)] transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
            style={{ background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
            aria-label={t("floating.instagram")}
          >
            <i className="fab fa-instagram" />
          </a>
        <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-[55px] h-[55px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center text-white no-underline text-[22px] md:text-[18px] shadow-[0_8px_20px_rgba(0,0,0,.18)] transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
            style={{ background: "#1877F2" }}
            aria-label={t("floating.facebook")}
          >
            <i className="fab fa-facebook-f" />
          </a>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 bg-(--color-primary) hover:bg-(--color-primary-hover) text-(--color-text-inverse) rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
          title={t("floating.scroll_top")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Popups */}
      {showCookiePopup && <CookiePopup onClose={() => setShowCookiePopup(false)} />}
      {showAccessPopup && <AccessPopup onClose={() => setShowAccessPopup(false)} />}
    </>
  );
};
