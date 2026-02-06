# KochiPlaza Constructions - Testing & Verification Guide

## ✅ Pre-Launch Checklist

### 1. **Build Verification**

To verify the website builds correctly, run:

```bash
npm run dev
```

**Expected Result**: Development server starts on http://localhost:3000

**Note**: If you encounter PowerShell execution policy errors on Windows, run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

### 2. **Visual Verification**

Once the dev server is running, verify the following:

#### Homepage (/)
- [ ] H1 displays: "Best Construction Company in Kochi, Ernakulam, Kerala"
- [ ] Hero slider shows 5 construction services
- [ ] Navigation button shows "( Our Services )"
- [ ] Slider navigation shows "Previous Service" and "Next Service"
- [ ] Description text mentions KochiPlaza Constructions and Kerala districts

#### Footer
- [ ] Company name: "KochiPlaza Constructions"
- [ ] Tagline: "Trusted Construction Company in Kochi & Kerala"
- [ ] Primary office address displayed
- [ ] Branch office address displayed
- [ ] Phone number: 98951 69005 (clickable)
- [ ] Business hours: Monday - Saturday: 9:00 AM - 5:30 PM
- [ ] All 14 Kerala districts listed
- [ ] Social links: Facebook, Instagram, Call Us

#### Services (in slider and menu)
- [ ] Residential Construction - House Construction
- [ ] Commercial Construction - Commercial Buildings
- [ ] Turnkey Projects - Complete Solutions
- [ ] Renovation Services - Remodeling
- [ ] Interior Design - Interior Solutions

---

### 3. **SEO Verification**

#### View Page Source (Ctrl+U or Right-click → View Page Source)

Check for:

**Meta Tags**:
```html
<title>KochiPlaza Constructions | Best Construction Company in Kochi, Ernakulam, Kerala</title>
<meta name="description" content="KochiPlaza Constructions is a trusted construction company in Kochi, Ernakulam, Kerala offering residential, commercial & turnkey construction services across all Kerala districts...">
<meta name="keywords" content="construction company in Kochi, builders in Ernakulam, best construction company in Kerala...">
<meta name="geo.region" content="IN-KL">
<meta name="geo.placename" content="Kochi, Kerala">
```

**Structured Data** (JSON-LD):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["ConstructionCompany", "LocalBusiness"],
  "name": "KochiPlaza Constructions",
  "telephone": "+91-98951-69005",
  "address": [...],
  "areaServed": [...]
}
</script>
```

---

### 4. **Google Tools Verification**

#### A. Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your website URL
3. Verify "LocalBusiness" and "ConstructionCompany" schemas are detected
4. Check for zero errors

#### B. Mobile-Friendly Test
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter your website URL
3. Verify page is mobile-friendly
4. Check phone number is clickable

#### C. PageSpeed Insights
1. Go to: https://pagespeed.web.dev/
2. Enter your website URL
3. Check both Mobile and Desktop scores
4. Verify Core Web Vitals are in green

---

### 5. **Image SEO Verification**

Right-click on any image and select "Inspect" or "Inspect Element"

**Check for**:
- [ ] All images have descriptive `alt` attributes
- [ ] Alt text includes keywords like "KochiPlaza Constructions", "Kochi", "Kerala"
- [ ] Images have `title` attributes
- [ ] No images with empty or generic alt text (e.g., "image", "slide-1")

**Example**:
```html
<img 
  src="/assets/images/blobism.jpg" 
  alt="Residential Construction by KochiPlaza Constructions - House Construction in Kochi, Kerala" 
  title="Residential Construction - Best Construction Company in Kerala"
