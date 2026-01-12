import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState, useRef } from "react";

// Typewriter effect component
const TypewriterText = ({
  text,
  delay = 0
}: {
  text: string;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);
  return <span>
      {displayedText}
      {currentIndex < text.length && started && <motion.span animate={{
      opacity: [1, 0]
    }} transition={{
      duration: 0.5,
      repeat: Infinity
    }} className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle" />}
    </span>;
};
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg text-muted-foreground">Olá</span>
            <motion.span animate={{
            rotate: [0, 20, -20, 20, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3
          }} className="text-2xl origin-bottom-right">
              👋
            </motion.span>
            <span className="text-lg text-muted-foreground">eu sou</span>
          </motion.div>

          {/* Name with stagger animation */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            {"Lucas Barros".split("").map((char, index) => <motion.span key={index} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.05,
            ease: [0.215, 0.61, 0.355, 1]
          }} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="text-muted-foreground mb-2">
            Um apaixonado
          </motion.p>

          {/* Role with typewriter effect */}
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.9
        }} className="text-2xl md:text-3xl font-semibold italic mb-4 h-10" style={{
          background: "linear-gradient(135deg, hsl(330 80% 60%), hsl(280 80% 50%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
            <TypewriterText text="Desenvolvedor Frontend" delay={1} />
          </motion.h2>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 1.4
        }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            especializado em criar sites e aplicações web interativas e 
            pixel-perfect com as melhores tecnologias.
          </motion.p>

          {/* Profile Image with floating animation */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 1.6,
          type: "spring",
          stiffness: 100
        }} style={{
          y: imageY
        }} className="relative w-48 h-56 mx-auto mb-8">
            {/* Glow effect behind image */}
            <motion.div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/20 rounded-lg blur-xl" animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            
            {/* Floating animation wrapper */}
            <motion.div className="relative w-full h-full" animate={{
            y: [0, -15, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              <div className="w-full h-full rounded-lg bg-secondary border border-border flex items-center justify-center overflow-hidden relative">
                <img src={profilePhoto} alt="Lucas Barros" className="w-full h-full object-cover" />
                {/* Scan line effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" animate={{
                y: ["-100%", "200%"]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 3
              }} />
              </div>
              {/* Corner accent */}
              <motion.div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary" animate={{
              opacity: [0.5, 1, 0.5]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }} />
              <motion.div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-accent" animate={{
              opacity: [0.5, 1, 0.5]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }} />
            </motion.div>
          </motion.div>

          {/* LinkedIn Button */}
          <motion.a
            href="https://linkedin.com/in/lucasbarros"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 1.8
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-medium overflow-hidden"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            {/* Button glow on hover */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={{
                x: "-100%"
              }}
              whileHover={{
                x: "100%"
              }}
              transition={{
                duration: 0.5
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </span>
          </motion.a>
        </div>

        {/* Work & Education Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8
      }} className="mt-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.h2 className="text-2xl md:text-3xl font-bold text-foreground" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              Experiência & Educação
            </motion.h2>
            <motion.div className="w-16 h-0.5 bg-border" initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} />
            <motion.div initial={{
            opacity: 0,
            rotate: -180
          }} whileInView={{
            opacity: 1,
            rotate: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            Uma visão geral da minha experiência profissional e jornada acadêmica,
            mostrando as habilidades e conhecimentos que adquiri ao longo do caminho.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>;
};
const Timeline = () => {
  const experiences = [{
    period: "2024 - Presente",
    title: "Desenvolvedor Front-End Júnior",
    type: "Tempo Integral",
    company: "Empresa de Tecnologia",
    description: "Desenvolvendo sites responsivos, implementando designs do Figma, colaborando em UI/UX, usando React e Tailwind CSS.",
    side: "left"
  }, {
    period: "2022 - 2024",
    title: "Curso de Ciência da Computação",
    type: "",
    company: "Universidade",
    description: "Cursando graduação em Ciência da Computação, focado em desenvolver habilidades de programação e desenvolvimento de software.",
    side: "right"
  }, {
    period: "2021 - 2023",
    title: "Desenvolvedor Web",
    type: "Tempo Integral",
    company: "Estúdio de Design",
    description: "Desenvolvendo e mantendo aplicações web usando HTML, CSS, JavaScript e tecnologias relacionadas.",
    side: "left"
  }, {
    period: "2018 - 2021",
    title: "Bacharelado",
    type: "",
    company: "Universidade",
    description: "Formado em Bacharelado em Aplicações de Computação, construindo a base para uma carreira em tecnologia.",
    side: "right"
  }];
  const timelineRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
      {/* Center line background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 -translate-x-1/2" />
      
      {/* Animated center line */}
      <motion.div className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 origin-top" style={{
      height: lineHeight
    }} />

      <div className="space-y-12">
        {experiences.map((exp, index) => <motion.div key={index} initial={{
        opacity: 0,
        x: exp.side === "left" ? -80 : 80
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }} className={`relative flex items-center gap-8 ${exp.side === "left" ? "flex-row" : "flex-row-reverse"}`}>
            {/* Content */}
            <motion.div className={`flex-1 ${exp.side === "left" ? "text-right" : "text-left"}`} whileHover={{
          scale: 1.02
        }} transition={{
          duration: 0.2
        }}>
              <motion.span className="inline-block px-3 py-1 rounded-full text-sm bg-green-accent/20 text-green-accent border border-green-accent/30 mb-2" initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.15 + 0.2,
            type: "spring"
          }}>
                {exp.period}
              </motion.span>
              <h3 className="text-lg font-semibold text-primary">
                {exp.title}
                {exp.type && <span className="text-muted-foreground font-normal ml-2">
                    {exp.type}
                  </span>}
              </h3>
              <h4 className="font-medium text-foreground mb-2">{exp.company}</h4>
              <p className="text-muted-foreground text-sm">{exp.description}</p>
            </motion.div>

            {/* Center dot with pulse */}
            <motion.div className="relative z-10" initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.3,
          type: "spring"
        }}>
              <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <motion.div className="absolute inset-0 w-3 h-3 rounded-full bg-primary" animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }} />
            </motion.div>

            {/* Empty space for opposite side */}
            <div className="flex-1" />
          </motion.div>)}
      </div>
    </div>;
};
export default Hero;