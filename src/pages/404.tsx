import { Link } from "gatsby";
import React from "react";
import * as style from "styles/pages/404.module.scss";
const NotFoundPage = () => {
  return (
    <article className={style.notFound}>
      <div className={style.unhappyFace}>:(</div>
      <h1>404 ERROR</h1>
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p className={style.marginTop}>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
      <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
      <Link to="/" className={style.goHome}>
        HOME
      </Link>
    </article>
  );
};

export default NotFoundPage;
