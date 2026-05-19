# Bridgerose Jewels Academy — Website Structure

A static multi-page website for **Bridgerose Jewels Academy**, Utawala, Nairobi.
Designed to be hosted on **GitHub Pages**. This document covers the project
file structure and the content/sections each page should contain. Styling and
visual decisions live in `design.md`.

---

## 1. Tech & Hosting

- **Pages-compatible static site**: HTML + CSS + vanilla JS.
- **No backend.** For dynamic features (contact form, fee data) use:
  - **Forms** → Formspree / Getform / Web3Forms (free tiers work on Pages).
  - **Map** → Google Maps embed iframe (no API key needed for basic embed).
  - **Analytics** → Google Analytics / Plausible (optional).
- **Custom domain (optional)**: add a `CNAME` file with e.g. `bridgerosejewels.co.ke`.

---

## 2. Project File Structure

```
bridgerose-jewels-academy/
├── index.html               # Home
├── about.html               # About us + leadership
├── academics.html           # Programs / curriculum
├── admissions.html          # Enrollment process
├── fees.html                # Fee structure
├── activities.html          # Co-curricular activities
├── transport.html           # Transport routes & charges
├── contact.html             # Contact + map + form
├── gallery.html             # Optional photo gallery
├── 404.html                 # Not-found page
│
├── assets/
│   ├── css/
│   │   └── styles.css       # Main stylesheet (per design.md)
│   ├── js/
│   │   ├── main.js          # Nav toggle, scroll, shared logic
│   │   ├── fees.js          # Optional: render fees from data
│   │   └── form.js          # Contact form handler
│   ├── images/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── hero/            # Homepage hero photos
│   │   ├── staff/           # Leadership photos
│   │   ├── gallery/         # Gallery images
│   │   └── icons/           # SVG icons
│   └── fonts/               # Self-hosted fonts (optional)
│
├── data/
│   └── fees.json            # Optional: fees + transport as JSON
│
├── design.md                # Existing design guide
├── WEBSITE_STRUCTURE.md     # This file
├── README.md                # Project overview & deployment notes
├── CNAME                    # Optional: custom domain
├── robots.txt
└── sitemap.xml
```

### Shared elements (every page)

- **`<head>`**: meta title, description, og:image, favicon, link to `styles.css`.
- **Header / Nav**: logo + school name on the left; nav links on the right;
  hamburger on mobile. Active page highlighted.
- **Footer**: contact, quick links, payment info teaser, social icons,
  copyright.
- **Skip-to-content link** for accessibility.

---

## 3. Navigation

Primary nav (header):

`Home` · `About` · `Academics` · `Admissions` · `Fees` · `Activities` · `Transport` · `Contact`

Footer quick links can repeat the above plus: `Gallery`, `Privacy`.

---

## 4. Page-by-Page Content

### 4.1 `index.html` — Home

Purpose: first impression, quick orientation, push to **Admissions** and **Contact**.

Sections:

