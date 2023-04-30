import { Link } from "gatsby";

import React from "react";

import { LimitedWidthContainer } from "./LimitedWidthContainer";
import { useDarkModeStore, usePageInfoStore } from "../stores";

interface TagFilterProps {
  tags: { emoji: string; tag: string }[];
  className?: string;
}

export const TagFilter = ({ tags, className }: TagFilterProps) => {
  const [darkMode, borderColor, backgroundColor, subFontColor] =
    useDarkModeStore((state) => [
      state.darkMode,
      state.borderColor,
      state.backgroundColor,
      state.subFontColor,
    ]);
  const [query] = usePageInfoStore((state) => [state.query]);
  const selectedTag = query.get("tag");
  const tagLinkClassName = `block px-3 py-1 font-black text-lg flex items-center gap-3 rounded-container ${
    darkMode ? "hover:bg-dark-2" : "hover:bg-light-2"
  }`;
  const selectedUnderline = "border-b-[3px] border-[#FC725C]";

  return (
    <section
      className={`border-b w-full ${borderColor} sticky top-0 ${backgroundColor} ${subFontColor} ${className}`}
    >
      <LimitedWidthContainer>
        <ul className="flex gap-3">
          <li className={`${selectedTag ? "" : selectedUnderline} py-3`}>
            <Link to="/" className={tagLinkClassName}>
              <span className="text-3xl">🗂️</span> all
            </Link>
          </li>
          {tags.map(({ tag, emoji }) => (
            <li
              className={`${tag === selectedTag ? selectedUnderline : ""} py-3`}
            >
              <Link to={`?tag=${tag}`} className={tagLinkClassName}>
                <span className="text-3xl">{emoji}</span> {tag}
              </Link>
            </li>
          ))}
        </ul>
      </LimitedWidthContainer>
    </section>
  );
};
