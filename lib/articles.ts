export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  tags: string[];
}

export const articlesData: Article[] = [
  {
    slug: "crafting-exceptional-user-experiences",
    title: "Crafting Exceptional User Experiences in Next-Gen Tech",
    category: "Design Architecture",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    image: "/images/HvEjI5nnCrtIvttqSWsyCuVM.jpg",
    excerpt:
      "How tactile feedback, spatial depth, and micro-interactions elevate consumer technology from functional to unforgettable.",
    author: {
      name: "Liam Alexander",
      role: "Lead Product Designer",
      avatar: "/images/i1HQmHKuaqVIiFDDbnxu3eSvDM.png",
    },
    tags: ["UI/UX", "Micro-Interactions", "Spatial Computing", "Design Systems"],
    content: [
      "In the rapidly evolving landscape of digital products and tactile consumer hardware, great user experience is no longer just about clean layouts—it is about tangible clarity and emotional resonance.",
      "When designing hardware rotary controls or fluid web interfaces, the tactile feedback curve dictates how intuitive the interaction feels. A micro-interaction that provides immediate physical or visual acknowledgment fosters cognitive ease.",
      "At Techora, we approach design with a 3D-first mentality. By modeling physical geometry and digital layout in parallel, we eliminate the friction between the screen and the physical object.",
      "Key takeaways for crafting unforgettable products:",
      "1. Prioritize tactile detents and acoustic feedback in mechanical interfaces.",
      "2. Reduce visual cognitive load with consistent typographic hierarchy.",
      "3. Use motion sparingly and deliberately to guide user intent rather than distract.",
    ],
  },
  {
    slug: "the-power-of-responsive-web-design",
    title: "The Power of High-Performance Responsive Web Engineering",
    category: "Web Engineering",
    date: "Nov 23, 2025",
    readTime: "6 min read",
    image: "/images/4cF7vTWqSD6k0W86ffeveQjsc2Q.png",
    excerpt:
      "Modern full-stack approaches to building sub-100ms page loads, responsive fluid typography, and edge caching.",
    author: {
      name: "Noah Reynolds",
      role: "Framer & Web Engineer",
      avatar: "/images/Bwqsulc9a1MtU5g4fle62Cp4E.png",
    },
    tags: ["Next.js", "Performance", "Frontend", "TailwindCSS"],
    content: [
      "The web has shifted towards fluid, ultra-responsive architectures that feel as instant as native desktop software. Users now demand zero latency, crisp typography across 4K displays and mobile phones, and buttery smooth 60fps animations.",
      "Utilizing Next.js server components and optimized streaming allows us to ship minimal JavaScript bundles while preserving rich interactive capabilities client-side.",
      "By combining TailwindCSS utilities with CSS custom properties and spring physics, we maintain strict visual consistency while keeping render overhead negligible.",
      "Best practices for modern frontend velocity:",
      "1. Adopt modular token systems for spacing and color schemes.",
      "2. Leverage modern image formats like WebP and AVIF with intrinsic aspect ratios.",
      "3. Offload compute-heavy animations to GPU-accelerated compositing layers.",
    ],
  },
  {
    slug: "mastering-ui-design-trends",
    title: "Mastering Modern UI Design Trends: A Deep Dive",
    category: "Visual Identity",
    date: "Dec 04, 2025",
    readTime: "4 min read",
    image: "/images/vss98kimC7Rm3BkWtOJ4E7PF0.png",
    excerpt:
      "Exploring dark mode brutalism, subtle glassmorphism, corner crosshair markers, and precision editorial typography.",
    author: {
      name: "Morgan Sterling",
      role: "Creative Director",
      avatar: "/images/t2IinwzJVpnMsudq7WYMD5Q.png",
    },
    tags: ["Brutalism", "Typography", "Glassmorphism", "Trends"],
    content: [
      "Visual trends in 2026 reflect a blend of futuristic minimalism and technical precision. Harsh borders are replaced with subtle luminous edges, while editorial serif italics introduce warmth to obsidian-dark canvases.",
      "Corner crosshairs and grid markers—borrowed from aerospace schematics and industrial CAD blueprints—ground the design with an aura of precision engineering.",
      "When executed correctly, this aesthetic communicates that every pixel was calculated and every component was crafted with deliberate intent.",
    ],
  },
  {
    slug: "the-ux-revolution-shaping-digital",
    title: "The UX Revolution Shaping Tomorrow's Digital Products",
    category: "Product Strategy",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    image: "/images/5GbIrngxJhowImxRpAWUx622xc.png",
    excerpt:
      "How intelligent AI assistance, adaptive interfaces, and multimodal inputs are reshaping digital workflows.",
    author: {
      name: "Sofia Chen",
      role: "Lead UI / UX Designer",
      avatar: "/images/xF67o9KL2pdUNFoIyhGVuR7nzI.png",
    },
    tags: ["AI UX", "Spatial", "Interaction Design", "Future Tech"],
    content: [
      "Traditional static dashboards are yielding to adaptive interfaces that anticipate user intent in real-time. Designing for AI requires creating transparent feedback loops and predictable affordances.",
      "As multimodal devices and spatial computing headsets enter everyday workflows, UI designers must think in three dimensions—factoring depth, lighting, and ambient presence.",
    ],
  },
  {
    slug: "tactile-computing-and-haptics",
    title: "Tactile Computing: The Future of Tangible Interfaces",
    category: "Industrial Tech",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    image: "/images/gEuLZWqISbowA6Z5TeEzISEsgs.jpg",
    excerpt:
      "Why physical rotary encoders, weighted mechanical sliders, and textured materials are experiencing a modern renaissance.",
    author: {
      name: "Ethan Vance",
      role: "Design Engineer",
      avatar: "/images/A4gp1uK8IPCXRgoVMvD6es6rXc.png",
    },
    tags: ["Hardware", "Haptics", "Industrial Design", "Electronics"],
    content: [
      "In an era where every surface is a glass screen, physical tactile feedback is the most precious differentiator. Mechanical dials with magnetic detents provide neuromuscular confirmation that a touchscreen simply cannot replicate.",
      "We design hardware products that celebrate physical materiality—anodized alloys, matte ceramic coatings, and precision bearings.",
    ],
  },
  {
    slug: "building-with-nextjs-and-webgl",
    title: "Building Sub-100ms Web Experiences with Next.js & WebGL",
    category: "Engineering",
    date: "Mar 02, 2026",
    readTime: "6 min read",
    image: "/images/32Ao0YOpynUtm9KTYphzi9oT2eQ.jpg",
    excerpt:
      "A technical walkthrough on rendering interactive 3D viewports at 60fps without sacrificing battery or bundle size.",
    author: {
      name: "Noah Reynolds",
      role: "Framer & Web Engineer",
      avatar: "/images/Bwqsulc9a1MtU5g4fle62Cp4E.png",
    },
    tags: ["WebGL", "Three.js", "Performance", "Frontend"],
    content: [
      "Interactive 3D on the web has notoriously suffered from heavy asset downloads and sluggish shader execution. Modern Three.js techniques, combined with Draco mesh compression and WebGPU shaders, have unlocked blazing speed.",
      "By lazy-loading 3D scenes only when scrolled into view and freezing compute loops during idle frames, we achieve high-fidelity 3D graphics on any device.",
    ],
  },
];
