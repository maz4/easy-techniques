import { ReactNode } from "react";

type Props = {
  englishTitle: string;
  japaneseTitle: string;
  children: ReactNode;
  className?: string;
};

export function TechniqueSection({
  englishTitle,
  japaneseTitle,
  children,
  className = ""
}: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        <span className="english">{englishTitle}</span>
        <span className="japanese">{japaneseTitle}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
