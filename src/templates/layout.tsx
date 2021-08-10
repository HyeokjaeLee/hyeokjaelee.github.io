import { useState, useEffect } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "../components/main";
import "../assets/sass/global.scss";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
const TemplateWrapper = ({ children, location }: any) => (
  <>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    <Header />
    <div>
      <Main location={location}>{children}</Main>
    </div>
    <Footer />
  </>
);

export default TemplateWrapper;
