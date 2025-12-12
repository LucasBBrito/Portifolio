import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Service", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "top-2" : "top-4"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-script text-2xl text-foreground hidden md:block mr-4"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Main Nav Container */}
          <motion.div
            className={`relative flex items-center gap-1 px-2 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border/50 transition-all duration-300 ${
              isScrolled ? "shadow-lg shadow-primary/5" : ""
            }`}
            style={{
              background: isScrolled
                ? "linear-gradient(135deg, hsl(220 20% 12% / 0.95), hsl(220 20% 10% / 0.95))"
                : "hsl(220 20% 12% / 0.8)",
            }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-primary/50 via-transparent to-accent/50 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Request a Call Button */}
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a <Phone className="w-4 h-4" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>

          {/* Ctrl+K Search Button */}
          <motion.button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/80 backdrop-blur-md border border-border/50 text-muted-foreground text-sm hover:text-foreground hover:border-primary/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xs">ctrl+k</span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-secondary/95 backdrop-blur-md border border-border/50 md:hidden"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;