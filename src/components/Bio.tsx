/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GitHub, Linkedin, Mail } from "react-feather";
import { useDarkModeStore } from "../stores";

export const Bio = () => {
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

  const [fontColor, borderColor] = useDarkModeStore(state => [
    state.fontColor,
    state.borderColor,
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
    <div
      className={`flex gap-10 flex-wrap pb-10 mb-10 border-b-[1px] ${borderColor}`}
    >
      <div>
        <StaticImage
          className="rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={100}
          height={100}
          quality={95}
          alt="Profile picture"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">취미로 코딩하는 개발자</h2>
        <p>{author?.summary || null}</p>
        <div className="flex gap-3 pt-3">
          {linkInfo.map(({ logo: Logo, name, ...linkProps }) => (
            <a
              {...linkProps}
              className="relative group flex justify-center items-center rounded-[100%] w-[2.5rem] h-[2.5rem] hover:transition-all duration-100 ease-in-out hover:bg-zinc-600  hover:text-zinc-200 active:bg-yellow-300"
            >
              <Logo size="1.4em" />
              <span
                className={`hidden absolute group-hover:block top-[2.7rem] text-xs ${fontColor}`}
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
