import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">{t.project.notFound}</p>
        <Link 
          to="/" 
          className="px-6 py-3 rounded-xl border-glow text-foreground font-medium hover:bg-primary/10 transition-all"
        >
          {t.nav.backToHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
