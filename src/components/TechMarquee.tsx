const techs = [
  "Python", "PyTorch", "Java", "C", "React", "TypeScript",
  "Node.js", "Tailwind", "PostgreSQL", "MySQL", "Linux",
  "FFmpeg", "OpenCV", "PyTesseract", "n8n", "Git", "Docker", "Framer Motion",
];

const TechMarquee = () => {
  const loop = [...techs, ...techs];
  return (
    <div
      className="relative overflow-hidden py-8 sm:py-10 border-y border-border/60"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max items-center">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary mr-2">▸</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;