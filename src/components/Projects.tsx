import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

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

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Where Code Meets </span>
            <span className="text-primary">Creativity</span>
            <span className="ml-2">💻</span>
            <Sparkles className="inline-block w-6 h-6 text-primary ml-2" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This is where I share the projects I've built, combining innovation with clean,
            efficient code. Every project is an opportunity to push boundaries and create
            something meaningful.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-border/50 hover:border-primary/30 transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      <span className="text-primary">{project.title.split(" ")[0]}</span>{" "}
                      <span className="text-foreground">
                        {project.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mb-6">
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live view <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Github Code <Github className="w-4 h-4" />
                      </motion.a>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preview placeholder */}
                  <div className="hidden md:flex items-center justify-center w-80 h-48 rounded-xl bg-card/50 border border-border/30 overflow-hidden">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;