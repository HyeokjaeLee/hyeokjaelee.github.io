import React from "react";
import * as style from "styles/components/main.module.scss";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
const timeout = 700;

export const Main = (props: any) => {
  const { children, location } = props;
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status) => <main className={`${style.main} ${style[status]}`}>{children}</main>}
      </ReactTransition>
    </TransitionGroup>
  );
};
/**
 *             <div id="contentWrap" className={"slide " + status}>
              {children}
            </div>
 */
