import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

const categories = ["All", "Podcast", "Reels", "Cinematography", "Branding", "Thumbnails", "UI/UX"];

type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  client: string;
  image: string;
  projectLink?: string; // ✅ universal link field
};

const projects: Project[] = [
  {
    title: "khelaxy Brand Campaign",
    category: "Branding",
    description:
      "Designed creative visual content for digital campaigns and social media for Khelaxy.",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    client: "Khelaxy",
    image: "src/assets/Picsart_25-12-11_15-34-22-076.jpg",
    projectLink: "https://your-brand-link.com",
  },
  {
    title: "Promotional Reel — Khelaxy",
    category: "Reels",
    description:
      "Produced high-quality short reels and podcast videos with strong storytelling and cinematic aesthetics.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "After Effects"],
    client: "Khelaxy",
    image: "src/assets/Picsart_25-12-11_15-34-22-076.jpg",
    projectLink:
      "https://drive.google.com/drive/folders/1YfnwrcI7g20QeAR36jBv5W0SklLU3Iyq?usp=drive_link",
  },
  {
    title: "NIST University — theMediaMovers",
    category: "Cinematography",
    description:
      "Led creative direction for video production and branding campaigns.",
    tools: ["DaVinci Resolve", "Adobe Premiere", "Photoshop"],
    client: "NIST University",
    image: "src/assets/Untitled (1615 x 2048 px).png",
    projectLink: "https://www.instagram.com/the_mediamovers?igsh=eDYwMG5ybzIxNm5x",
  },
  {
    title: "Hidden Bharat with Biki — Channel Visuals",
    category: "Thumbnails",
    description:
      "Designed engaging thumbnails and channel art for the Hidden Bharat with Biki YouTube channel, driving visual consistency and CTR.",
    tools: ["Photoshop", "Illustrator", "Canva"], 
    client: "Hidden Bharat with Biki", 
    image: "src/assets/WhatsApp Image 2026-01-23 at 3.43.28 PM.jpeg",
    projectLink: "https://www.youtube.com/@HiddenBharatwithBiki",
  },
  {
    title: "Hidden Bharat with Biki — Channel Visuals",
    category: "Thumbnails",
    description:
      "Designed engaging thumbnails and channel art for the Hidden Bharat with Biki YouTube channel, driving visual consistency and CTR.",
    tools: ["Photoshop", "Illustrator", "Canva"], 
    client: "Hidden Bharat with Biki", 
    image: "src/assets/Yellow and Black Varanasi India Travels YouTube Thumbnail.png",
    projectLink: "https://youtu.be/UqbET__fwgg?si=JF4htaLF8Tm4TiL8",
  },
  {
    title: "Hidden Bharat with Biki — Channel Visuals",
    category: "Thumbnails",
    description:
      "Designed engaging thumbnails and channel art for the Hidden Bharat with Biki YouTube channel, driving visual consistency and CTR.",
    tools: ["Photoshop", "Illustrator", "Canva"], 
    client: "Hidden Bharat with Biki", 
    image: "src/assets/Green and black Brush Strokes Creative YouTube Thumbnail.png",
    projectLink: "https://youtu.be/0oJoYmYEkX0?si=3QJIon3H79TJJF5U",
  },

  { title: "Institutional Event Coverage", 
    category: "Cinematography", 
    description: "Full event cinematography and post-production for NIST University institutional and community outreach events with engaging visual storytelling.", 
    tools: ["DaVinci Resolve", "After Effects", "Adobe Premiere"], 
    client: "NIST University", 
    image: "src/assets/sankalp-26.jpeg", 
    projectLink: "https://youtube.com/@nistuniversity?si=gp2bJHM9_AYBESuQ",
  },
  { title: "App UI/UX Design", 
    category: "UI/UX", 
    description: "Designed intuitive and visually compelling user interfaces for mobile and web applications, focusing on user experience and brand consistency.", 
    tools: ["Figma", "Adobe XD"], 
    client: "Personal Project", 
    image: "src/assets/ui:ux-design.webp", 
    projectLink: "",
  },
  {
  title: "NIST University Podcast — Editing & Production",
  category: "Podcast",
  description:
    "Edited and produced engaging podcast episodes for The University and MediaMovers, including multi-camera cuts, audio enhancement, color grading, and short-form social media clips. Focused on delivering clean storytelling, smooth transitions, and platform-optimized content for Instagram and YouTube.",
  tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition"],
  client: "The MediaMovers",
  image: "src/assets/NIST-University-Podcast-cover.jpg",
  projectLink: "https://youtube.com/playlist?list=PLZBFRWW8bsu911iJR6W4AMa4Yy_RXWkSp&si=mMfOzGIMDSYxLrFL",
},
  {
  title: "Podcast Video Editing & Production",
  category: "Podcast",
  description:
    "Edited and produced high-quality podcast videos for multiple clients, including multi-camera editing, audio enhancement, color grading, motion graphics, and short-form social media cuts. Focused on delivering engaging storytelling and platform-optimized content for YouTube, Instagram, and Reels.",
  tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
  client: "Multiple Clients",
  image: "src/assets/The Superfan Who Lived for Virat Kohli.png",
  projectLink: "https://drive.google.com/drive/folders/1lR43jE90phKPZCnI-z6C8nfYCyT_TQjz",
}


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

        {/* Heading */}
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

        {/* Filter */}
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
                onClick={() => setSelected(project)} // ✅ ALWAYS OPEN MODAL
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

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full aspect-video object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-xs text-primary uppercase mb-2">
                  {selected.category}
                </p>

                {/* 🔥 CLICKABLE TITLE */}
                {selected.projectLink ? (
                  <a
                    href={selected.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-display text-2xl font-bold text-foreground hover:text-primary transition"
                  >
                    {selected.title}
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {selected.title}
                  </h3>
                )}

                <p className="text-muted-foreground mt-3 mb-5">
                  {selected.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-secondary rounded text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* 🔥 View Project Button */}
                {selected.projectLink && (
                  <a
                    href={selected.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
