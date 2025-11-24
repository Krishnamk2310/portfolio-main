import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Dumbbell, Trophy, Target } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
  { icon: Code2, text: "300+ Problems Solved", color: "text-neon-cyan" },
  { icon: Trophy, text: "CGPA 8.4/10", color: "text-neon-purple" },
  { icon: Target, text: "MERN Developer", color: "text-neon-pink" }, 
  { icon: Dumbbell, text: "Gym Enthusiast", color: "text-neon-cyan" },
];


  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-12 text-center">
            About Me
          </h2>

          <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6 relative overflow-hidden group">
            {/* Animated Corner Accents */}
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-cyan"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-purple"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            />

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
            >
              I am a final-year <span className="text-neon-cyan font-semibold">B.Tech CSE student</span> at{" "}
              <span className="text-neon-purple font-semibold">Bennett University</span> with a strong
              foundation in Full Stack Development, Web Technologies, and Data Structures & Algorithms.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
            >
              I've solved <span className="text-neon-cyan font-semibold">300+ coding problems</span> across
              platforms like LeetCode, GFG, and Coding Ninjas, enhancing my problem-solving and algorithmic
              mindset.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            >
              I'm passionate about building{" "}
              <span className="text-neon-purple font-semibold">efficient, scalable, AI-powered applications</span>{" "}
              that solve real-world problems.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
            >
              Also a <span className="text-neon-pink font-semibold">gym enthusiast</span>—bringing discipline,
              consistency, and a growth mindset into my work.
            </motion.p>
          </div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center glass-hover"
                whileHover={{ scale: 1.05, rotate: 2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <item.icon className={`${item.color} mx-auto mb-3`} size={32} />
                <p className="text-sm font-medium text-foreground/80">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
