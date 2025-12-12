import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building modern, responsive websites with React, Next.js, and cutting-edge technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Creating cross-platform mobile applications with React Native and seamless user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and user experiences that delight and engage your audience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, 0],
    transition: {
      rotate: { duration: 0.5 },
      scale: { duration: 0.2 },
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What I Do
            </motion.h2>
            <motion.div
              className="w-16 h-0.5 bg-border"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Wrench className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are all the services that I provide to my clients. I Hope I offer
            the service that you are looking for. If you do not find something that
            you are looking for then please send me an{" "}
            <a href="mailto:hello@example.com" className="text-primary hover:underline">
              email
            </a>
            .
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-card border border-border transition-all duration-500 overflow-hidden h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.5), hsl(var(--primary) / 0.5))",
                    backgroundSize: "200% 200%",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Icon */}
                <motion.div
                  className="relative w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                  {/* Icon glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
