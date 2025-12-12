import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "services", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
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
  const navItems = [{
    name: "Início",
    href: "#home"
  }, {
    name: "Serviços",
    href: "#services"
  }, {
    name: "Projetos",
    href: "#projects"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return <>
      <motion.nav initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }} className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? "top-2" : "top-4"}`}>
        <div className="flex items-center gap-4">
          {/* Logo */}
          <motion.a href="#home" onClick={e => {
          e.preventDefault();
          scrollToSection("#home");
        }} className="font-script text-2xl text-foreground hidden md:block mr-4 relative" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <motion.span animate={{
            textShadow: isScrolled ? "0 0 20px hsl(var(--primary) / 0.5)" : "none"
          }} className="relative inline-block text-center text-lg">
              ​Lucas Barros Brito   
            </motion.span>
          </motion.a>

          {/* Main Nav Container */}
          <motion.div className={`relative flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-md border border-border/50 transition-all duration-500`} style={{
          background: isScrolled ? "linear-gradient(135deg, hsl(220 20% 12% / 0.95), hsl(220 20% 10% / 0.95))" : "hsl(220 20% 12% / 0.8)",
          boxShadow: isScrolled ? "0 10px 40px -10px hsl(var(--primary) / 0.2)" : "none"
        }} layout>
            {/* Gradient border effect */}
            <motion.div className="absolute inset-0 rounded-full p-[1px] -z-10" style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.5), transparent 50%, hsl(var(--accent) / 0.5))"
          }} animate={{
            opacity: isScrolled ? 1 : 0
          }} transition={{
            duration: 0.3
          }} />

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => <motion.a key={item.name} href={item.href} onClick={e => {
              e.preventDefault();
              scrollToSection(item.href);
            }} className={`relative px-4 py-2 text-sm transition-colors rounded-full ${activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && <motion.div className="absolute inset-0 rounded-full bg-muted/50" layoutId="activeSection" transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }} />}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>)}
            </div>

            {/* Request a Call Button */}
            <motion.button onClick={() => scrollToSection("#contact")} className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium overflow-hidden" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              {/* Shine effect */}
              <motion.span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent" initial={{
              x: "-100%"
            }} whileHover={{
              x: "100%"
            }} transition={{
              duration: 0.5
            }} />
              <span className="relative flex items-center gap-2">
                Fale Comigo{" "}
                <motion.span animate={{
                rotate: [0, 10, -10, 0]
              }} transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}>
                  <Phone className="w-4 h-4" />
                </motion.span>
              </span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button className="md:hidden p-2 text-muted-foreground hover:text-foreground relative" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{
            scale: 0.9
          }}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? <motion.div key="close" initial={{
                rotate: -90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: 90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <X className="w-5 h-5" />
                  </motion.div> : <motion.div key="menu" initial={{
                rotate: 90,
                opacity: 0
              }} animate={{
                rotate: 0,
                opacity: 1
              }} exit={{
                rotate: -90,
                opacity: 0
              }} transition={{
                duration: 0.2
              }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Ctrl+K Search Button */}
          <motion.button onClick={() => setIsSearchOpen(true)} className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/80 backdrop-blur-md border border-border/50 text-muted-foreground text-sm hover:text-foreground hover:border-primary/30 transition-all group" whileHover={{
          scale: 1.02,
          boxShadow: "0 5px 20px -5px hsl(var(--primary) / 0.2)"
        }} whileTap={{
          scale: 0.98
        }}>
            <span className="text-xs font-mono group-hover:text-primary transition-colors">ctrl+k</span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -10,
          scale: 0.95
        }} animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }} exit={{
          opacity: 0,
          y: -10,
          scale: 0.95
        }} transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 300
        }} className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-secondary/95 backdrop-blur-md border border-border/50 md:hidden overflow-hidden">
              {/* Background glow */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.1
          }} />

              {navItems.map((item, index) => <motion.a key={item.name} href={item.href} onClick={e => {
            e.preventDefault();
            scrollToSection(item.href);
          }} className={`block px-4 py-3 rounded-lg transition-colors relative ${activeSection === item.href.slice(1) ? "text-foreground bg-muted/50" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"}`} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }} whileTap={{
            scale: 0.98
          }}>
                  {item.name}
                </motion.a>)}
            </motion.div>}
        </AnimatePresence>
      </motion.nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>;
};
export default Navbar;