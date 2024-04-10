import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
const Spinner = () => {
  return (
    <div style={{marginTop:"120px"}}>
      <PropagateLoader
        color={"#ffdec5"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
