export interface ProjectMeta {
  year: string;
  role: string;
  status: { en: string; fr: string };
  highlights: { en: string[]; fr: string[] };
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projectMeta: Record<string, ProjectMeta> = {
  "auto-reels-maker": {
    year: "2025",
    role: "Solo project",
    status: { en: "Completed", fr: "Terminé" },
    highlights: {
      en: [
        "Pulls scripts from Google Sheets automatically",
        "Word-level captions powered by Whisper",
        "AI-generated images for every scene",
        "Smooth animations with OpenCV and FFmpeg",
      ],
      fr: [
        "Récupération automatique des scripts Google Sheets",
        "Sous-titres synchronisés via Whisper",
        "Images générées par IA pour chaque scène",
        "Animations fluides avec OpenCV et FFmpeg",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "smart-grid-cyber-detection": {
    year: "2026",
    role: "PFE Internship",
    status: { en: "In progress", fr: "En cours" },
    highlights: {
      en: [
        "Detects attacks on smart grid systems",
        "Combines machine learning with deep learning",
        "Built with PyTorch for high accuracy",
        "My final-year graduation project",
      ],
      fr: [
        "Détection d'attaques sur les réseaux intelligents",
        "Combinaison de machine learning et deep learning",
        "Développé avec PyTorch",
        "Projet de fin d'études",
      ],
    },
  },
  "audiobook-ebook": {
    year: "2024",
    role: "Solo project",
    status: { en: "Completed", fr: "Terminé" },
    highlights: {
      en: [
        "User-friendly desktop interface",
        "Saves audiobooks as chaptered MP3s",
        "Natural voices using Kokoro TTS",
        "Built for accessibility",
      ],
      fr: [
        "Interface de bureau intuitive",
        "Export en MP3 par chapitres",
        "Voix naturelles via Kokoro TTS",
        "Conçu pour l'accessibilité",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "audiobook-pdf": {
    year: "2024",
    role: "Solo project",
    status: { en: "Completed", fr: "Terminé" },
    highlights: {
      en: [
        "Converts any PDF to a single MP3",
        "High-speed voice synthesis",
        "Simple command-line interface",
      ],
      fr: [
        "Conversion de PDF en un seul MP3",
        "Synthèse vocale ultra-rapide",
        "Interface simple en ligne de commande",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "google-sheets-helper": {
    year: "2024",
    role: "Open source",
    status: { en: "Maintained", fr: "Maintenu" },
    highlights: {
      en: [
        "Easy-to-use Python library for Google Sheets",
        "Simplifies finding, adding, and deleting data",
        "Automates repetitive spreadsheet tasks",
      ],
      fr: [
        "Bibliothèque Python simple pour Google Sheets",
        "Simplifie la gestion des données",
        "Automatise les tâches répétitives",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "image-to-json": {
    year: "2024",
    role: "Solo project",
    status: { en: "Prototype", fr: "Prototype" },
    highlights: {
      en: [
        "Fast OCR extraction with PyTesseract",
        "AI-powered data structuring",
        "Perfect for invoices and resumes",
      ],
      fr: [
        "Extraction OCR rapide avec PyTesseract",
        "Structuration des données par IA",
        "Idéal pour les factures et les CV",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "motorola-6809": {
    year: "2024",
    role: "Academic",
    status: { en: "Completed", fr: "Terminé" },
    highlights: {
      en: [
        "Full simulation of the 6809 processor",
        "Clean Java Swing interface",
        "Step-by-step execution for debugging",
      ],
      fr: [
        "Simulation complète du processeur 6809",
        "Interface Java Swing soignée",
        "Exécution pas à pas pour le débogage",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
  "portfolio": {
    year: "2026",
    role: "Solo project",
    status: { en: "Live", fr: "En ligne" },
    highlights: {
      en: [
        "Minimal terminal-inspired design",
        "Complete English and French support",
        "Smooth animations throughout",
      ],
      fr: [
        "Design minimaliste inspiré du terminal",
        "Support complet Anglais et Français",
        "Animations fluides sur tout le site",
      ],
    },
    links: { github: "https://github.com/saadbenchakroun" },
  },
};