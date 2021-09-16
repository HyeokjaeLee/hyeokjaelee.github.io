import React from "react";
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
        {(status) => (
          <main id="main">
            <div id="contentWrap" className={"slide " + status}>
              {children}
            </div>
          </main>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
