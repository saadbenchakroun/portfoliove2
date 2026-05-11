import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Globe, CheckCircle2, Star } from "lucide-react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { projectMeta } from "../data/projectMeta";
import BrandFooter from "../components/BrandFooter";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();

  const project = t.projects.list.find((p) => p.slug === slug);
  const meta = slug ? projectMeta[slug] : undefined;

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen grid-bg flex flex-col items-center justify-center px-6 text-center gap-6">
          <h1 className="text-4xl font-bold text-gradient">404</h1>
          <p className="text-muted-foreground">{t.project.notFound}</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-glow text-foreground hover:bg-primary/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> {t.project.back}
          </Link>
        </div>
      </PageTransition>
    );
  }

  const related = t.projects.list.filter((p) => p.slug !== slug).slice(0, 3);
  const highlights = meta?.highlights[lang] ?? [];

  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        {/* HEADER */}
        <section className="relative overflow-hidden grid-bg">
          <div className="absolute inset-0 aurora-bg pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {t.project.back}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary tracking-widest">
                  // {slug}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-primary">
                    <Star className="w-3 h-3 fill-primary" /> {t.project.featuredLabel}
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">{project.title.split(" ").slice(0, -1).join(" ")} </span>
                <span className="font-serif-display text-gradient">
                  {project.title.split(" ").slice(-1)}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {meta && (
                <div className="grid grid-cols-3 gap-3 pt-4 max-w-md">
                  <div className="glass rounded-xl p-3">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {t.project.year}
                    </div>
                    <div className="mt-1 font-semibold text-foreground">{meta.year}</div>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {t.project.role}
                    </div>
                    <div className="mt-1 font-semibold text-foreground text-sm">{meta.role}</div>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                      {t.project.status}
                    </div>
                    <div className="mt-1 font-semibold text-primary text-sm">
                      {meta.status[lang]}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <Reveal>
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                  {t.project.highlights}
                </h2>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6">
                <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                  {t.project.stack}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {meta?.links && (
                <div className="glass rounded-2xl p-6 space-y-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">
                    {t.project.links}
                  </h2>
                  {meta.links.github && (
                    <a
                      href={meta.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground flex-1">{t.project.sourceCode}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                  {meta.links.demo && (
                    <a
                      href={meta.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground flex-1">{t.project.liveDemo}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* RELATED */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">
              <span className="font-serif-display text-gradient">{t.project.relatedTitle}</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group block glass rounded-2xl p-5 hover:border-glow hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <BrandFooter />
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;