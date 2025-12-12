import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", color: "#E34F26", icon: "🌐" },
  { name: "CSS3", color: "#1572B6", icon: "🎨" },
  { name: "JavaScript", color: "#F7DF1E", icon: "⚡" },
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "Git", color: "#F05032", icon: "📦" },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: { name: string; color: string; icon: string };
  index: number;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 relative group"
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div
        className="px-6 py-4 rounded-xl bg-card border border-border transition-all duration-300 group-hover:border-primary/50"
        style={{
          boxShadow: `0 0 0 transparent`,
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-lg relative overflow-hidden"
            style={{ backgroundColor: `${skill.color}20` }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            {skill.icon}
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </motion.div>
          <span className="text-foreground font-medium whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      </div>

      {/* Hover tooltip */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-card border border-border text-xs text-foreground opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        {skill.name}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Skills Grid with infinite scroll effect */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: isPaused ? undefined : [0, -skills.length * 180],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{
                width: "fit-content",
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passe o mouse para pausar
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
