import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import BrandFooter from "../components/BrandFooter";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen grid-bg px-4 sm:px-6 py-20 pb-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-primary">{t.projects.section}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display text-gradient">{t.projects.title}</h1>
            <p className="text-muted-foreground max-w-lg">
              {t.projects.subtitle}
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {t.projects.list.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block h-full glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      )}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center font-mono text-xs text-muted-foreground"
          >
            {t.projects.footer}{" "}
            <a
              href="https://github.com/saadbenchakroun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/saadbenchakroun
            </a>
          </motion.p>
        </div>
        <BrandFooter />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
