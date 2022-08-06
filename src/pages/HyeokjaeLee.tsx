/* eslint-disable react/prop-types */
import { Link } from "gatsby";
import React from "react";

const HyeokjaeLee = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    번거롭게 해드려 죄송합니다.
    <br /> 페이지가 이동되었습니다.
    <Link
      to="/about?portfolio"
      style={{
        backgroundColor: "gray",
        color: "white",
        borderRadius: "10px",
        padding: "0.5em",
        marginTop: "2em",
      }}
    >
      https://hyeokjaelee.github.io/about?portfolio
    </Link>
  </div>
);

export default HyeokjaeLee;
