import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "DevTogether – Collaborative Coding Platform",
    description: "Built a full-stack collaborative coding platform enabling developers to work together in real-time. Users can create custom or auto-generated room IDs using UUIDs, copy them easily, and start coding sessions instantly.",
    tech: ["React.js", "Tailwind CSS", "Shadcn/ui", "Node.js", "Express.js", "MongoDB", "Socket.io", "Monaco Editor", "UUID"],
    features: [
      "Real-time collaborative code editor",
      "Create custom or auto-generated room IDs via UUID",
      "Presence features with online status and typing indicators",
      "Syntax highlighting and multi-language support (4+ languages)",
    ],
    github: "https://github.com/Krishnamk2310/DevTogethers",
    live: "https://devstogether-2nml.onrender.com/",
    gradient: "from-neon-cyan to-neon-purple",
  },
  {
    title: "Roamly – AI Travel Planner",
    description: "Developed an AI-powered travel planning platform that generates personalized itineraries based on location, budget, duration, and number of travelers using Gemini AI.",
    tech: ["React.js", "Tailwind CSS", "Shadcn/ui", "Gemini AI", "Firebase Auth", "Google Maps API", "Google Places & Photos API"],
    features: [
      "Personalized itineraries using Gemini AI",
      "Hotel and place recommendations with geo-data",
      "Best time to travel and estimated costs",
      "Google Sign-In authentication via Firebase",
    ],
    github: "https://github.com/Krishnamk2310/Roamly-AI-Planner",
    live: "https://roamly-ai-planner.vercel.app/",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    title: "SyntaxSense AI – Intelligent Code Review System",
    description: "Developed an AI-powered code review platform that analyzes code for quality, performance, maintainability, and security. Supports multiple languages with context-aware suggestions.",
    tech: ["React.js", "Gemini AI", "Prismjs", "Node.js", "Express.js", "Tailwind CSS", "Markdown", "rehype-highlight"],
    features: [
      "Multi-language code analysis (Java, Python, JavaScript, etc.)",
      "Gemini AI integration for intelligent suggestions",
      "Syntax highlighting with Prismjs and Markdown",
      "Secure backend with Node.js/Express.js",
    ],
    github: "https://github.com/Krishnamk2310/SyntaxSense-AI",
    live: "https://syntaxsense-ai-frontend.onrender.com/",
    gradient: "from-neon-pink to-neon-cyan",
  },
  {
    title: "Netflix Clone – Streaming UI with Firebase & TMDB",
    description: "Developed a Netflix-inspired streaming platform using React.js with Firebase Authentication and TMDB API integration. Users can securely sign up, browse categorized movie lists, and watch trailers.",
    tech: ["React.js", "Firebase", "TMDB API", "JavaScript", "CSS"],
    features: [
      "Firebase Authentication for secure sign-up and login",
      "Dynamic movie data and trailers from TMDB API",
      "Responsive Netflix-style UI with featured banners",
      "Protected routes with session persistence",
    ],
    github: "https://github.com/Krishnamk2310/Netflix-clone",
    live: "https://netflix-clonemkm.vercel.app/",
    gradient: "from-neon-cyan to-neon-purple",
  },
  {
    title: "Fitnesxia – Modern Gym Website",
    description: "Designed and developed a responsive gym website with animated UI components using React, Tailwind CSS, and Framer Motion. Features smooth transitions, hover effects, and scroll-triggered animations.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "React Icons", "CSS Animations"],
    features: [
      "Fully responsive design with animated transitions",
      "Interactive elements with hover effects",
      "Animated page transitions between routes",
      "Dynamic trainer profiles with social links",
    ],
    github: "https://github.com/Krishnamk2310/Fitnesxia",
    live: "https://fitnesxia.vercel.app/",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    title: "Saiyans Planet",
    description: "Built a sleek and responsive gym website with a minimal UI focused on performance and accessibility. Integrated a BMI Calculator and backend contact form with email support.",
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "JavaScript", "Nodemailer"],
    features: [
      "BMI Calculator integration",
      "Toast notifications",
      "Backend contact form with email support",
      "Performance-optimized and accessible UI",
    ],
    github: "https://github.com/Krishnamk2310/Saiyans_Planet",
    gradient: "from-neon-pink to-neon-cyan",
  },
  {
    title: "Wellness - AI-Powered Disease Prediction System",
    description: "Engineered an AI-driven system to predict diseases based on user symptoms, providing personalized healthcare insights. Designed an interactive interface displaying disease name, suggested medications, and dietary restrictions.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "Flask", "REST API", "Bootstrap", "CSS", "JavaScript"],
    features: [
      "ML algorithms for predictive analytics",
      "Real-time medical data processing",
      "Interactive disease prediction interface",
      "Personalized health recommendations",
    ],
    github: "https://github.com/Krishnamk2310/WellNest",
    gradient: "from-neon-cyan to-neon-purple",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gradient mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -15, 
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 rounded-2xl glass-hover group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              />
              
              {/* Animated Glow on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
              />

              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-neon-cyan mt-1">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4 relative z-20">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-cyan/90 hover:to-neon-purple/90 text-background border-0 shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow pointer-events-auto cursor-pointer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.live ? 'flex-1' : 'w-full'} pointer-events-auto`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple hover:text-neon-purple shadow-lg shadow-neon-purple/10 hover:shadow-neon-purple/30 transition-all pointer-events-auto cursor-pointer"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
