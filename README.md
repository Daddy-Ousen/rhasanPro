# Robiul Hasan — Portfolio Website (rhasan.pro)

Personal portfolio and technical showcase for **Robiul Hasan** — IT Support Engineer L2 & Service Desk Co-Leader exploring Systems Administration & Cloud Infrastructure roles.

Built with **Astro 5** and **Tailwind CSS** for near-zero shipped JavaScript, sub-second loads, and 100/100 Lighthouse performance.

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Astro](https://astro.build) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with custom design tokens
- **Typography:** Plus Jakarta Sans (human editorial hierarchy) + JetBrains Mono (precision telemetry metrics)
- **SEO & Social:** Open Graph, Twitter Cards, Schema.org `Person` JSON-LD, `robots.txt`, and automated `sitemap-index.xml`
- **Hosting:** [Vercel](https://vercel.com) (Static Edge Deployment)

---

## 📁 Project Structure

```
.
├── public/
│   ├── Robiul_Hasan_CV.pdf     # Resume PDF (replace with your final PDF)
│   ├── favicon.svg             # Minimalist SVG monogram favicon
│   ├── og-image.svg            # Open Graph social preview card
│   └── robots.txt              # SEO crawler instructions
├── src/
│   ├── components/
│   │   ├── Header.astro        # Sticky navigation with zero-flicker theme toggle
│   │   ├── Hero.astro          # Headline, live status pill, telemetry HUD, CTAs
│   │   ├── About.astro         # Enterprise background, MSP scope, career transition
│   │   ├── Experience.astro    # Techants, Cobait, and AQSBD work history
│   │   ├── Skills.astro        # 4 structured categories (Cloud, Infra, Ops, AI)
│   │   ├── HermesFeatured.astro# Hermes project callout linking to case study
│   │   ├── Certifications.astro# MD-102, MD-100, Python, Linux, BBA degree
│   │   ├── Contact.astro       # 1-click email copy, mailto CTA, LinkedIn/GitHub
│   │   └── Footer.astro        # Minimal footer
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout, SEO meta, JSON-LD Person schema
│   ├── pages/
│   │   ├── index.astro         # Main homepage
│   │   └── projects/
│   │       └── hermes.astro    # Deep-dive Hermes architecture case study
│   └── styles/
│       └── global.css          # Tailwind and custom theme variables
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
The site will run locally at `http://localhost:4321`.

### 3. Production Build & Static Preview
```bash
npm run build
npm run preview
```

---

## 📄 Updating the CV / Resume

The **"Download CV"** button on the header, hero, and contact section is wired to `/Robiul_Hasan_CV.pdf` (`public/Robiul_Hasan_CV.pdf`).

> [!IMPORTANT]
> To update your resume, simply copy your final PDF file to `public/Robiul_Hasan_CV.pdf` and redeploy.

---

## 🌐 Deploying to Vercel with Custom Domain (`rhasan.pro`)

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub: `git push origin main`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect Astro with zero configuration required.
4. Click **Deploy**.

### Option B: Deploy via Vercel CLI
```bash
npx vercel
```

### 🔗 Connecting Custom Domain `rhasan.pro`
1. In your Vercel Dashboard, navigate to **Project Settings → Domains**.
2. Add `rhasan.pro` and `www.rhasan.pro`.
3. In your DNS provider (e.g. Cloudflare, Namecheap, GoDaddy), add the following DNS records:
   - **Type A**: `@` &rarr; `76.76.21.21`
   - **Type CNAME**: `www` &rarr; `cname.vercel-dns.com`
4. Vercel will automatically issue and renew a free SSL certificate.

---

## 🛡️ License & Attributions
&copy; 2026 Robiul Hasan. All rights reserved.
