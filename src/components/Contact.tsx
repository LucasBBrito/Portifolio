import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    contactMethod: "email",
    hearAbout: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      contactMethod: "email",
      hearAbout: "",
      message: "",
    });
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
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
            Have a{" "}
            <motion.span
              style={{
                background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Project
            </motion.span>{" "}
            in your mind?
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's get to work{" "}
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Zap className="w-10 h-10 text-yellow-500" />
            </motion.span>
          </motion.h3>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am actively seeking new opportunities and my inbox is always open.
            Whether you have a question or simply want to say Hello, I will do my
            best to respond!
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
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative flex items-center gap-2">
              Say Hello{" "}
              <motion.span
                animate={{ rotate: [0, 20, -20, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                👋
              </motion.span>
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
              Get in Touch
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Feel free to reach out! Whether you have a question or just want to
              drop a message, I'll do my best to get back to you.
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
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p className="text-muted-foreground">Your City, Country</p>
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
                  <p className="text-muted-foreground">hello@example.com</p>
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
                  <h4 className="font-semibold text-cyan">Phone</h4>
                  <p className="text-muted-foreground">+1 234 567 8900</p>
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
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-2xl bg-card border border-border relative overflow-hidden"
              whileHover={{
                boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)",
              }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0%", "-200% 0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Name */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "name" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  required
                />
              </motion.div>

              {/* Phone & Email */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "phone" ? "focus" : "blur"}
                >
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone number"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "email" ? "focus" : "blur"}
                >
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "subject" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="job">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Contact Method & How did you hear */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={(e) =>
                          setFormData({ ...formData, contactMethod: e.target.value })
                        }
                        className="accent-primary"
                      />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        Phone
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={(e) =>
                          setFormData({ ...formData, contactMethod: e.target.value })
                        }
                        className="accent-primary"
                      />
                      <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        Email
                      </span>
                    </label>
                  </div>
                </div>
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === "hearAbout" ? "focus" : "blur"}
                >
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    How did you hear about me?
                  </label>
                  <input
                    type="text"
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    onFocus={() => setFocusedField("hearAbout")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Friends, Social Media, etc."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                variants={inputVariants}
                animate={focusedField === "message" ? "focus" : "blur"}
              >
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your Project Idea..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="group relative flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium ml-auto overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="relative">Send Message</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
