import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TerminalTyping = ({ lines }: { lines: string[] }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const timer = setTimeout(() => {
      if (currentChar < lines[currentLine].length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = lines[currentLine].slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      } else {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }
    }, currentChar === 0 && currentLine > 0 ? 150 : 12 + Math.random() * 18);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, lines]);

  return (
    <div className="font-mono text-sm space-y-1 min-h-[3.75rem]">
      {displayedLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-primary">❯</span>
          <span className="text-foreground">{line}</span>
          {i === currentLine && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-primary"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TerminalTyping;
