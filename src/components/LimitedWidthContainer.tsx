import React from 'react';

interface LimitedWidthContainerProps {
  children: React.ReactNode;
}

export const LimitedWidthContainer = ({
  children,
}: LimitedWidthContainerProps) => (
  <div className="w-full max-w-[1280px] tablet:px-10 px-5 mx-auto">
    {children}
  </div>
);
