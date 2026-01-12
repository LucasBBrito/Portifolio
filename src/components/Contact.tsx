import { motion } from "framer-motion";
import { MapPin, Mail, Zap, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
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
        </motion.div>

        {/* Contact Buttons Section */}
        <div id="contact-form" className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-center"
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

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* Location */}
              <motion.div
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary">Localização</h4>
                  <p className="text-muted-foreground text-sm">Brasil</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.a
                href="mailto:lucasbbrito8@gmail.com"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-muted-foreground text-sm">lucasbbrito8@gmail.com</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5582996223988"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px hsl(142 76% 36% / 0.2)" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </motion.div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#25D366]">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">+55 82 99622-3988</p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/lucasbbritodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px hsl(210 100% 40% / 0.2)" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin className="w-7 h-7 text-[#0A66C2]" />
                </motion.div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#0A66C2]">LinkedIn</h4>
                  <p className="text-muted-foreground text-sm">lucasbbritodev</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
