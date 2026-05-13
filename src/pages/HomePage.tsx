import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Star,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import TerminalTyping from "../components/TerminalTyping";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TechMarquee from "../components/TechMarquee";
import { useLanguage } from "../i18n/LanguageContext";
import BrandFooter from "../components/BrandFooter";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.957l-5.45-6.59L4.3 22H1.04l8.04-9.19L1 2h7.09l4.93 6.04L18.244 2Zm-1.22 18h1.92L7.06 4H5.04l11.984 16Z" />
  </svg>
);

const HomePage = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const featured = t.projects.list.filter((p) => p.featured).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        {/* HERO */}
        <section className="relative overflow-hidden grid-bg">
          <div className="absolute inset-0 aurora-bg pointer-events-none" />
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-20 lg:pb-28">
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
              {/* Left: text */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="glass rounded-xl p-4 sm:p-5 max-w-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs font-mono text-muted-foreground">
                      saad@portfolio:~$
                    </span>
                  </div>
                  <TerminalTyping lines={t.home.terminal as unknown as string[]} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-5"
                >
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
                    <span className="text-foreground">Saad</span>
                    <br />
                    <span className="font-serif-display text-gradient">Benchakroun</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                    {t.home.headline}
                  </p>
                  <p className="font-mono text-sm text-primary">{t.home.tagline}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:glow-primary"
                  >
                    {t.home.cta1}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-glow text-foreground font-medium hover:bg-primary/10 transition-all"
                  >
                    {t.home.cta2}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-3 pt-2"
                >
                  {[
                    { icon: Github, href: "https://github.com/saadbenchakroun", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/saad-benchakroun-krimi/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://instagram.com/saad_benchakroun", label: "Instagram" },
                    { icon: XIcon, href: "https://x.com/saadbenchakroun", label: "X" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      aria-label={s.label}
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                  <span className="text-xs font-mono text-muted-foreground ml-1">
                    {t.home.social}
                  </span>
                </motion.div>
              </div>

              {/* Right: portrait */}
              <motion.div
                initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto lg:mx-0 w-[260px] sm:w-[320px] lg:w-full max-w-[420px]"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl pointer-events-none" />
                <div className="relative glass-strong rounded-3xl p-3 overflow-hidden">
                  <div className="absolute inset-0 shimmer pointer-events-none" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                    <img
                      src="/portrait.png"
                      alt="Portrait of Saad Benchakroun"
                      width={420}
                      height={420}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                      <span className="px-2 py-1 rounded bg-background/70 backdrop-blur">~/portrait.png</span>
                      <span className="px-2 py-1 rounded bg-background/70 backdrop-blur flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" /> Morocco
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* TECH MARQUEE */}
        <Reveal>
          <div className="mt-20 lg:mt-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <p className="font-mono text-xs text-muted-foreground mb-3">{t.homeExtra.stackLabel}</p>
            </div>
            <TechMarquee />
          </div>
        </Reveal>

        {/* ABOUT PREVIEW */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 lg:mt-32">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <SectionHeading
              eyebrow={t.homeExtra.aboutPreview.section}
              title={t.homeExtra.aboutPreview.title}
            />
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
                <p className="text-foreground/90 text-lg leading-relaxed">
                  {t.homeExtra.aboutPreview.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "PyTorch", "React", "Java", "Linux", "n8n"].map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-mono text-sm story-link"
                >
                  {t.homeExtra.aboutPreview.cta} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 lg:mt-32">
          <SectionHeading
            eyebrow={t.homeExtra.projectsPreview.section}
            title={t.homeExtra.projectsPreview.title}
            description={t.homeExtra.projectsPreview.body}
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group block h-full glass rounded-2xl p-6 hover:border-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 flex justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-glow text-foreground font-medium hover:bg-primary/10 transition-all text-sm"
              >
                {t.homeExtra.projectsPreview.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* CONTACT CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 lg:mt-32">
          <Reveal>
            <div className="relative overflow-hidden glass-strong rounded-3xl p-8 sm:p-14 text-center">
              <div className="absolute inset-0 aurora-bg pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <span className="font-mono text-xs text-primary tracking-widest">
                  {t.homeExtra.contactPreview.section}
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <span className="text-foreground">Let's </span>
                  <span className="font-serif-display text-gradient">build</span>
                  <span className="text-foreground"> something.</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t.homeExtra.contactPreview.body}
                </p>
                <div className="flex justify-center pt-2">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:glow-primary"
                  >
                    {t.homeExtra.contactPreview.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <BrandFooter />
      </div>
    </PageTransition>
  );
};

export default HomePage;