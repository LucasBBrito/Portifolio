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

const Services = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What I Do
            </h2>
            <div className="w-16 h-0.5 bg-border" />
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are all the services that I provide to my clients. I Hope I offer
            the service that you are looking for. If you do not find something that
            you are looking for then please send me an{" "}
            <a href="mailto:hello@example.com" className="text-primary hover:underline">
              email
            </a>
            .
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 card-hover gradient-border">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;