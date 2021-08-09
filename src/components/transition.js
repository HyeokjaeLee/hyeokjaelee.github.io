import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

const timeout = 600;
const transitionAnimaions = {
  entering: "slide ing",
  entered: "slide in",
  exiting: "slide out",
};

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

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
              <div id="contents" className={transitionAnimaions[status]}>
                <nav>
                  <ul>
                    <li>Posts</li>
                    <li>Projects</li>
                    <li>About</li>
                  </ul>
                </nav>
                <section>{children}</section>
              </div>
            );
          }}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
