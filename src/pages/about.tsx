/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "gatsby";
import { Nav } from "../components/nav";
import { Helmet } from "react-helmet";

const About = () => {
  const [helemt, setHelemt] = useState(<Helmet />);
  setTimeout(() => {
    setHelemt(
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `programming & tech blog` },
          { name: `generator`, content: `gatsby` },
          { name: `author`, content: `HyeokjaeLee` },
        ]}
        bodyAttributes={{ id: "about" }}
      />
    );
  }, 600);
  return (
    <>
      {helemt}
      <Nav />
      <iframe src="/covid19-dashboard/"></iframe>
    </>
  );
};

export default About;
