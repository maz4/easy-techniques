"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TechniqueCard } from "../../components/TechniqueCard";
import { TechniqueSection } from "../../components/TechniqueSection";

type Language = "english" | "japanese";

type Technique = {
  id: number;
  name: string;
  video?: string;
  badge?: string;
};

const techniques: Technique[] = [
  {
    id: 47,
    name: "Armada com Martelo",
    video: "https://www.youtube.com/embed/z1jvzD2sdHQ"
  },
  {
    id: 48,
    name: "Queixada de Calcanhar",
    video: "https://www.youtube.com/embed/RAiO-nef4cg"
  },
  {
    id: 49,
    name: "Chapéu de Couro",
    video: "https://www.youtube.com/embed/aDqPnoaAaek"
  },
  {
    id: 50,
    name: "RODADO to Meia Lua de Compasso",
    video: "https://www.youtube.com/embed/G6aa8_YtQaQ"
  },
  { id: 51, name: "DE LINHA to Meia Lua de Compasso" }
].map((tech) => ({ badge: "Advanced", ...tech }));

export default function AdvancedAttacksPage() {
  const [language, setLanguage] = useState<Language>("japanese");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = useMemo(
    () => ({
      title: {
        english: "Advanced Attacks",
        japanese: "応用の蹴り"
      },
      back: {
        english: "Back to Main Page",
        japanese: "メインページに戻る"
      }
    }),
    []
  );

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={language === "japanese" ? "japanese-mode" : ""}>
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <i className="fas fa-fire text-3xl mr-3 text-yellow-400" />
              <h1 className="text-3xl font-bold">
                <span className="english">Capoeira Techniques</span>
                <span className="japanese">カポエイラの技</span>
              </h1>
            </div>
            <div className="flex space-x-2 bg-gray-800 rounded-full p-1">
              <button
                type="button"
                className={`language-toggle px-4 py-2 rounded-full font-medium ${
                  language === "english" ? "active" : ""
                }`}
                onClick={() => setLanguage("english")}
              >
                <i className="fas fa-language mr-2" />
                <span>English</span>
              </button>
              <button
                type="button"
                className={`language-toggle px-4 py-2 rounded-full font-medium ${
                  language === "japanese" ? "active" : ""
                }`}
                onClick={() => setLanguage("japanese")}
              >
                <i className="fas fa-language mr-2" />
                <span>日本語</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            <i className="fas fa-arrow-left mr-2" />
            <span className="english">{t.back.english}</span>
            <span className="japanese">{t.back.japanese}</span>
          </Link>
        </nav>

        <div className="mb-8">
          <h2 className="category-title text-white text-xl font-bold py-3 px-6 rounded-t-lg mb-6">
            <span className="english">{t.title.english}</span>
            <span className="japanese">{t.title.japanese}</span>
          </h2>
          <TechniqueSection
            englishTitle={t.title.english}
            japaneseTitle={t.title.japanese}
          >
            {techniques.map((technique) => (
              <TechniqueCard
                key={technique.id}
                id={technique.id}
                name={technique.name}
                video={technique.video}
                badge={technique.badge ?? ""}
                badgeClassName="bg-red-100 text-red-800"
              />
            ))}
          </TechniqueSection>
        </div>
      </main>

      <button
        type="button"
        onClick={handleBackToTop}
        className={`${
          showBackToTop ? "" : "hidden"
        } fixed bottom-8 right-8 z-50 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-900 transition duration-300`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up mr-2" />
        Top
      </button>
    </div>
  );
}
