import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import giridhariPhoto from "@/assets/giridhari-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — Text & Buttons */}
          <div className="flex flex-col items-start text-left order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-5"
            >
              Graphic Designer & UI/UX 
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-foreground mb-5"
            >
              Giridhari
              <br />
              <span className="text-gradient">Padhy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed"
            >
              Combining cinematic vision with strategic digital design to craft emotionally
              engaging visuals, intuitive interfaces, and high-impact multimedia content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#portfolio"
                className="group flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Play size={18} />
                View My Work
              </a>
              <a
                href="src/assets/GIRIDHARI-PADHY-Resume.jpg"
                className="flex items-center gap-2 px-8 py-3.5 border border-border/50 text-foreground font-medium rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Hire Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Cinematic Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end order-1 md:order-2"
          >
            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl scale-90 opacity-60" />

            {/* Photo frame */}
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Decorative corner lines */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-lg z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-lg z-10" />

              {/* Subtle outer ring */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 z-10 pointer-events-none" />

              {/* Main image */}
              <img
                src={giridhariPhoto}
                alt="Giridhari Padhy"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl shadow-background/80"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />

              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent rounded-b-2xl" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-5 -left-5 glass-card px-4 py-3 flex items-center gap-3 shadow-xl"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Available for Work</p>
                  <p className="text-[10px] text-muted-foreground">Freelance & Collabs</p>
                </div>
              </motion.div>

              {/* Award badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-5 -right-5 glass-card px-3 py-2 text-center shadow-xl"
              >
                <p className="text-lg font-bold text-primary">🏆</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Best<br />Cinematographer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
