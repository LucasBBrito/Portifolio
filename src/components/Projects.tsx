import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string | null;
  github: string | null;
  live: string | null;
}

const gradients = [
  "from-primary/20 via-accent/10 to-transparent",
  "from-cyan/20 via-primary/10 to-transparent",
  "from-green-accent/20 via-cyan/10 to-transparent",
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} border border-border/50 transition-all duration-300`}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px hsl(var(--primary) / 0.25)"
            : "0 0 0 0 transparent",
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border gradient - only on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: isHovered ? ["200% 0%", "-200% 0%"] : "200% 0%",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
        />

        {/* Spotlight effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 40%)`,
          }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 p-6 md:p-8">
          {/* Content */}
          <div className="flex-1">
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
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    Ver ao vivo <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </span>
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    Código Github <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </span>
                </motion.a>
              )}
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              {project.techs.map((tag, tagIndex) => (
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
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-4">
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center"
                  animate={isHovered ? {
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <p className="text-xs text-muted-foreground">Preview do Projeto</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
            <span className="text-foreground">Onde Código Encontra </span>
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Criatividade
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
            Aqui compartilho os projetos que construí, combinando inovação com código
            limpo e eficiente. Cada projeto é uma oportunidade de ultrapassar limites
            e criar algo significativo.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="text-center text-muted-foreground py-10">
              Nenhum projeto encontrado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
