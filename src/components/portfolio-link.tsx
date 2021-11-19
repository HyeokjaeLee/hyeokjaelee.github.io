import React from "react";
import { Link } from "gatsby";
import RightArrow from "img/right-arrow.svg";
export const PortfolioLink = (props: any) => {
  const { display } = props;
  return (
    <div className={`portfolio-link-wrap ${display}`}>
      <Link to="/HyeokjaeLee" className="portfolio-link">
        Portfolio 돌아가기
        <RightArrow />
      </Link>
    </div>
  );
};
