# 🚀 Project Setup Checklist

Welcome to the base-web template! Follow this checklist before deploying your landing page.

## Phase 1: Update Business Information (CRITICAL)

### 1.1 Update `src/config/constants.ts`

- [ ] **BUSINESS_INFO.NAME** → Your business name
- [ ] **BUSINESS_INFO.TAGLINE** → Your business tagline
- [ ] **BUSINESS_INFO.DESCRIPTION** → Your business description (1-2 sentences)
- [ ] **BUSINESS_INFO.URL** → Your production domain (e.g., `https://yourbusiness.com`)
- [ ] **BUSINESS_INFO.LOGO** → Path to your logo image
- [ ] **BUSINESS_INFO.HERO_IMAGE** → Path to your hero image
- [ ] **BUSINESS_INFO.CAROUSEL_IMAGE** → Path to carousel/preview image

### 1.2 Update Contact Information

- [ ] **CONTACT_INFO.EMAIL** → Your actual email address
- [ ] **phoneRaw** → Your phone number (displayed format)
- [ ] **whatsappRaw** → Your WhatsApp number (digits only)
- [ ] **CONTACT_INFO.SOCIAL.INSTAGRAM** → Your Instagram profile URL
- [ ] **CONTACT_INFO.SOCIAL.FACEBOOK** → Your Facebook page URL
- [ ] **CONTACT_INFO.SOCIAL.GOOGLE** → Your Google Business Profile URL
- [ ] **CONTACT_INFO.LOCATION** → Your business address
- [ ] **CONTACT_INFO.HOURS** → Your business hours

## Phase 2: Add Content & Translations

### 2.1 Create Business Information File

- [ ] Create `information.md` in your project root with:
  - Company name and description
  - Services/products offered
  - Contact information
  - Brand colors
  - Target keywords
  - Service areas (for local SEO)

### 2.2 Update Translations

- [ ] Edit `src/locales/en.json` with English copy
- [ ] Edit `src/locales/es.json` with Spanish copy
- [ ] Update page titles, descriptions, and service information
- [ ] Update FAQ content

### 2.3 Update SEO Defaults

- [ ] `SEO_DEFAULTS.KEYWORDS` → Business-specific keywords (comma-separated)

## Phase 3: Add Images & Assets

### 3.1 Image Assets

- [ ] Place logo at: `src/assets/images/logo.jpg` (replace reference in constants.ts)
- [ ] Place hero image at: `src/assets/images/hero.jpg`
- [ ] Place carousel image at: `src/assets/images/carousel.jpg`
- [ ] Optional: replace each `APP_SERVICES[].image` with service-specific imagery
- [ ] Optimize all images (compress to <1MB per image)

### 3.2 Favicon

- [ ] Replace `public/favicon.ico` with your brand favicon

## Phase 4: Website Configuration

### 4.1 Routing & Deployment

- [ ] Verify routes are clean URLs (not `/#/services`)
- [ ] Confirm `BrowserRouter` is in `src/app.tsx` (not `HashRouter`)
- [ ] Keep the generated route entrypoints and `404.html` inside `dist/` when deploying to static hosting

### 4.2 Sitemap & Robots

- [ ] Replace the placeholder-safe `public/sitemap.xml` with your production URLs
- [ ] Switch `public/robots.txt` from `Disallow: /` to a crawlable version only after:
  - `BUSINESS_INFO.URL` points to your real production domain
  - Contact data and business copy no longer use template placeholders
  - The sitemap contains your real public routes

### 4.3 HTML Template

- [ ] Verify `index.html` has correct base `<title>`
- [ ] Check `<meta name="description">` is descriptive
- [ ] Confirm no static canonical placeholder remains in `index.html`

## Phase 5: Testing & Validation

### 5.1 Local Testing

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

- [ ] Test all routes work without 404 errors
- [ ] Test on mobile device/responsive mode
- [ ] Test language switching (if multi-lingual)
- [ ] Test contact form submission
- [ ] Test all internal links

