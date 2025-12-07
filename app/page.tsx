"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "english" | "japanese";

type Category = {
  slug: string;
  icon: string;
  gradient: string;
  textColor: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  countLabel: Record<Language, string>;
};

const categories: Category[] = [
  {
    slug: "movements",
    icon: "fas fa-walking",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    textColor: "text-blue-600",
    title: {
      english: "Movements & Positions",
      japanese: "移動の動き・構え"
    },
    description: {
      english:
        "Basic movements, positions, and transitions including Ginga, Paralela, Cadeira, Negativa, Rolê, and Aú variations.",
      japanese:
        "ジンガ、パラレラ、カデイラ、ネガティバ、ロレ、アウのバリエーションなど、基本的な動き、構え、移行。"
    },
    countLabel: {
      english: "View 30 Techniques",
      japanese: "30の技を見る"
    }
  },
  {
    slug: "esquivas",
    icon: "fas fa-shield-alt",
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
    textColor: "text-green-600",
    title: {
      english: "Esquivas",
      japanese: "避けの技"
    },
    description: {
      english:
        "Dodging techniques including Esquiva de frente, Esquiva de lado, and Esquiva diagonal for defense and evasion.",
      japanese:
        "防御と回避のためのエスキーバ・デ・フレンテ、エスキーバ・デ・ラド、エスキーバ・ディアゴナルなどの避け技。"
    },
    countLabel: {
      english: "View 3 Techniques",
      japanese: "3の技を見る"
    }
  },
  {
    slug: "basic-attacks",
    icon: "fas fa-fist-raised",
    gradient: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    textColor: "text-yellow-600",
    title: {
      english: "Basic Attacks",
      japanese: "基本の攻撃技"
    },
    description: {
      english:
        "Fundamental striking techniques including RODADO (rotating) and DE LINHA (linear) attacks like Meia Lua, Queixada, Armada, and Martelo.",
      japanese:
        "メイア・ルア、ケイシャーダ、アルマーダ、マルテロなどのRODADO（回転系）とDE LINHA（直線系）の基本的な打撃技。"
    },
    countLabel: {
      english: "View 13 Techniques",
      japanese: "13の技を見る"
    }
  },
  {
    slug: "advanced-attacks",
    icon: "fas fa-fire",
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
    textColor: "text-red-600",
    title: {
      english: "Advanced Attacks",
      japanese: "応用の蹴り"
    },
    description: {
      english:
        "Complex combination techniques and advanced strikes including Armada com Martelo, Queixada de Calcanhar, and Chapéu de Couro.",
      japanese:
        "アルマーダ・コム・マルテロ、ケイシャーダ・デ・カルカンハル、シャペウ・デ・コウロなどの複雑な組み合わせ技と高度な打撃技。"
    },
    countLabel: {
      english: "View 5 Techniques",
      japanese: "5の技を見る"
    }
  },
  {
    slug: "other-attacks",
    icon: "fas fa-hand-rock",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-700",
    textColor: "text-orange-600",
    title: {
      english: "Other Attacks",
      japanese: "その他の攻撃技"
    },
    description: {
      english:
        "Specialized techniques including Cabeçada, Rasteira, Joelhada, Tesoura, and other unique Capoeira moves.",
      japanese:
        "カベサーダ、ラステイラ、ジョエリャーダ、テソウラなど、カポエイラ特有の特殊技。"
    },
    countLabel: {
      english: "View 16 Techniques",
      japanese: "16の技を見る"
    }
  },
  {
    slug: "floreio",
    icon: "fas fa-star",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    textColor: "text-purple-600",
    title: {
      english: "Floreio",
      japanese: "魅せ技"
    },
    description: {
      english:
        "Acrobatic and showy techniques including Aú na Coluna, Macaco, Aú sem Mão, Beija Flor, and Bananeira for impressive displays.",
      japanese:
        "アウ・ナ・コロナ、マカコ、アウ・セム・マオ、ベイジャ・フロール、バナネイラなど、印象的な演技のためのアクロバティックで派手な技。"
    },
    countLabel: {
      english: "View 6 Techniques",
      japanese: "6の技を見る"
    }
  }
];

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("japanese");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const t = (english: string, japanese: string) =>
    language === "english" ? english : japanese;

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="english">Welcome to Capoeira Techniques</span>
            <span className="japanese">カポエイラの技へようこそ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="english">
              Explore the comprehensive collection of Capoeira techniques
              organized by category. Click on any category below to view
              detailed techniques with video demonstrations.
            </span>
            <span className="japanese">
              カテゴリ別に整理されたカポエイラの技の包括的なコレクションをご覧ください。下のカテゴリをクリックして、ビデオデモンストレーション付きの詳細な技をご覧ください。
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}`} className="block">
              <div className="technique-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 h-full">
                <div
                  className={`${category.gradient} h-48 flex items-center justify-center`}
                >
                  <i
                    className={`${category.icon} text-6xl text-white opacity-80`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    <span className="english">{category.title.english}</span>
                    <span className="japanese">{category.title.japanese}</span>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span className="english">{category.description.english}</span>
                    <span className="japanese">{category.description.japanese}</span>
                  </p>
                  <div
                    className={`flex items-center font-medium ${category.textColor}`}
                  >
                    <span className="english">{category.countLabel.english}</span>
                    <span className="japanese">{category.countLabel.japanese}</span>
                    <i className="fas fa-arrow-right ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
