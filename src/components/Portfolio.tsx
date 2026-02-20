import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const categories = ["All", "Reels", "Cinematography", "Branding", "Thumbnails", "UI/UX"];

const projects = [
  {
    title: "khelaxy Brand Campaign",
    category: "Branding",
    description: "Designed creative visual content for digital campaigns and social media for Khelaxy, including motion graphics, thumbnails, and brand identity assets.",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    client: "Khelaxy",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  },
  {
    title: "Promotional Reel — Khelaxy",
    category: "Reels",
    description: "Produced high-quality short reels and podcast videos with strong storytelling and cinematic aesthetics, including color grading and sound design.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "After Effects"],
    client: "Khelaxy",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
  },
  {
    title: "NIST University — theMediaMovers",
    category: "Cinematography",
    description: "Led creative direction for video production, branding, and digital campaigns for theMediaMovers PR Cell community at NIST University.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "Photoshop"],
    client: "NIST University",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
  },
  {
    title: "Hidden Bharat with Biki — Channel Visuals",
    category: "Thumbnails",
    description: "Designed engaging thumbnails and channel art for the Hidden Bharat with Biki YouTube channel, driving visual consistency and CTR.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    client: "Hidden Bharat with Biki",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    title: "Institutional Event Coverage",
    category: "Cinematography",
    description: "Full event cinematography and post-production for NIST University institutional and community outreach events with engaging visual storytelling.",
    tools: ["DaVinci Resolve", "After Effects", "Adobe Premiere"],
    client: "NIST University",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    title: "App UI/UX Design",
    category: "UI/UX",
    description: "Designed intuitive and visually compelling user interfaces for mobile and web applications, focusing on user experience and brand consistency.",
    tools: ["Figma", "Adobe XD"],
    client: "Personal Project",
    image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=600&h=400&fit=crop",
  },
];

type Project = typeof projects[number];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
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
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={40} className="text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full aspect-video object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs text-primary uppercase tracking-wider mb-2">{selected.category}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{selected.title}</h3>
                <p className="text-muted-foreground mb-5">{selected.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <p className="text-foreground font-medium mb-1">Tools</p>
                    <div className="flex gap-1.5">
                      {selected.tools.map((t) => (
                        <span key={t} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Client / Platform</p>
                    <p className="text-muted-foreground">{selected.client}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
