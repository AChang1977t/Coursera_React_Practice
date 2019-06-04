import React from "react";

// Create function component
export const Loading = () => {
  return (
    // create loading spinner info
    <div className="col-12">
      <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
      <p>Loading...</p>
    </div>
  );
};
