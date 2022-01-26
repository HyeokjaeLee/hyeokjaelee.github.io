import React from "react";
import * as style from "styles/components/footer.module.scss";
import Facebook from "img/facebook.svg";
import Gmail from "img/gmail.svg";
import Github from "img/github.svg";
import Instagram from "img/instagram.svg";
export const Footer = () => (
  <footer className={style.footer}>
    <h3>Contact & Channel</h3>
    <ul className="icon-list">
      <li>
        <a href="mailto:leehyeokjae97@gmail.com">
          <Gmail />

          <p>Gmail</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/HyeokjaeLee">
          <Github className={style.icon} />

          <p>Github</p>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/leehyeokjae97">
          <Facebook className={style.icon} />
          <p>Facebook</p>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/2z_4_me/">
          <Instagram className={style.icon} />
          <p>Instagram</p>
        </a>
      </li>
    </ul>
    <p className="copyright">
      © HyeokjaeLee. All rights reserved.
      <br />
      Powered by GitHub Pages.
    </p>
  </footer>
);
