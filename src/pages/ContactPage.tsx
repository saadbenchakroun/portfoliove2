import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Mail, MapPin, MessageSquare, Linkedin, Instagram, Github, Phone, Copy, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useState } from "react";
import BrandFooter from "../components/BrandFooter";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.957l-5.45-6.59L4.3 22H1.04l8.04-9.19L1 2h7.09l4.93 6.04L18.244 2Zm-1.22 18h1.92L7.06 4H5.04l11.984 16Z" />
  </svg>
);

const ContactPage = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const copyValue = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen grid-bg px-4 sm:px-6 py-20 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 text-center"
          >
            <div className="flex items-center gap-3 justify-center">
              <div className="h-px w-16 bg-border" />
              <span className="font-mono text-xs text-primary">{t.contact.section}</span>
              <div className="h-px w-16 bg-border" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display text-gradient">{t.contact.title}</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              {t.contact.getInTouch}
            </h3>

            <div className="space-y-4">
              {[
                { label: t.contact.email, value: "admin@benchakroun.com", icon: Mail },
                { label: t.contact.phone, value: "+212 651192751", icon: Phone },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => copyValue(item.value)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group w-full text-left"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {copied === item.value ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}

              <div className="flex items-center gap-3 p-3 rounded-xl">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t.contact.location}</p>
                  <p className="text-sm text-foreground">{t.contact.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-mono text-xs text-muted-foreground mb-4">
                {t.contact.responseTime}
              </p>
              <h4 className="font-semibold text-foreground text-sm mb-3">{t.contact.socialTitle}</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/saad-benchakroun-krimi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/saadbenchakroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/saad_benchakroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/saadbenchakroun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <BrandFooter />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
