import { motion } from "framer-motion";
import { Linkedin, Heart, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:lucasbbrito8@gmail.com", label: "Email", color: "hover:text-primary hover:border-primary/50" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/lucasbbritodev/", label: "LinkedIn", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50" },
    { icon: MessageCircle, href: "https://wa.me/5582996223988", label: "WhatsApp", color: "hover:text-[#25D366] hover:border-[#25D366]/50" },
  ];

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-script text-3xl text-foreground mb-4">Lucas Barros</h3>
            <p className="text-muted-foreground text-sm">
              Transformando ideias em realidade através de design e tecnologia.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-right"
          >
            <h4 className="font-semibold text-foreground mb-4">Entre em contato</h4>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className={`w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 Todos os direitos reservados. Desenvolvido com{" "}
            <Heart className="inline-block w-4 h-4 text-primary fill-primary" /> usando
            React & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Desenvolvido por{" "}
            <a href="#" className="text-primary hover:underline">
              Lucas Barros
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
