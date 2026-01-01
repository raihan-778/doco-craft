"use client";

import { RotatingSquare } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#10b981"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoadingSpinner;
