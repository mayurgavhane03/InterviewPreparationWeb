import React from "react";
import CodeDisplay from "./CodeDisplay";
 
const MainDisplay = ({ code, Output }) => {
  return (
    <div className="flex">
      <div className=" ml-[20px] w-1/2 p-4">
        <h1 className=" text-3xl font-semibold   " >Navbar Component Code</h1>
        <CodeDisplay code={code} language="jsx" />
      </div>
      <div className="w-1/2 p-4">
        <h1 className=" text-3xl font-semibold   ">Output</h1>
        <Output />
      </div>
    </div>
  );
};

export default MainDisplay;