### 5.2 Build Testing

```bash
# Build for production
pnpm run build

# Preview production build locally
pnpm run preview
```

- [ ] Build completes without errors
- [ ] Preview shows all pages correctly
- [ ] Verify `dist/` folder was created
- [ ] Confirm `dist/` includes route folders and `404.html` after build

### 5.3 SEO Verification

- [ ] Each page has unique `<title>` tag (50-60 characters)
- [ ] Each page has `<meta name="description">` (120-160 characters)
- [ ] Check `<h1>` tag is present on each page
- [ ] Verify canonical links point to correct URLs
- [ ] Verify the template is `noindex, nofollow` until all placeholder data is replaced
- [ ] Check `robots.txt` is accessible at `yoursite.com/robots.txt`
- [ ] Check `sitemap.xml` is accessible at `yoursite.com/sitemap.xml`

## Phase 6: Deployment

- [ ] Deploy the generated `dist/` folder to your hosting provider
- [ ] Preserve the generated route entrypoint files and `404.html` in the deployed artifact
- [ ] Configure SPA rewrites if your hosting provider supports them, especially for any routes added beyond the template defaults
- [ ] Verify the production domain matches `BUSINESS_INFO.URL`
- [ ] Confirm all public routes load correctly after deployment

## Phase 7: Search Engine Submission

### 7.1 Google Search Console

- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add your domain property
- [ ] Submit your sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage

### 7.2 Bing Webmaster Tools

- [ ] Go to [Bing Webmaster Tools](https://www.bing.com/webmaster)
- [ ] Add your domain
- [ ] Submit sitemap

## Phase 8: Final Review Checklist

### Before Going Live

- [ ] All content is accurate and up-to-date
- [ ] No placeholder text remains
- [ ] All contact information is correct
- [ ] Social media links are correct
- [ ] Mobile design looks good
- [ ] All external links work
- [ ] Contact form works
- [ ] No console errors
- [ ] Google PageSpeed Insights score is good (>80)
- [ ] Mobile-friendly test passes

### After Going Live

- [ ] Monitor Google Search Console for indexing
- [ ] Check for crawl errors
- [ ] Monitor traffic and engagement
- [ ] Respond to inquiries quickly
- [ ] Update content regularly

---

## Troubleshooting

### Routes not working / 404 errors

- [ ] Ensure `BrowserRouter` is in `src/app.tsx`
- [ ] Confirm the deployed folder is `dist/` and includes the generated route entrypoint files plus `404.html`
- [ ] Configure rewrite rules for your hosting provider so SPA routes resolve to `index.html` when you add new routes not covered by the template generator

### Images not loading

- [ ] Check image paths in `constants.ts` match actual file locations
- [ ] Verify images are in `src/assets/images/`
- [ ] Check image file names are correct (case-sensitive)

### Translations not working

- [ ] Verify keys exist in both `en.json` and `es.json`
- [ ] Check JSON syntax is valid (use JSON validator)
- [ ] Restart dev server after changing translation files

### SEO issues

- [ ] Use [Google PageSpeed Insights](https://pagespeed.web.dev/) to check performance
- [ ] Use [SEO checklist tools](https://www.seobility.net/en/seocheck/) for on-page SEO
- [ ] Check Search Console for any warnings

---

## Quick Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

---

## Support & Resources

- **React Router Documentation:** https://reactrouter.com/
- **React Helmet Async:** https://github.com/starkwang/react-helmet-async
- **i18next Documentation:** https://www.i18next.com/
- **Tailwind CSS:** https://tailwindcss.com/
- **Hosting Provider Docs:** Use your platform's SPA routing / rewrite guide

---

**Last Updated:** 2026-05-05  
**Status:** Requires business configuration before deployment  
**Questions?** Contact your development team or refer to the audit report: `BASE-TEMPLATE-SEO-AUDIT.md`
