import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Podcast",
  "Reels",
  "Cinematography",
  "Branding",
  "Thumbnails",
  "UI/UX",
];

type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  client: string;
  image: string;
  projectLink?: string;
};

const projects: Project[] = [
  {
    title: "Khelaxy Brand Campaign",
    category: "Branding",
    description:
      "Designed creative visual content for digital campaigns and social media for Khelaxy.",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    client: "Khelaxy",
    image: "/images/khelaxy-brand.jpg",
    projectLink: "https://your-brand-link.com",
  },
  {
    title: "Promotional Reel — Khelaxy",
    category: "Reels",
    description:
      "Produced high-quality short reels and podcast videos with strong storytelling and cinematic aesthetics.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "After Effects"],
    client: "Khelaxy",
    image: "/images/khelaxy-brand.jpg",
    projectLink:
      "https://drive.google.com/drive/folders/1YfnwrcI7g20QeAR36jBv5W0SklLU3Iyq",
  },
  {
    title: "NIST University — theMediaMovers",
    category: "Cinematography",
    description:
      "Led creative direction for video production and branding campaigns.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "Photoshop"],
    client: "NIST University",
    image: "/images/nist-cinematography.png",
    projectLink:
      "https://www.instagram.com/the_mediamovers",
  },
  {
    title: "Hidden Bharat with Biki — Thumbnail 1",
    category: "Thumbnails",
    description:
      "Designed engaging thumbnails and channel art for the Hidden Bharat with Biki YouTube channel.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    client: "Hidden Bharat with Biki",
    image: "/images/hiddenbharat-thumb1.jpg",
    projectLink: "https://www.youtube.com/@HiddenBharatwithBiki",
  },
  {
    title: "Hidden Bharat with Biki — Thumbnail 2",
    category: "Thumbnails",
    description:
      "Created visually compelling thumbnail with high CTR design strategy.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    client: "Hidden Bharat with Biki",
    image: "/images/hiddenbharat-thumb2.png",
    projectLink: "https://youtu.be/UqbET__fwgg",
  },
  {
    title: "Hidden Bharat with Biki — Thumbnail 3",
    category: "Thumbnails",
    description:
      "Bold color grading and typography-based YouTube thumbnail design.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    client: "Hidden Bharat with Biki",
    image: "/images/hiddenbharat-thumb3.png",
    projectLink: "https://youtu.be/0oJoYmYEkX0",
  },
  {
    title: "Institutional Event Coverage",
    category: "Cinematography",
    description:
      "Full event cinematography and post-production for institutional events.",
    tools: ["DaVinci Resolve", "After Effects", "Adobe Premiere"],
    client: "NIST University",
    image: "/images/sankalp-26.jpeg",
    projectLink: "https://youtube.com/@nistuniversity",
  },
  {
    title: "App UI/UX Design",
    category: "UI/UX",
    description:
      "Designed intuitive and visually compelling user interfaces for mobile and web applications.",
    tools: ["Figma", "Adobe XD"],
    client: "Personal Project",
    image: "/images/ui-ux-design.webp",
  },
  {
    title: "NIST University Podcast — Editing & Production",
    category: "Podcast",
    description:
      "Edited and produced engaging podcast episodes including multi-camera cuts and social media clips.",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition"],
    client: "The MediaMovers",
    image: "/images/nist-podcast.jpg",
    projectLink:
      "https://youtube.com/playlist?list=PLZBFRWW8bsu911iJR6W4AMa4Yy_RXWkSp",
  },
  {
    title: "Podcast Video Editing & Production",
    category: "Podcast",
    description:
      "Edited and produced high-quality podcast videos with motion graphics and audio enhancement.",
    tools: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Audition",
    ],
    client: "Multiple Clients",
    image: "/images/podcast-virat.png",
    projectLink:
      "https://drive.google.com/drive/folders/1lR43jE90phKPZCnI-z6C8nfYCyT_TQjz",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(project)}
                className="glass-card-hover overflow-hidden cursor-pointer group"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={40} className="text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;