"use client";

type Props = {
  id: number;
  name: string;
  badge: string;
  badgeClassName?: string;
  video?: string;
  language?: "english" | "japanese";
};

function toYouTubeLink(src: string) {
  const match = src.match(/\/embed\/([^?]+)/);
  return match ? `https://www.youtube.com/watch?v=${match[1]}` : src;
}

export function TechniqueCard({
  id,
  name,
  badge,
  badgeClassName = "bg-blue-100 text-blue-800",
  video,
  language = "english",
}: Props) {
  const videoLink = video ? toYouTubeLink(video) : undefined;
  const watchLabel =
    language === "japanese" ? "YouTubeで見る" : "Watch on YouTube";

  return (
    <div className="technique-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
      <div className="video-placeholder relative w-full pb-[56.25%]">
        <div className="absolute inset-0 flex items-center justify-center">
          {videoLink ? (
            <a
              href={videoLink}
              target="_blank"
              rel="noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full font-semibold shadow-md transition"
            >
              <i className="fas fa-arrow-up-right-from-square mr-2" />
              {watchLabel}
            </a>
          ) : (
            <i className="fas fa-play-circle text-5xl text-blue-400 opacity-70" />
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">
            {id}. {name}
          </h3>
          <span
            className={`${badgeClassName} text-xs font-medium px-2.5 py-0.5 rounded`}
          >
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
