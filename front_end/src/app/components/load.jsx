import React from "react";

const Load = () => {
  return (
    <div className=" w-full h-full bg-red-400">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <img src="./zurag/logo.png" alt="logo" />
          <span className="loading loading-spinner loading-lg">
            {" "}
            ta tur huleene uu
          </span>
        </div>
      </div>
    </div>
  );
};

export default Load;
