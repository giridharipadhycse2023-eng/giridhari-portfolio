import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Palette, Monitor, Award } from "lucide-react";

const stats = [
  { icon: Film, value: "2+", label: "Years Experience" },
  { icon: Monitor, value: "5+", label: "Projects Delivered" },
  { icon: Palette, value: "4+", label: "Happy Clients" },
  { icon: Award, value: "1", label: "Award Won" },
];

const tools = [
  "DaVinci Resolve", "Adobe After Effects", "Adobe Premiere", "Photoshop",
  "Adobe Illustrator", "Figma", "Adobe XD", "Canva", "CorelDRAW",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Turning Ideas Into
            <br />
            <span className="text-gradient">Visual Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm <span className="text-foreground font-medium">Giridhari Padhy</span> — a multidisciplinary
              Visual Creator, Cinematographer, UI/UX Designer, and Digital Influencer based in Odisha, India.
              Currently pursuing B.Tech in Computer Science & Engineering at NIST University, Berhampur.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I combine cinematic vision with strategic digital design to craft emotionally engaging visuals,
              intuitive interfaces, and high-impact multimedia content. As the <span className="text-foreground font-medium">Lead Cinematographer</span> at
              theMediaMovers (PR Cell, NIST University) and a Designer & Video Editor at <span className="text-foreground font-medium">Khelaxy</span>,
              I'm dedicated to storytelling, brand growth, and meaningful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My work includes cinematic edits, motion graphics, reels, podcasts, social media campaigns,
              brand identity design, and UI/UX — helping clients stand out and grow their audience.
            </p>

            {/* Tools */}
            <div>
              <p className="text-sm text-foreground font-medium mb-3 uppercase tracking-wider">Tools I Use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card-hover p-6 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <stat.icon size={24} className="text-primary mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}

            {/* Award callout */}
            <div className="col-span-2 glass-card p-5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">🏆 Best Cinematographer</span>
                <br />
                NIST University — January 21, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
