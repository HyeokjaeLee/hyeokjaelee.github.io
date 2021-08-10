import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
const timeout = 400;

interface TransitionStatus {
  entering: string;
  entered: string;
  exiting: string;
  exited?: string;
  unmounted?: string;
}
const transitionStatusClass: TransitionStatus = {
  entering: "slide ing",
  entered: "slide in",
  exiting: "slide out",
};

const Transition = (props: any) => {
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
            <div id="contents" className={transitionStatusClass[status]}>
              <section>{children}</section>
            </div>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
};

export default Transition;
