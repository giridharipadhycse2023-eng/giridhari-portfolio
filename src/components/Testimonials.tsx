import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gopala Krusna Sahu",
    role: "Founder, Khelaxy",
    text: "From thumbnail design to final video delivery, everything was professional and on time. His creativity gives brands a premium identity. Our engagement increased by 3x after his reels.",
  },
  {
    name: "Manas Pradhan",
    role: "Content Creator",
    text: "Giridhari has an exceptional eye for storytelling. His edits are not just videos — they are emotional experiences",
  },
  {
    name: "Mr. Pitambar Sahu",
    role: "Digital marketing manager, NIST University",
text: "This looks amazing.\nGiridhari handled our event highlights, creative videos, cinematography, and podcast edits with outstanding professionalism."  },
  {
    name: "PD MEGGHA",
    role: "VLOGGER, 32.8K followers",
    text: "Working alongside Giridhari in the MediaMover community has been an incredible experience. His cinematic editing style and creative vision always elevate our content to the next level."
  }
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
