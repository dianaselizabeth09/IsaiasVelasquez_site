import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BUSINESS_INFO } from "@/config/constants";

export function PhotoCarouselSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryItems = t("gallery.items", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    category: string;
    description: string;
  }>;

  const carouselItems = galleryItems.slice(0, 6);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 md:py-20 bg-(--color-bg-light)">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="template-reveal text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--color-text-primary) mb-3">
            {t("home.gallery_preview.title")}
          </h2>
          <p className="text-base md:text-lg text-(--color-text-muted) max-w-xl mx-auto">
            {t("home.gallery_preview.subtitle")}
          </p>
        </div>

        <div className="template-reveal template-reveal-delay-1 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-[2rem] surface-card template-border">
              <div className="aspect-video">
                <img
                  src={BUSINESS_INFO.CAROUSEL_IMAGE}
                  alt={
                    carouselItems[currentIndex]?.title ||
                    t("home.gallery_preview.title")
                  }
                  className="w-full h-full object-cover template-slow-zoom"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-(--color-text-inverse)">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {carouselItems[currentIndex]?.title}
                </h3>
                <p className="text-sm opacity-80 max-w-lg">
                  {carouselItems[currentIndex]?.description}
                </p>
              </div>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 bg-(--color-surface)/92 rounded-full flex items-center justify-center shadow-md hover:bg-(--color-surface) transition-colors"
                  aria-label={t("common.previous")}
                >
                  <svg
                    className="w-5 h-5 text-(--color-text-primary)"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-1.5 bg-(--color-surface)/92 px-3 py-2 rounded-full shadow-md">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-(--color-primary) w-4"
                          : "bg-(--color-border-light) hover:bg-(--color-text-muted)"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="w-10 h-10 bg-(--color-surface)/92 rounded-full flex items-center justify-center shadow-md hover:bg-(--color-surface) transition-colors"
                  aria-label={t("common.next")}
                >
                  <svg
                    className="w-5 h-5 text-(--color-text-primary)"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/gallery"
              className="inline-flex items-center text-(--color-primary) hover:text-(--color-primary-hover) font-medium transition-colors"
            >
              {t("home.gallery_preview.cta")}
              <svg
                className="ml-1.5 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
