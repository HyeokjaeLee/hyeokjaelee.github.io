import { useState, useEffect } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Transition from "../components/transition";
import "../assets/sass/global.scss";
import "../assets/sass/components/layout.scss";

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
      <Transition location={location}>{children}</Transition>
    </div>
    <Footer />
  </>
);

export default TemplateWrapper;
