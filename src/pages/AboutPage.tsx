import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Code2, Brain, GraduationCap, MapPin, Calendar, Globe } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="min-h-screen grid-bg px-4 sm:px-6 py-20 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-primary">{t.about.section}</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-display text-gradient">{t.about.title}</h1>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-mono text-sm text-muted-foreground">{t.about.bioLabel}</span>
            </div>
            <p
              className="text-foreground leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: t.about.bio1 }}
            />
            <p className="text-muted-foreground leading-relaxed">
              {t.about.bio2}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" /> {t.about.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-primary" /> {t.about.availability}
              </span>
            </div>
          </motion.div>

          {/* Skills Table */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{t.about.skillsTitle}</h2>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-4 sm:px-6 py-4 font-mono text-xs text-primary uppercase tracking-wider">{t.about.categoryLabel}</th>
                      <th className="text-left px-4 sm:px-6 py-4 font-mono text-xs text-primary uppercase tracking-wider">{t.about.skillsLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.about.skillCategories.map((row, i) => (
                      <motion.tr
                        key={row.category}
                        variants={itemVariants}
                        className={`border-b border-border/50 last:border-b-0 hover:bg-primary/5 transition-colors ${
                          i % 2 === 0 ? "bg-secondary/20" : ""
                        }`}
                      >
                        <td className="px-4 sm:px-6 py-4 font-semibold text-foreground text-sm whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-muted-foreground text-sm">
                          {row.skills}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{t.about.educationTitle}</h2>
            </div>
            <div className="space-y-4">
              {t.about.education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 border-l-2 border-l-primary"
                >
                  <h3 className="font-semibold text-foreground text-lg">{edu.degree}</h3>
                  <p className="text-primary font-mono text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.year}</p>
                  <p className="text-muted-foreground text-sm mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">{t.about.languagesTitle}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="glass rounded-xl p-5 text-center space-y-2"
                >
                  <p className="font-semibold text-foreground text-lg">{lang.name}</p>
                  <p className="text-primary font-mono text-sm">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <BrandFooter />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
