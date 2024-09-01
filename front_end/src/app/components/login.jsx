import React from "react";

const LogIn = () => {
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <img src="./zurag/logo.png" alt="logo" />
        <div className=" flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-medium">Welcome Back</h1>
          <p className="text-gray-500">
            Welcome back, Please enter your details
          </p>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs border p-3 rounded-lg bg-gray-100"
        />
        <button className="bg-blue-600  w-full max-w-xs rounded-full p-3 text-white">
          Log in
        </button>
        <div>Don’t have account?</div>
      </div>
      <div className=" bg-blue-600 w-full h-full"></div>
    </div>
  );
};

export default LogIn;
