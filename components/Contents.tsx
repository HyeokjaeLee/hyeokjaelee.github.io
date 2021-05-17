import React from "react";

export const Contents = (props) => {
  return (
    <div style={{ height: "190vh", width: "100%" }}>
      <main>{props.children}</main>
    </div>
  );
};
