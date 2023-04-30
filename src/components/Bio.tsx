/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import React from "react";
import { GitHub, Linkedin, Mail } from "react-feather";

import { Logo } from "./Logo";
import { useDarkModeStore } from "../stores";

interface BioProps {
  border?: boolean;
}

export const Bio = ({ border = true }: BioProps) => {
  const data: {
    site: {
      siteMetadata: {
        author: {
          name: string;
          summary: string;
        };
        social: {
          github: string;
          linkedin: string;
          email: string;
        };
      };
    };
  } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedin
            email
          }
        }
      }
    }
  `);

  const [darkMode, fontColor, borderColor, subBackgroundColor] =
    useDarkModeStore((state) => [
      state.darkMode,
      state.fontColor,
      state.borderColor,
      state.subBackgroundColor,
    ]);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  const linkInfo = [
    {
      name: "GitHub",
      href: `https://github.com/${social.github}`,
      logo: GitHub,
      target: "_blank",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/in/${social.linkedin}`,
      logo: Linkedin,
      target: "_blank",
    },
    {
      name: "Email",
      href: `mailto:${social.email}`,
      logo: Mail,
    },
  ];

  return (
    <div className={`flex items-center gap-7 flex-wrap pb-10 mb-10`}>
      <div
        className={`${
          darkMode ? "bg-white" : "bg-black"
        } rounded-container p-5 w-[100px] h-[100px]`}
      >
        <Logo color={darkMode ? "black" : "white"} width="100%" height="100%" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">덕업일치 개발자</h2>
        <div className="flex pt-1">
          {linkInfo.map(({ logo: Logo, name, ...linkProps }) => (
            <a
              key={name}
              {...linkProps}
              className="relative group flex justify-center items-center rounded-[100%] w-[2.2em] h-[2.2em] hover:transition-all duration-100 ease-in-out hover:bg-zinc-600  hover:text-zinc-200"
            >
              <Logo size="1.2em" />
              <span
                className={`hidden absolute group-hover:block top-10 text-xs ${fontColor}`}
              >
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