1. **Hero**
   - School name: *Bridgerose Jewels Academy*
   - Tagline (placeholder for client to confirm — suggestion: *"Nurturing
     brilliance in every child."*)
   - Two CTAs: **Apply Now** → `admissions.html`, **Contact Us** → `contact.html`
   - Hero image (school building / pupils — placeholder)

2. **Welcome / Intro**
   - 2–3 sentence intro: who we are, where we are (Utawala, Nairobi), what we
     offer (Playgroup through Grade 6, CBC-aligned).

3. **Why Choose Us** (4–6 cards)
   - CBC-aligned curriculum
   - Caring, qualified staff
   - French, Computer & Music from PP2
   - Extra-curriculars: Skating, Ballet, Karate/Taekwondo, Swimming
   - Reliable transport across Utawala & surrounding areas
   - Safe, supportive environment

4. **Programs Snapshot**
   - Three-card preview: *Early Years* (Playgroup, PP1, PP2), *Lower Primary*
     (Grade 1–3), *Upper Primary* (Grade 4–6). Each links to `academics.html`.

5. **Leadership Preview** (optional, 1 row)
   - 4 small cards for the leadership team, "Meet the Team →" to `about.html`.

6. **Stats / Highlights** (optional band)
   - e.g. years operating, no. of pupils, no. of activities — fill once
     confirmed with the client.

7. **Testimonials** (optional)
   - 2–3 short parent quotes (placeholders).

8. **CTA Banner**
   - "Enroll your child for the next term" → `admissions.html`.

---

### 4.2 `about.html` — About Us

Sections:

1. **Page banner** — "About Bridgerose Jewels Academy".
2. **Our Story** — short paragraph about the school's founding and ethos
   (placeholder — confirm with client).
3. **Mission** (placeholder).
4. **Vision** (placeholder).
5. **Core Values** — 4–6 short items (placeholder e.g. *Integrity, Excellence,
   Respect, Discipline, Creativity, Care*).
6. **Our Leadership** — 4 cards:
   - **Mr. Ogutu** — Managing Director
   - **Mrs. Ogutu** — Director
   - **Teacher Abigail** — Headteacher
   - **Teacher Yogesh** — Deputy Headteacher
   Each card: photo placeholder, name, title, short bio (1–2 sentences).
7. **Location snippet** — Utawala, Embakasi East Constituency, Nairobi County,
   with a "Get directions" link to `contact.html`.
8. **CTA** — "Visit the school" / "Contact us".

---

### 4.3 `academics.html` — Programs & Curriculum

Sections:

1. **Banner** — "Our Programs".
2. **Curriculum Overview** — short paragraph: aligned to the Kenyan
   Competency-Based Curriculum (CBC), holistic learning, etc.
3. **Class Levels** — 9 blocks/cards (or a tabbed layout), one per level:
   - Playgroup
   - PP1
   - PP2
   - Grade 1
   - Grade 2
   - Grade 3
   - Grade 4
   - Grade 5
   - Grade 6
   Each: short description, age range, key subjects, link to fees row.
4. **Specialised Subjects**
   - **French** — offered from PP2 onwards.
   - **Computer Studies** — offered from PP2 onwards.
   - **Music** — offered from PP2 onwards.
   (Note: PP2 → Grade 6 pay the Kshs 3,000 *French, Computer & Music* fee.)
5. **Learning Approach** — placeholder for client's pedagogy.
6. **CTA** — "Ready to enroll?" → `admissions.html`.

---

### 4.4 `admissions.html` — Admissions

Sections:

1. **Banner** — "Join Bridgerose Jewels Academy".
2. **Intro** — welcoming paragraph for prospective parents.
3. **Requirements** — checklist (confirm with client):
   - Copy of child's birth certificate
   - Recent passport-size photos
   - Previous school report (transfers)
   - Immunization card (Playgroup–PP2)
4. **Admission Process** — numbered steps:
   1. Inquire by phone or email
   2. Visit the school / take a tour
   3. Collect & submit application form
   4. Assessment / interview (where applicable)
   5. Pay term fees and receive joining instructions
5. **Term Calendar / When to Apply** — placeholder; admissions open throughout
   the year subject to availability.
6. **Inline Inquiry Form** — fields: Parent Name, Phone, Email, Child's Class /
   Age, Message. Submit via Formspree/Getform.
7. **CTA** — Call **0722386854** / **0701236047** or WhatsApp.

---

### 4.5 `fees.html` — Fee Structure

Sections:

1. **Banner** — "2026 Fee Structure (Per Term)".
2. **Intro** — one line: all amounts in Kenyan Shillings, payable per term.
3. **Main Fees Table** — responsive (stack to cards on mobile).

| Class     | Tuition | Meals | Exams | Maintenance | Motivation | Activities | French, Computer & Music | **Total** |
|-----------|---------|-------|-------|-------------|------------|------------|--------------------------|-----------|
| Playgroup | 4,000   | 4,000 | 500   | 500         | 200        | 300        | 0                        | **9,500** |
| PP 1      | 4,500   | 4,500 | 500   | 500         | 200        | 300        | 0                        | **10,500** |
| PP 2      | 4,500   | 4,500 | 500   | 500         | 200        | 300        | 3,000                    | **13,500** |
| Grade 1   | 5,000   | 4,600 | 500   | 500         | 200        | 300        | 3,000                    | **14,100** |
| Grade 2   | 5,000   | 4,600 | 500   | 500         | 200        | 300        | 3,000                    | **14,100** |
| Grade 3   | 5,000   | 4,600 | 500   | 500         | 200        | 300        | 3,000                    | **14,100** |
| Grade 4   | 5,500   | 5,100 | 500   | 500         | 200        | 300        | 3,000                    | **15,100** |
| Grade 5   | 5,500   | 5,100 | 500   | 500         | 200        | 300        | 3,000                    | **15,100** |
| Grade 6   | 5,500   | 5,100 | 500   | 500         | 200        | 300        | 3,000                    | **15,100** |

4. **Other Charges**
   - **Extra-Curricular Activities** — Kshs **1,500 per term**
     (Skating, Ballet/Modern Dance, Karate/Taekwondo).
   - **Swimming Classes** — Kshs **200 per lesson**.
   - **Grade 4, 5 & 6 Morning Remedials** — Kshs **1,500 per term**.

5. **Payment Details** — two payment options shown as side-by-side cards:

   **KCB Paybill**
   - Business No: **522123**
   - Account: **88346K** + parent's names

   **Bank Deposit**
   - Account: **1297030311**

6. **Note** — "Fees are subject to review. Please confirm with the office before
   making a deposit."

7. **CTA** — "Questions about fees? Contact us."

---

### 4.6 `activities.html` — Co-curricular & Special Programs

Sections:

1. **Banner** — "Activities & Enrichment".
2. **Intro** — short paragraph on holistic development.
3. **Activity Cards** (grid):
   - **Skating** — Kshs 1,500 / term
   - **Ballet / Modern Dance** — Kshs 1,500 / term
   - **Karate / Taekwondo** — Kshs 1,500 / term
   - **Swimming** — Kshs 200 / lesson
   - **French** — included in *French, Computer & Music* fee (PP2 +)
   - **Computer Studies** — included in *French, Computer & Music* fee (PP2 +)
   - **Music** — included in *French, Computer & Music* fee (PP2 +)
   - **Morning Remedials (Grade 4–6)** — Kshs 1,500 / term
   Each card: icon/image, short description, cost.
4. **Gallery teaser** (optional) — 3–4 photos linking to `gallery.html`.
5. **CTA** — "Sign your child up — talk to us."

---

### 4.7 `transport.html` — Transport

Sections:

1. **Banner** — "School Transport".
2. **Intro** — one paragraph: safe, reliable transport covering Utawala and
   neighbouring estates; charges are per term.
3. **Routes Table** (responsive):

| Route                | Charges Per Term (Kshs) |
|----------------------|-------------------------|
| Around Arizona       | 3,000                   |
| Shopping Mall        | 3,700                   |
| M.C                  | 5,000                   |
| Githunguri           | 4,000                   |
| Komarock             | 4,200                   |
| By Pass              | 5,000                   |
| Block 10 / 26        | 10,000                  |
| Benedicta, Mofarm    | 4,000                   |
| Mihang'o             | 4,500                   |
| Airways              | 6,000                   |
| Astrol               | 7,000                   |

4. **Notes**
   - Payments go to the school account (see `fees.html`).
   - Pickup and drop-off points are confirmed with the office on enrollment.
   - Route availability may vary depending on demand each term.

5. **CTA** — "Confirm your route — contact the office."

---

### 4.8 `contact.html` — Contact Us

Sections:

1. **Banner** — "Get in Touch".
2. **Contact details** (cards / icon list):
   - **Phone**: 0722386854 / 0701236047 (click-to-call on mobile)
   - **Email**: bridgerosejewels@gmail.com
   - **Location**: Utawala, Embakasi East, Nairobi County, Kenya
   - **Office hours**: placeholder (e.g. Mon–Fri, 8:00 am – 4:30 pm)
3. **Embedded Map** — Google Maps iframe centered on Utawala (confirm exact
   pin with the school; Utawala sits along the Nairobi Eastern Bypass).
4. **Contact Form** — Name, Email, Phone, Subject, Message. Posts to
   Formspree/Getform. Honeypot field for spam.
5. **Social Media** — placeholder icons (TikTok, Facebook are known; confirm
   handles with client).
6. **Payment Details** — repeat block from `fees.html` for convenience.

---

### 4.9 `gallery.html` — Gallery (optional but recommended)

Sections:

1. **Banner** — "Life at Bridgerose".
2. **Image grid** — masonry or 3-column grid, lightbox on click.
3. **Categories / filters** (optional): Classrooms, Events, Activities, Sports.
4. **CTA** — "Want to see in person? Book a visit." → `contact.html`.

---

### 4.10 `404.html` — Not Found

- Friendly heading, short message, "Back to home" button. Required so GitHub
  Pages serves a branded 404 instead of the default.

---

## 5. Shared Components Detail

### Header / Nav

- Logo + "Bridgerose Jewels Academy" wordmark (left).
- Nav links (right): Home, About, Academics, Admissions, Fees, Activities,
  Transport, Contact.
- Active page is visually marked.
- Mobile: hamburger toggles a full-width drawer.
- Tiny top utility bar (optional): phone numbers + email, hidden on mobile.

### Footer

Three or four columns:

1. **Brand**: logo, one-line tagline, address.
2. **Quick links**: same as nav + Gallery.
3. **Contact**: phones, email, hours.
4. **Pay fees**: KCB Paybill 522123 (Acc 88346K + names), Bank Acc 1297030311.

Bottom row: copyright `© 2026 Bridgerose Jewels Academy` + social icons.

---

## 6. Optional `data/fees.json`

If you want to render fees from JSON (easier to update each term):

```json
{
  "year": 2026,
  "term_label": "Per Term",
  "currency": "Kshs",
  "columns": [
    "Tuition", "Meals", "Exams", "Maintenance",
    "Motivation", "Activities", "French, Computer & Music", "Total"
  ],
  "classes": [
    { "name": "Playgroup", "values": [4000, 4000, 500, 500, 200, 300, 0, 9500] },
    { "name": "PP 1",      "values": [4500, 4500, 500, 500, 200, 300, 0, 10500] },
    { "name": "PP 2",      "values": [4500, 4500, 500, 500, 200, 300, 3000, 13500] },
    { "name": "Grade 1",   "values": [5000, 4600, 500, 500, 200, 300, 3000, 14100] },
    { "name": "Grade 2",   "values": [5000, 4600, 500, 500, 200, 300, 3000, 14100] },
    { "name": "Grade 3",   "values": [5000, 4600, 500, 500, 200, 300, 3000, 14100] },
    { "name": "Grade 4",   "values": [5500, 5100, 500, 500, 200, 300, 3000, 15100] },
    { "name": "Grade 5",   "values": [5500, 5100, 500, 500, 200, 300, 3000, 15100] },
    { "name": "Grade 6",   "values": [5500, 5100, 500, 500, 200, 300, 3000, 15100] }
  ],
  "extra_charges": [
    { "item": "Extra-Curricular Activities (Skating, Ballet/Modern Dance, Karate/Taekwondo)", "amount": 1500, "unit": "per term" },
    { "item": "Swimming Classes", "amount": 200, "unit": "per lesson" },
    { "item": "Grade 4, 5 & 6 Morning Remedials", "amount": 1500, "unit": "per term" }
  ],
  "transport": [
    { "route": "Around Arizona",    "term_fee": 3000 },
    { "route": "Shopping Mall",     "term_fee": 3700 },
    { "route": "M.C",               "term_fee": 5000 },
    { "route": "Githunguri",        "term_fee": 4000 },
    { "route": "Komarock",          "term_fee": 4200 },
    { "route": "By Pass",           "term_fee": 5000 },
    { "route": "Block 10 / 26",     "term_fee": 10000 },
    { "route": "Benedicta, Mofarm", "term_fee": 4000 },
    { "route": "Mihang'o",          "term_fee": 4500 },
    { "route": "Airways",           "term_fee": 6000 },
    { "route": "Astrol",            "term_fee": 7000 }
  ],
  "payment": {
    "kcb_paybill": { "business_no": "522123", "account": "88346K + names" },
    "bank_deposit": { "account": "1297030311" }
  }
}
```

`assets/js/fees.js` reads this and renders the tables on `fees.html` and
`transport.html`.

---

## 7. SEO & Metadata

Each page should have:

- `<title>{Page} | Bridgerose Jewels Academy</title>`
- `<meta name="description" content="...">` — page-specific summary.
- `<meta property="og:title" / "og:description" / "og:image" / "og:url">`.
- `<link rel="canonical" href="...">`.
- A single `<h1>` per page.
- Descriptive `alt` text on every image.

Add **Schema.org `EducationalOrganization`** JSON-LD on `index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Bridgerose Jewels Academy",
  "telephone": ["+254722386854", "+254701236047"],
  "email": "bridgerosejewels@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Utawala",
    "addressRegion": "Nairobi County",
    "addressCountry": "KE"
  }
}
```

Also add `sitemap.xml` listing all pages and a simple `robots.txt` allowing
all crawlers.

---

## 8. Accessibility Checklist

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Color contrast meets WCAG AA (see `design.md`).
- Keyboard navigable; visible focus styles.
- `alt` text on all images; decorative images use `alt=""`.
- Form labels tied to inputs; clear error messages.
- Skip-to-content link at the top of each page.

---

## 9. Deployment (GitHub Pages)

1. Create a public repo named `bridgerose-jewels-academy` (or
   `<username>.github.io` if hosting at the root).
2. Push the project files to the `main` branch.
3. **Settings → Pages**: set source to `Deploy from a branch` → `main` → `/ (root)`.
4. Wait for the green build, visit `https://<username>.github.io/bridgerose-jewels-academy/`.
5. **Custom domain (optional)**: add a `CNAME` file with the chosen domain
   (e.g. `bridgerosejewels.co.ke`) and configure DNS:
   - `A` records pointing to GitHub Pages IPs, or
   - `CNAME` record on a subdomain pointing to `<username>.github.io`.
6. Enable **Enforce HTTPS** once the cert is issued.

---

## 10. README.md outline

The repo README should briefly cover:

- Project name and one-line description.
- Live URL.
- Folder structure (mirroring section 2 above).
- How to run locally (e.g. `npx serve .` or VS Code Live Server).
- How to deploy (section 9).
- Contact info for the school (so future maintainers know who to call).

---

## 11. Open items to confirm with the school

- Mission, vision, core values copy.
- School history / founding year.
- Exact tagline.
- Office hours.
- Social media handles (TikTok confirmed; Facebook page exists — confirm
  active handle).
- Final photos: school building, classrooms, staff, activities, gallery.
- Bank name for the `1297030311` account (KCB, Equity, etc.) so it can be
  labelled clearly.
- Exact Google Maps pin for the campus.