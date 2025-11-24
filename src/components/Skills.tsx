import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML",
      "CSS"
    ],
    color: "neon-cyan",
  },
  {
    title: "Frameworks",
    skills: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    color: "neon-purple",
  },
  {
    title: "Libraries",
    skills: [
      "Bootstrap",
      "Redux Toolkit",
      "Prismjs",
      "rehype-highlight"
    ],
    color: "neon-pink",
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA"
    ],
    color: "neon-cyan",
  },
  {
    title: "Other Skills",
    skills: [
      "Code Reviews",
      "Team Collaboration",
      "Leadership",
      "Communication"
    ],
    color: "neon-purple",
  },
];


export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gradient mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Technical Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, hsl(var(--${category.color})) 0%, transparent 50%, hsl(var(--${category.color})) 100%)`,
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h3 className={`text-2xl font-bold text-${category.color} mb-6`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 bg-${category.color}/10 border border-${category.color}/30 rounded-full text-sm font-medium hover:bg-${category.color}/20 transition-colors cursor-default`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Orbit Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
          <motion.div
            className="absolute inset-0 border border-neon-cyan/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 border border-neon-purple/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-16 border border-neon-pink/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
};
