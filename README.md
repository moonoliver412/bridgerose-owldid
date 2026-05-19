# Bridgerose Jewels Academy — Website

A static, multi-page website for **Bridgerose Jewels Academy**, a CBC-aligned
primary school in Utawala, Embakasi East, Nairobi County, Kenya. Built as plain
HTML, CSS and vanilla JavaScript — designed to be hosted on **GitHub Pages**
with no backend.

- **Live URL:** _to be added once deployed_
- **Structure spec:** `websturcture.md`
- **Visual system:** `design.md`

---

## Design

The look follows `design.md` (surface stacking, rounded nesting panels, floating
pill nav, scroll-reveal motion) with a custom palette and type pairing chosen for
an elegant, "rich" feel.

### Palette — four colours, four jobs

| Colour | Hex | Job |
|--------|-----|-----|
| White / paper | `#F3F1EC` · cards `#FBFAF7` | section backgrounds + cards |
| Grey | `#5B6170` | body text, captions, hairline borders |
| Navy blue | `#14233D` | dark sections + all headings |
| Maroon | `#7C2D3A` (rose tint `#CE9AA0` on navy) | the single accent — CTAs, the emphasis word, hover/active states |

Sections alternate light (paper) and dark (navy); maroon is never a section
background. The footer is deliberately separated from the section above it by a
visible gap of breathing room.

### Typography

- **Inter** — display headlines, body and UI.
- **Playfair Display Italic** — the wordmark and the emphasis word inside
  headlines, in maroon.
- **Fragment Mono** — tiny labels, eyebrows and meta.

Fonts load from Google Fonts.

---

## Folder structure

```
index.html  about.html  academics.html  admissions.html  fees.html
activities.html  transport.html  contact.html  gallery.html  404.html
assets/
  css/styles.css      all design tokens + components
  js/main.js          nav, scroll reveal, counters, FAQ, marquee, tabs, lightbox
  js/form.js          contact + inquiry form validation & submission
  img/logo.svg        brand mark   ·   img/favicon.svg  favicon
data/fees.json        canonical fee + transport data (for future updates)
robots.txt  sitemap.xml  design.md  websturcture.md  README.md
```

---

## Run locally

Any static file server works. From the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

or use the VS Code **Live Server** extension. Opening the files directly with
`file://` mostly works, but a server is recommended so paths and the contact
form behave correctly.

---

## Deploy (GitHub Pages)

1. Create a public repo (e.g. `bridgerose-jewels-academy`) and push these files
   to the `main` branch.
2. **Settings → Pages** → Source: *Deploy from a branch* → `main` → `/ (root)`.
3. Wait for the green build, then visit the published URL.
4. **Custom domain (optional):** add a `CNAME` file containing your domain and
   configure DNS as described in `websturcture.md` §9.

---

## Before going live — open items

These ship as clearly-marked placeholders and should be updated with real
content:

- **Contact forms** — open `assets/js/form.js` and replace
  `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` with a free key from
  [web3forms.com](https://web3forms.com). Until then forms validate and show a
  success message but do not deliver email.
- **Photos** — hero, programs, activities and gallery images are placeholders
  from Lorem Picsum. Swap them for real school photos in the respective `<img>`
  tags. Leadership cards use initials medallions until staff photos are ready.
- **Logo** — `assets/img/logo.svg` is a simple gem mark; replace with the
  school's official logo if one exists.
- **Copy to confirm with the school** — mission, vision, core values, school
  history / founding year, exact tagline, office hours, social media handles,
  the bank name for account `1297030311`, and the exact Google Maps pin for the
  campus (`contact.html`).
- **Canonical URLs / sitemap** — replace `https://bridgerosejewels.example/`
  in every page's `<link rel="canonical">`, the Open Graph tags, `sitemap.xml`
  and `robots.txt` with the real domain.

---

## School contact

- **Phone:** 0722 386 854 · 0701 236 047
- **Email:** bridgerosejewels@gmail.com
- **Location:** Utawala, Embakasi East, Nairobi County, Kenya
- **Pay fees:** KCB Paybill `522123`, Account `88346K + parent's names` ·
  Bank Account `1297030311`
