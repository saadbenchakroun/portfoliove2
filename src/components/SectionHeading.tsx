import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => {
  const isCenter = align === "center";
  return (
    <Reveal>
      <div className={isCenter ? "space-y-4 text-center" : "space-y-4"}>
        <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <div className={`h-px ${isCenter ? "w-12" : "flex-1"} bg-border`} />
          <span className="font-mono text-xs text-primary tracking-widest">{eyebrow}</span>
          <div className={`h-px ${isCenter ? "w-12" : "flex-1"} bg-border`} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-foreground">{title.split(" ").slice(0, -1).join(" ")} </span>
          <span className="font-serif-display text-gradient">{title.split(" ").slice(-1)}</span>
        </h2>
        {description && (
          <p className={`text-muted-foreground text-base sm:text-lg max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;