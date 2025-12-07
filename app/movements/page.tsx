"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { TechniqueCard } from "../../components/TechniqueCard";

type Language = "english" | "japanese";

type Technique = {
  id: number;
  name: string;
  video?: string;
  badge?: string;
};

const techniques: Technique[] = [
  { id: 1, name: "Ginga", video: "https://www.youtube.com/embed/HbUxXJKitS4" },
  { id: 2, name: "Paralela", video: "https://www.youtube.com/embed/vCe_8V4-eDI" },
  { id: 3, name: "Cadeira", video: "https://www.youtube.com/embed/UPOLhZI1Ee4" },
  {
    id: 4,
    name: "Descida Básica",
    video: "https://www.youtube.com/embed/z6MimtzUcAk"
  },
  { id: 5, name: "Negativa", video: "https://www.youtube.com/embed/iRb8inBYpf0" },
  {
    id: 6,
    name: "Negativa Invertido",
    video: "https://www.youtube.com/embed/-pPWzC6OJSQ"
  },
  {
    id: 7,
    name: "Negativa da Regional",
    video: "https://www.youtube.com/embed/zZgu_9jbytw"
  },
  { id: 8, name: "Troca & Negativa" },
  { id: 9, name: "Rolê", video: "https://www.youtube.com/embed/YkjKw8FPA6Y" },
  { id: 10, name: "Negativa from Rolê" },
  { id: 11, name: "Rolê to Negativa" },
  { id: 12, name: "Rolê to Cadeira" },
  { id: 13, name: "Rolê to Ginga" },
  { id: 14, name: "Rolê Levanta por Trás" },
  { id: 15, name: "Rolê to Esquiva" },
  {
    id: 16,
    name: "Rolê Invertido",
    video: "https://www.youtube.com/embed/Om_MRJvR8p4"
  },
  { id: 17, name: "Rolê Mergulho" },
  {
    id: 18,
    name: "Rolê de Cabeça",
    video: "https://www.youtube.com/embed/3YSCBtrBwy0"
  },
  { id: 19, name: "Cocorinha", video: "https://www.youtube.com/embed/tAqWvIzCaic" },
  { id: 20, name: "Bote", video: "https://www.youtube.com/embed/bN7zROI-wwI" },
  { id: 21, name: "Aú Normal", video: "https://www.youtube.com/embed/0NNsvVs7Cj4" },
  {
    id: 22,
    name: "Aú Encolhido",
    video: "https://www.youtube.com/embed/RmJzAg8KFgw"
  },
  { id: 23, name: "Aú to Paralela" },
  { id: 24, name: "Aú to Cadeira" },
  { id: 25, name: "Aú to Ginga" },
  { id: 26, name: "Aú to Esquiva" },
  { id: 27, name: "Aú to Negativa" },
  { id: 28, name: "Aú Trocado (Inside)" },
  { id: 29, name: "Aú Trocado (Outside)" },
  {
    id: 30,
    name: "Aú de Cabeça",
    video: "https://www.youtube.com/embed/s8EeH5Eab9s"
  }
].map((tech) => ({ badge: "Basic", ...tech }));

export default function MovementsPage() {
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
        english: "Movements & Positions",
        japanese: "移動の動き・構え"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <TechniqueCard
                key={technique.id}
                id={technique.id}
                name={technique.name}
                video={technique.video}
                badge={technique.badge ?? ""}
                badgeClassName="bg-blue-100 text-blue-800"
              />
            ))}
          </div>
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
