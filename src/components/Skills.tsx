import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "Docker", color: "#2496ED" },
  { name: "Figma", color: "#F24E1E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Git", color: "#F05032" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-16">
      <div className="container mx-auto px-4">
        {/* Skills Grid with infinite scroll effect */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;