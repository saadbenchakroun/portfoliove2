import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, FolderOpen, Mail, Terminal } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const navItems = [
  { path: "/", labelKey: "home" as const, icon: Home },
  { path: "/about", labelKey: "about" as const, icon: User },
  { path: "/projects", labelKey: "projects" as const, icon: FolderOpen },
  { path: "/contact", labelKey: "contact" as const, icon: Mail },
];

const FloatingDock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
      className="fixed bottom-4 left-0 right-0 px-4 flex justify-center z-50 min-[1000px]:bottom-6 min-[1000px]:left-1/2 min-[1000px]:-translate-x-1/2 min-[1000px]:w-max"
    >
      <div className="glass rounded-2xl px-2 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full min-[1000px]:px-3 min-[1000px]:gap-2">
        <div className="flex items-center gap-1 mr-1 sm:mr-2 px-1 sm:px-2 shrink-0">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-primary hidden md:inline">saad@dev:~$</span>
        </div>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          const label = t.nav[item.labelKey];
          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-xl transition-colors duration-200 shrink-0 ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <AnimatePresence>
                {(hoveredIndex === index || isActive) && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-mono overflow-hidden whitespace-nowrap hidden sm:inline"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute inset-0 rounded-xl border-glow"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default FloatingDock;
