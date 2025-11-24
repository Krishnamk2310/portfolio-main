import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "C++ Object Basics",
    issuer: "Coursera",
    color: "neon-cyan",
  },
  {
    title: "Operating Systems & Security",
    issuer: "Coursera",
    color: "neon-purple",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "Coursera",
    color: "neon-pink",
  },
  {
    title: "IBM Supervised Machine Learning",
    issuer: "IBM/Coursera",
    color: "neon-cyan",
  },
  {
    title: "MERN Web Development",
    issuer: "Udemy",
    color: "neon-purple",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Self Studied",
    color: "neon-pink",
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Award className="text-neon-cyan" size={40} />
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">
              Certifications
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 rounded-2xl glass-hover relative overflow-hidden group"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${cert.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Glow Effect */}
              <motion.div
                className={`absolute -top-1/2 -right-1/2 w-full h-full bg-${cert.color}/20 rounded-full blur-3xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />

              <div className="relative z-10 space-y-4">
                <motion.div
                  className={`inline-block p-3 bg-${cert.color}/10 rounded-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className={`text-${cert.color}`} size={24} />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${cert.color}`} />
                    {cert.issuer}
                  </p>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${cert.color} rounded-full`}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4 + index * 0.1,
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '50%',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto max-w-xs rounded-full"
        />
      </div>
    </section>
  );
};
