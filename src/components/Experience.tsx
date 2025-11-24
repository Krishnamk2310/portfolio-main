import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Operations Intern",
    company: "SpringWorks",
    period: "September 2025",
    location: "Remote",
    points: [
      "Processed 140+ BGV emails daily with high accuracy",
      "Worked with Slack, Zoho, Google Sheets, and SpringVerify",
      "Maintained exceptional attention to detail",
      "Improved workflow efficiency through process optimization",
    ],
    color: "neon-cyan",
  },
  {
    type: "work",
    title: "Summer Trainee",
    company: "Hindustan Aeronautics Limited (HAL)",
    period: "June 2025",
    location: "India",
    points: [
      "Gained exposure in aircraft assembly and quality assurance",
      "Participated in NDT and engine inspection processes",
      "Worked with ERP systems and IT workflows",
      "Learned precision engineering and documentation standards",
    ],
    color: "neon-purple",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Bennett University",
    period: "2022 - 2026",
    cgpa: "CGPA: 8.4/10",
    color: "neon-cyan",
  },
  {
    degree: "Class XII",
    institution: "Vibgyor High International School",
    period: "2021",
    cgpa: "90%",
    color: "neon-purple",
  },
  {
    degree: "Class X",
    institution: "Vibgyor High International School",
    period: "2019",
    cgpa: "94%",
    color: "neon-pink",
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-gradient mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-3xl font-bold text-neon-cyan mb-8 flex items-center gap-3">
              <Briefcase size={32} />
              Work Experience
            </h3>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-neon-cyan before:to-neon-purple">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-6 md:p-8 rounded-2xl ml-12 relative before:content-[''] before:absolute before:-left-[3.25rem] before:top-8 before:w-4 before:h-4 before:bg-neon-cyan before:rounded-full before:border-4 before:border-background"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-xl text-neon-cyan">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">{exp.period}</p>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-neon-purple mt-1">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-neon-purple mb-8 flex items-center gap-3">
              <GraduationCap size={32} />
              Education
            </h3>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-neon-purple before:to-neon-pink">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="glass-card p-6 md:p-8 rounded-2xl ml-12 relative before:content-[''] before:absolute before:-left-[3.25rem] before:top-8 before:w-4 before:h-4 before:bg-neon-purple before:rounded-full before:border-4 before:border-background"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-neon-purple">{edu.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p className="text-foreground font-semibold">{edu.cgpa}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
