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
import { useColorStore } from "../stores";

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

  const borderColor = useColorStore(state => state.borderColor);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <div
      className={`flex gap-10 flex-wrap pb-10 mb-10 border-b-[1px] border-${borderColor}`}
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
          <a href={`https://github.com/${social.github}`} target="_blank">
            <GitHub />
          </a>
          <a
            href={`https://www.linkedin.com/in/${social.linkedin}`}
            target="_blank"
          >
            <Linkedin />
          </a>
          <a href={`mailto:${social.email}`}>
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
};
