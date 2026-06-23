import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout";
import { SEOHead } from "@/components/common";

import galleryImg1 from "@/assets/images/gallery-1.jpeg";
import galleryImg2 from "@/assets/images/gallery-2.jpeg";
import galleryImg3 from "@/assets/images/gallery-3.jpeg";
import galleryImg4 from "@/assets/images/gallery-4.jpeg";
import galleryImg5 from "@/assets/images/gallery-5.jpeg";
import galleryImg6 from "@/assets/images/gallery-6.jpeg";
import galleryImg7 from "@/assets/images/gallery-7.jpeg";
import galleryImg8 from "@/assets/images/gallery-8.jpeg";
import galleryImg9 from "@/assets/images/gallery-9.jpeg";

const galleryImages: Record<number, string> = {
  1: galleryImg1,
  2: galleryImg2,
  3: galleryImg3,
  4: galleryImg4,
  5: galleryImg5,
  6: galleryImg6,
  7: galleryImg7,
  8: galleryImg8,
  9: galleryImg9,
};

export default function GalleryPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = t("gallery.items", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    category: string;
    description: string;
  }>;

  const categories = t("gallery.categories", { returnObjects: true }) as Record<
    string,
    string
  >;

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      <SEOHead
        title={t("gallery.title")}
        description={t("gallery.subtitle")}
        pathname="/gallery"
      />

      <div className="py-16 bg-(--color-bg-light)">
        <div className="container mx-auto px-4">
          <div className="template-reveal text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4">
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-(--color-text-muted) max-w-3xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>

          <div className="template-reveal template-reveal-delay-1 flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === key
                    ? "bg-(--color-primary) text-(--color-text-inverse)"
                    : "bg-(--color-surface) text-(--color-text-primary) hover:bg-(--color-surface-strong)"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`template-reveal ${index % 3 === 1 ? "template-reveal-delay-1" : index % 3 === 2 ? "template-reveal-delay-2" : ""} group relative overflow-hidden rounded-[1.75rem] surface-card template-border transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative aspect-[16/12] overflow-hidden">
                  <img
                    src={galleryImages[item.id] ?? galleryImg1}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/72 via-(--color-bg-dark)/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-(--color-text-inverse)">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-3 max-w-sm">
                      {item.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-(--color-text-inverse)/14 rounded-full text-xs">
                      {categories[item.category]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-(--color-text-muted) text-lg">
                {t("gallery.no_items")}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
