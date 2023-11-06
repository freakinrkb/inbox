import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

const Input = () => {
  return (
    <div className="h-15 bg-yellow-50 p-3 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type Something..."
        className="placeholder-gray-500 bg-transparent border-none text-black outline-none w-full"
      />
      <div className="flex items-center gap-3">
        <img className="h-6 cursor-pointer" src={Attach} alt="" />
        <label htmlFor="file" className="cursor-pointer relative">
        <img className="h-6 w-14 " src={Img} alt="" />
        <input
          type="file"
          id="file"
          className="w-0 h-0 absolute top-0 left-0"
        />
        </label>
        <button className="border-none p-3 text-white bg-indigo-500 cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
