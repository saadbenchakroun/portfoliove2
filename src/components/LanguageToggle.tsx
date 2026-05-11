import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary hover:border-glow transition-all"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-primary font-semibold" : ""}>EN</span>
      <span className="text-border">/</span>
      <span className={lang === "fr" ? "text-primary font-semibold" : ""}>FR</span>
    </motion.button>
  );
};

export default LanguageToggle;
