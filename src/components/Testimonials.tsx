import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mr. Pitambar Sahu",
    role: "Digital Marketing Manager, NIST University",
    text: "This looks amazing. Giridhari handled our event highlights, creative videos, cinematography, and podcast edits with outstanding professionalism.",
  },
  {
    name: "PD MEGGHA",
    role: "VLOGGER, 32.8K Followers",
    text: "Working alongside Giridhari in the MediaMover community has been an incredible experience. His cinematic editing style and creative vision always elevate our content to the next level.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-black text-white text-center" aria-label="Testimonials">
      <h2 className="text-4xl font-bold mb-10">What Clients Say</h2>

      <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg leading-relaxed mb-6">
          "{testimonials[current].text}"
        </p>
        <h3 className="text-xl font-semibold">
          {testimonials[current].name}
        </h3>
        <p className="text-gray-400">
          {testimonials[current].role}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;