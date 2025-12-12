import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-lg text-muted-foreground">Hey</span>
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="text-2xl"
            >
              👋
            </motion.span>
            <span className="text-lg text-muted-foreground">I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4"
          >
            Your Name
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground mb-2"
          >
            A passionate
          </motion.p>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold italic mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(330 80% 60%), hsl(280 80% 50%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            specialized in building stunning pixel-perfect interactive websites
            and applications.
          </motion.p>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative w-48 h-56 mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-lg" />
            <div className="w-full h-full rounded-lg bg-secondary border border-border flex items-center justify-center overflow-hidden">
              <div className="text-6xl">👨‍💻</div>
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary" />
          </motion.div>

          {/* Resume Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume <Download className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Work & Education Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Work & Education
            </h2>
            <div className="w-16 h-0.5 bg-border" />
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An overview of my professional experience and academic journey, showcasing
            the skills and knowledge I've gained along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  );
};

const Timeline = () => {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Junior Front-End Developer",
      type: "Full Time",
      company: "Tech Company",
      description:
        "Designing responsive websites, implementing Figma designs, collaborating on UI/UX, using React, Next.js, and Tailwind CSS.",
      side: "left",
    },
    {
      period: "2022 - 2024",
      title: "Computer Science Degree",
      type: "",
      company: "University Name",
      description:
        "Pursuing a degree in Computer Science, focused on building coding skills and software development.",
      side: "right",
    },
  ];

  return (
    <div className="relative mt-16 max-w-4xl mx-auto">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center gap-8 ${
              exp.side === "left" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${exp.side === "left" ? "text-right" : "text-left"}`}>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-accent/20 text-green-accent border border-green-accent/30 mb-2">
                {exp.period}
              </span>
              <h3 className="text-lg font-semibold text-primary">
                {exp.title}
                {exp.type && (
                  <span className="text-muted-foreground font-normal ml-2">
                    {exp.type}
                  </span>
                )}
              </h3>
              <h4 className="font-medium text-foreground mb-2">{exp.company}</h4>
              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </div>

            {/* Center dot */}
            <div className="relative z-10 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />

            {/* Empty space for opposite side */}
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;