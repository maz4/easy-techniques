"use client";

type Props = {
  id: number;
  name: string;
  badge: string;
  badgeClassName?: string;
  video?: string;
};

export function TechniqueCard({
  id,
  name,
  badge,
  badgeClassName = "bg-blue-100 text-blue-800",
  video,
}: Props) {
  return (
    <div className="technique-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
      {video ? (
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-t-lg"
            src={video}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="video-placeholder relative w-full pb-[56.25%]">
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-play-circle text-5xl text-blue-400 opacity-70" />
          </div>
        </div>
      )}

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
