import React from "react";

interface LimitedWidthContainerProps {
  children: React.ReactNode;
}

export const LimitedWidthContainer = ({
  children,
}: LimitedWidthContainerProps) => {
  return <div className="w-full max-w-[1280px] px-10 mx-auto">{children}</div>;
};
