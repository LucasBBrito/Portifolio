import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Zap, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isFormHovered, setIsFormHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Retornarei em breve.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      transition: { duration: 0.2 },
    },
    blur: {
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tem um{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projeto
            </span>{" "}
            em mente?
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Vamos trabalhar juntos{" "}
            <Zap className="w-10 h-10 text-yellow-500" />
          </motion.h3>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Estou ativamente buscando novas oportunidades e minha caixa de entrada está sempre aberta.
            Se você tem uma pergunta ou simplesmente quer dizer olá, farei o meu melhor para responder!
          </motion.p>
          <motion.button
            onClick={() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="relative flex items-center gap-2">
              Diga Olá{" "}
              <span>👋</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Contact Form Section */}
        <div id="contact-form" className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.h3
              className="text-3xl font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Entre em Contato
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Sinta-se à vontade para entrar em contato! Se você tem uma pergunta ou
              apenas quer deixar uma mensagem, farei o meu melhor para responder.
            </motion.p>

            <div className="space-y-6">
              {/* Location */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-primary">Localização</h4>
                  <p className="text-muted-foreground">Brasil</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-muted-foreground">lucas@exemplo.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-cyan/20 border border-cyan/30 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-6 h-6 text-cyan" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-cyan">Telefone</h4>
                  <p className="text-muted-foreground">+55 11 99999-9999</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={() => setIsFormHovered(false)}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-2xl bg-card border border-border relative overflow-hidden"
              animate={{
                boxShadow: isFormHovered
                  ? "0 20px 40px -20px hsl(var(--primary) / 0.2)"
                  : "0 0 0 0 transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated border - only on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: isFormHovered ? ["200% 0%", "-200% 0%"] : "200% 0%",
                  opacity: isFormHovered ? 1 : 0,
                }}
                transition={{
                  backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3 },
                }}
              />

              {/* Name */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "name" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Seu Nome"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "email" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Seu email"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "message" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Sua Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Sua Ideia de Projeto..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {/* Shine effect - only on hover */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