/>
```

---

### 6. **Accessibility Verification**

#### Heading Structure
- [ ] Only ONE H1 tag per page
- [ ] H1 contains primary keywords
- [ ] Proper heading hierarchy (H1 → H2 → H3 → H4)

#### Links
- [ ] Phone number is clickable (tel: link)
- [ ] All navigation links work
- [ ] Social media links open correctly

---

### 7. **Local SEO Verification**

#### Business Information Consistency
Verify the following information is EXACTLY the same everywhere:

**Business Name**: KochiPlaza Constructions

**Phone**: 98951 69005 (or +91-98951-69005)

**Primary Address**: 
4756+4P5 Constructions, NH66, Kavilnada, Koonammavu, Kochi, Kerala 683518

**Branch Address**: 
Near Zudio, Vallathol Padi, Vidhya Nagar Colony, Thrikkakara, Edappilly, Kochi, Kerala 682037

**Business Hours**: 
Monday - Saturday: 9:00 AM - 5:30 PM

---

### 8. **Keyword Verification**

Search the page source (Ctrl+F) for these keywords:

- [ ] "construction company in Kochi" - Should appear 5+ times
- [ ] "builders in Ernakulam" - Should appear 3+ times
- [ ] "Kerala" - Should appear 20+ times
- [ ] "Kochi" - Should appear 15+ times
- [ ] "Ernakulam" - Should appear 8+ times
- [ ] All 14 Kerala districts mentioned at least once

**Districts to verify**:
Kasaragod, Kannur, Wayanad, Kozhikode, Malappuram, Palakkad, Thrissur, Ernakulam, Idukki, Kottayam, Alappuzha, Pathanamthitta, Kollam, Thiruvananthapuram

---

### 9. **Browser Testing**

Test the website on:

- [ ] Google Chrome (Desktop)
- [ ] Mozilla Firefox (Desktop)
- [ ] Microsoft Edge (Desktop)
- [ ] Safari (if available)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

**Check for**:
- [ ] All animations work smoothly
- [ ] Images load correctly
- [ ] Phone number is clickable on mobile
- [ ] Text is readable on all screen sizes
- [ ] No layout breaks

---

### 10. **Production Build Test**

Before deploying, test the production build:

```bash
npm run build
npm start
```

**Verify**:
- [ ] Build completes without errors
- [ ] No console errors in browser
- [ ] All features work in production mode
- [ ] Images are optimized
- [ ] Metadata is present in production build

---

## 🔍 Google Search Console Setup (Post-Launch)

After deploying the website:

1. **Submit Sitemap**
   - Go to Google Search Console
   - Add property: https://kochiplazaconstructions.com
   - Submit sitemap: https://kochiplazaconstructions.com/sitemap.xml

2. **Request Indexing**
   - In Search Console, use "URL Inspection" tool
   - Enter homepage URL
   - Click "Request Indexing"

3. **Monitor Performance**
   - Check "Performance" tab weekly
   - Monitor impressions for target keywords
   - Track click-through rates

---

## 🗺️ Google Business Profile Setup

To maximize local SEO:

1. **Create/Claim Google Business Profile**
   - Go to: https://business.google.com
   - Add both office locations
   - Use EXACT same business information as website

2. **Add Details**:
   - Business name: KochiPlaza Constructions
   - Category: Construction Company
   - Phone: 98951 69005
   - Website: https://kochiplazaconstructions.com
   - Hours: Monday-Saturday, 9:00 AM - 5:30 PM
   - Service areas: All Kerala districts

3. **Add Photos**:
   - Office exterior/interior
   - Completed projects
   - Team photos
   - Logo

4. **Get Reviews**:
   - Ask satisfied clients for Google reviews
   - Respond to all reviews (positive and negative)

---

## 📊 Analytics Setup

Install Google Analytics 4:

1. Create GA4 property
2. Add tracking code to `layout.jsx`:

```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

**Track**:
- Page views
- Phone number clicks
- Service menu interactions
- Contact form submissions (if added)

---

## ✅ Final Pre-Launch Checklist

- [ ] All content verified
- [ ] SEO metadata present
- [ ] Structured data validated
- [ ] Images have proper alt text
- [ ] Phone numbers clickable
- [ ] Business hours correct
- [ ] Both addresses displayed
- [ ] All Kerala districts mentioned
- [ ] No broken links
- [ ] Mobile-friendly
- [ ] Fast loading speed
- [ ] No console errors
- [ ] Production build successful

---

## 🚀 Post-Launch Monitoring

**Week 1**:
- [ ] Check Google Search Console for crawl errors
- [ ] Verify structured data is detected
- [ ] Monitor site speed

**Week 2-4**:
- [ ] Track keyword rankings for "construction company in Kochi"
- [ ] Monitor Google Business Profile views
- [ ] Check for any 404 errors

**Monthly**:
- [ ] Review Google Analytics traffic
- [ ] Update content with new projects
- [ ] Add new photos to Google Business Profile
- [ ] Encourage customer reviews

---

**Last Updated**: 2026-02-05
**Website**: KochiPlaza Constructions
**Target**: Kochi, Ernakulam, Kerala
