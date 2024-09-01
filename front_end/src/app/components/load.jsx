import React from "react";

const Load = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src="./zurag/logo.png" alt="logo" />
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    </div>
  );
};

export default Load;
