import React, { useContext } from "react";
import { PortfolioContext } from "contexts/theme";
import { Link } from "gatsby";
import RightArrow from "img/right-arrow.svg";
export const PortfolioLink = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  return (
    <div className={`portfolio-link-wrap ${portfolio}`}>
      <Link to="/HyeokjaeLee" className="portfolio-link">
        Portfolio 돌아가기
        <RightArrow />
      </Link>
    </div>
  );
};
