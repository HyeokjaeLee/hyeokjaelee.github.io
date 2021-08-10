import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
import "../assets/sass/components/main.scss";
const timeout = 400;
interface TransitionStatus {
  entering: string;
  entered: string;
  exiting: string;
  exited?: string;
  unmounted?: string;
}
const transitionStatusClass: TransitionStatus = {
  entering: "ing",
  entered: "in",
  exiting: "out",
};

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
        {(status) => {
          return (
            <div id="contents" className={"slide " + transitionStatusClass[status]}>
              <section>{children}</section>
            </div>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
};
