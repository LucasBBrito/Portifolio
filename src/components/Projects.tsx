import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "DEVELOPER PORTFOLIO",
    description:
      "A sleek and responsive portfolio built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, and services with smooth animations.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "FRAMER-MOTION"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    title: "E-COMMERCE PLATFORM",
    description:
      "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.",
    tags: ["NEXTJS", "PRISMA", "POSTGRESQL", "STRIPE"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan/20 via-primary/10 to-transparent",
  },
  {
    title: "TASK MANAGEMENT APP",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
    tags: ["REACT", "FIREBASE", "TAILWIND", "DND-KIT"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-accent/20 via-cyan/10 to-transparent",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group"
    >
      <motion.div
        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-border/50 transition-all duration-500`}
        whileHover={{
          boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
        }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Spotlight effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15), transparent 40%)`,
          }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 p-6 md:p-8">
          {/* Content */}
          <div className="flex-1" style={{ transform: "translateZ(20px)" }}>
            <motion.h3
              className="text-xl md:text-2xl font-bold mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.1 }}
            >
              <span className="text-primary">{project.title.split(" ")[0]}</span>{" "}
              <span className="text-foreground">
                {project.title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h3>
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <motion.a
                href={project.liveUrl}
                className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Live view <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Github Code <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                </span>
              </motion.a>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 + tagIndex * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.3)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Preview placeholder */}
          <motion.div
            className="hidden md:flex items-center justify-center w-80 h-48 rounded-xl bg-card/50 border border-border/30 overflow-hidden"
            style={{ transform: "translateZ(40px)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-4">
              <motion.div
                className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <p className="text-xs text-muted-foreground">Project Preview</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">Where Code Meets </span>
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Creativity
            </motion.span>
            <span className="ml-2">💻</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="inline-block w-6 h-6 text-primary ml-2" />
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            This is where I share the projects I've built, combining innovation with clean,
            efficient code. Every project is an opportunity to push boundaries and create
            something meaningful.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
