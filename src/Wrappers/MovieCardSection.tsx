import React from "react";

const MovieCardSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-2 gap-3 ">
      {children}
    </div>
  );
};

export default MovieCardSection;
