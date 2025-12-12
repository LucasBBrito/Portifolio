import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to the newsletter.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-script text-3xl text-foreground mb-4">Your Name</h3>
            <p className="text-muted-foreground text-sm">
              Transforming ideas into reality through design and technology.
            </p>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📬</span>
              <h4 className="font-semibold text-foreground">Subscribe to Our Newsletter</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest updates right in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                required
              />
              <motion.button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="font-semibold text-foreground mb-4">Follow me on</h4>
            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
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
            © 2025 All rights reserved. Designed with{" "}
            <Heart className="inline-block w-4 h-4 text-primary fill-primary" /> using
            React & Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Developed By{" "}
            <a href="#" className="text-primary hover:underline">
              Your Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;