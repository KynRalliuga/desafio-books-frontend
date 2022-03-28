import React from "react";

const BallonText: React.FC = (props) => {
  const { children } = props;
  return children ? (
    <div className="bg-white/[0.4] p-4 rounded inline-flex relative font-bold text-white">
      <div className="absolute left-3 -top-2 border-x-8 border-b-8 border-b-white/[0.4] border-x-transparent" />
      {children}
    </div>
  ) : null;
};

export default BallonText;
