# Techora Studio — Next-Gen Hardware, Digital Products & Brand Systems

> **Live Website**: [https://techorastudio.vercel.app](https://techorastudio.vercel.app)

A precision design and engineering studio website built with **Next.js 16 (App Router)**, **React 19**, **TailwindCSS 4**, and **Framer Motion**.

---

## 🌐 Live URL
- **Production Deployment**: [https://techorastudio.vercel.app](https://techorastudio.vercel.app)

---

## ⚡ About Techora Studio

**Techora** is an ultra-modern, high-performance studio engineered for spatial computing, industrial hardware design, physical-digital product development, and visionary brand systems. 

Combining industrial precision with reactive web physics, Techora bridges the gap between hardware engineering and fluid interactive digital experiences.

---

## ✨ Features & Capabilities

- **✨ Clean Light Aesthetic**: Crisp white canvas (`#ffffff` / `#f9f9fb`) structured with subtle architectural borders (`border-black/10`) and vibrant signature neon lime accents (`#B8FF4B`).
- **🪄 3D Perspective Mouse Physics (`Card3DTilt`)**: Dynamic cards tilt and scale in 3D response to cursor movement with fluid physics.
- **🎯 Contextual Cursor Follower (`CustomCursor`)**: Floating follower badge dynamically updates contextual text (*"Preview gallery"*, *"Explore Service"*, *"Read Review"*, *"Read Article"*, *"View Object"*) with a solid dark pill and `#B8FF4B` indicator.
- **💬 Interactive Testimonial Carousel**: Multi-item praise carousel with animated slide transitions, left/right arrow buttons, keyboard arrow navigation, active counter badge (`01 / 08`), and direct pagination dots.
- **📜 Scroll-Triggered Typography (`StudioStatement`)**: Word-by-word illuminated text reveal that highlights studio philosophy dynamically as the user scrolls.
- **⏱️ Animated Process Timeline (`ProcessTimeline`)**: 4-stage interactive engineering workflow with tab transitions and live project previews.
- **🧭 Fullscreen Navigation Drawer (`Navbar`)**: Floating header with glassmorphism, responsive navigation links, contact shortcut, and a mobile slide-out drawer.
- **♾️ Infinite Partner Marquee (`MarqueeLogos`)**: Continuous ticker showcasing world-class technology partners and hardware collaborators.
- **❓ Interactive Accordion FAQ (`FAQSection`)**: Expandable questions with rotating plus/minus toggles and smooth height animation.
- **⏰ Real-Time Studio Clock (`Footer`)**: Live local studio clock updating every second, quick sitemap links, and newsletter subscription form.

---

## 📁 Multi-Page Architecture (20 Static Routes)

| Route | Description |
| :--- | :--- |
| **`/` (Home)** | Complete studio landing experience: Hero showcase, partner ticker, philosophy statement, core capabilities, 4-stage process timeline, team showcase, client praise carousel, and FAQs. |
| **`/about`** | Studio ethos, mission statement, animated stat counters (`10X`, `150+`, `99.4%`), design principles, and leadership grid. |
| **`/gallery`** | Interactive 3D portfolio archive with category filters (*Hardware*, *Audio*, *Wearables*, *Gaming*) and full-screen lightbox modal previews with technical specifications. |
| **`/article`** | Design journal and tech articles with category filtering, reading time estimates, author profiles, and publication dates. |
| **`/article/[slug]`** | Dedicated article reader with dynamic table of contents, author metadata, rich layout, and related story recommendations. |
| **`/contact`** | Interactive project discovery form with multi-select service tags, budget range chips, and instant submission states. |
| **`/privacy-policy`** | Comprehensive privacy policy and data protection documentation. |
| **`/terms`** | Full terms of service and client agreement documentation. |
| **`/thank-you`** | Post-submission confirmation page with quick action links. |
| **`/_not-found`** | Custom 404 error page with quick return navigation. |

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router + Turbopack)](https://nextjs.org/)
- **UI Engine**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animation Engine**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Typography**: [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans), [Newsreader](https://fonts.google.com/specimen/Newsreader), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
techora/
├── app/
│   ├── about/              # About Studio page
│   ├── article/            # Journal & Article catalog
│   │   └── [slug]/         # Dynamic Article reader pages
│   ├── contact/            # Inquiry & Project intake form
│   ├── gallery/            # Interactive Portfolio & Lightbox
│   ├── privacy-policy/     # Privacy Policy
│   ├── terms/              # Terms of Service
│   ├── thank-you/          # Inquiry Confirmation page
│   ├── not-found.tsx       # Custom 404 Error page
│   ├── globals.css         # TailwindCSS v4 tokens & global styles
│   ├── layout.tsx          # Root Layout (Fonts, Navbar, Footer, CustomCursor)
│   ├── icon.svg            # Vector Favicon (Squircle with centered dot)
│   ├── icon.tsx            # Dynamic PNG Favicon generator
│   ├── apple-icon.tsx      # Dynamic Apple Touch Icon generator
│   └── page.tsx            # Studio Home page
├── components/
│   ├── Card3DTilt.tsx      # Reusable 3D perspective mouse physics wrapper
│   ├── CustomCursor.tsx    # Contextual cursor follower badge
│   ├── FAQSection.tsx      # Expandable FAQ accordion
│   ├── Footer.tsx          # Studio footer with live clock & sitemap
│   ├── HeroSection.tsx     # Cinematic hero banner with showcase cards
│   ├── MarqueeLogos.tsx    # Infinite partner brand ticker
│   ├── Navbar.tsx          # Header with mobile slide-out drawer
│   ├── ProcessTimeline.tsx # Interactive 4-stage engineering timeline
│   ├── ServicesSection.tsx # Studio capabilities & service cards
│   ├── StudioStatement.tsx # Scroll-illuminated typography statement
│   ├── TeamSection.tsx     # Leadership and engineering team grid
│   └── TestimonialsSection.tsx # Interactive praise carousel with arrow controls
├── public/
│   ├── favicon.svg         # SVG favicon
│   └── images/             # High-resolution portfolio & team assets
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18.17+** or later installed.

### 2. Installation
```bash
git clone https://github.com/Arafat-boss/Techora-Studio.git
cd techora
npm install
```

### 3. Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📄 License
© 2026 Techora Studio Inc. All rights reserved.
