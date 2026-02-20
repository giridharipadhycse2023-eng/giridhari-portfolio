import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Wand2, SunMoon, Layout, PenTool, Camera } from "lucide-react";

const skills = [
  {
    icon: Camera,
    title: "Cinematography",
    description: "Creative direction for video production, capturing compelling visuals with cinematic composition.",
    level: 95,
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional cuts, transitions, and storytelling for reels, podcasts, and promotional content.",
    level: 93,
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Eye-catching animations, intros, lower thirds, and visual effects using After Effects.",
    level: 88,
  },
  {
    icon: SunMoon,
    title: "Color Grading",
    description: "Cinematic color correction and grading using DaVinci Resolve for the perfect mood and tone.",
    level: 90,
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Intuitive and visually engaging interface design using Figma and Adobe XD.",
    level: 85,
  },
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Logos, thumbnails, posters, and brand identities using Photoshop, Illustrator & Canva.",
    level: 87,
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">What I Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
