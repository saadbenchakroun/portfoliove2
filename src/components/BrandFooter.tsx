import logo from "../assets/benchakroun-logo.png";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const BrandFooter = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 lg:mt-20 pb-2">
      <Reveal>
        <div className="flex justify-center opacity-80">
          <img
            src={logo}
            alt={t.footer.logoAlt}
            className="w-full max-w-[460px] h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </Reveal>
    </section>
  );
};

export default BrandFooter;