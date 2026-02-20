import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, TechFlow",
    text: "The video work exceeded all expectations. The cinematic quality and attention to detail transformed our brand presence completely. Truly world-class editing.",
  },
  {
    name: "Marcus Rivera",
    role: "YouTube Creator, 800K Subs",
    text: "My channel growth exploded after working together. The editing style, thumbnails, and overall visual identity set my content apart from everyone else in the niche.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, EcoThread",
    text: "From our brand documentary to social media content — every deliverable was polished, on-brand, and delivered ahead of schedule. A rare find in the creative space.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="container-tight max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Client <span className="text-gradient">Feedback</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-center relative"
        >
          <Quote size={40} className="text-primary/20 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 min-h-[100px]">
            "{testimonials[current].text}"
          </p>
          <p className="font-display text-foreground font-semibold">{testimonials[current].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
