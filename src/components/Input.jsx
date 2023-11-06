import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

const Input = () => {
  return (
    <div className="h-15 bg-white p-3 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type Something..."
        className="placeholder-gray-500 bg-transparent border-none text-black outline-none w-full"
      />
      <div className="flex items-center gap-3">
        <img className="h-6 cursor-pointer" src={Attach} alt="" />
        <label htmlFor="file" className="cursor-pointer">
          {" "}
          <img className="h-6 w-6" src={Img} alt="" onLoad={() => console.log('Image loaded')}/>{" "}
        </label>
        <input
          type="file"
          className="w-0 h-0"
          style={{ position: "absolute" }}
          id="file"
        />
        <button className="border-none p-3 text-white bg-indigo-500 cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
