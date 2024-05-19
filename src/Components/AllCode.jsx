// src/TrafficLightCode.js

export const TrafficlightsCode = `
import React, { useState, useEffect } from 'react';

const Trafficlights = () => {
  // State to keep track of the current light color
  const [light, setLight] = useState("red");

  useEffect(() => {
    // Object to define the duration of each light in milliseconds
    const TimeSlot = {
      red: 5000,
      green: 3000,
      yellow: 1000,
    };

    // Function to switch between the lights based on the current light
    const SwitchBetLights = () => {
      setLight((prevLight) => {
        switch (prevLight) {
          case 'red':
            return 'green';
          case 'green':
            return 'yellow';
          case 'yellow':
            return 'red';
          default:
            return 'red';
        }
      });
    };

    // Set an interval to change the light based on the current light's duration
    const Interval = setInterval(SwitchBetLights, TimeSlot[light]);

    // Clear the interval when the component unmounts or the light changes
    return () => clearInterval(Interval);
  }, [light]); // Depend on 'light' to reset the interval on light change

  return (
    <div className="flex flex-col items-center w-24 p-4 bg-black rounded-md mx-auto mt-16">
      {/* Red light */}
      <div className={\`w-12 h-12 my-2 rounded-full \${light === 'red' ? 'bg-red-500 opacity-100' : 'bg-red-500 opacity-50'}\`}></div>
      {/* Yellow light */}
      <div className={\`w-12 h-12 my-2 rounded-full \${light === 'yellow' ? 'bg-yellow-500 opacity-100' : 'bg-yellow-500 opacity-30'}\`}></div>
      {/* Green light */}
      <div className={\`w-12 h-12 my-2 rounded-full \${light === 'green' ? 'bg-green-500 opacity-100' : 'bg-green-500 opacity-30'}\`}></div>
    </div>
  );
};

export default Trafficlights;
`;




export const CountersCode = `
import React, { useState } from "react";

const Counter = () => {
  const [update, setUpdate] = useState(0);
  const [steps, setSteps] = useState(1);
  const [limit, setLimit] = useState(50); // Initialize limit as an empty string

  const handlePrevious = () => {
    setUpdate(update - steps);
  };

  const HandleNext = () => {
    if (limit !== "" && update + steps > parseInt(limit, 10)) {
      alert("Number is too large!");
    } else {
      setUpdate(update + steps);
    }
  };

  const Handlestep = (e) => {
    const step = parseInt(e.target.value, 10);
    setSteps(step);
  };

  const Handlereset = () => {
    setUpdate(0);
  };

  const HandleLimit = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div className="flex flex-col mt-[150px] items-center justify-center space-y-4">
      <button
        onClick={handlePrevious}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Previous
      </button>
      <h1 className="text-3xl font-bold">{update}</h1>
      <button
        onClick={HandleNext}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Next
      </button>
      <label className="text-lg font-semibold">Step:</label>
      <input
        type="number"
        onChange={Handlestep}
        value={steps} 
        className="border border-gray-300 px-2 py-1 rounded"
      />

      <label className="text-lg font-semibold">Increment Limit:</label>
      <input
        type="number"
        onChange={HandleLimit}
        value={limit}
        className="border border-gray-300 px-2 py-1 rounded"
      />

      <button
        onClick={Handlereset}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Counters;

`;


export const BuildFileExplorerCode = `
import React, { useState } from "react";
import ReactInterviewQuestion from "../question";
import Counters from "./Counter";
import { CountersCode } from "../AllCode";
import QuestionDisplay from "../QuestionDisplay";
import MainDisplay from "../MainDisplay";
import { FaCaretRight } from "react-icons/fa";

import { FaCaretDown } from "react-icons/fa";

const Explorer = ({ item }) => {
    const [expand, setExpand] = useState(false);
  
    return (
      <div>
        <p className="flex" onClick={() => setExpand(!expand)}>
          {item.isFolder ? (expand ? <FaCaretDown /> : <FaCaretRight />) : null}
          {item.name}+
        </p>
        {item.isFolder && expand && (
          <div className="ml-4">
            {item.items.map((childItem) => (
              <Explorer key={childItem.name} item={childItem} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
 
  const FileExplorer = () => {
    const fileData = {
      name: "root",
      isFolder: true,
      items: [
        {
          name: "public",
          isFolder: true,
          items: [
            {
              name: "vite.svg",
              isFolder: false,
            },
          ],
        },
        {
          name: "src",
          isFolder: true,
          items: [
            {
              name: "assets",
              isFolder: true,
              items: [
                {
                  name: "react.svg",
                  isFolder: false,
                },
              ],
            },
            {
              name: "Components",
              isFolder: true,
              items: [
                {
                  name: "react Projects",
                  isFolder: false,
                },
                {
                  name: "Javascript",
                  isFolder: false,
                },
              ],
            },
            {
              name: "App.jsx",
              isFolder: false,
            },
            {
              name: "index.jsx",
              isFolder: false,
            },
          ],
        },
      ],
    };
  
    return (
      <div className="">
        <Explorer item={fileData} />
      </div>
    );
  };

const BuildFileExplorer = () => {
  return (
    <div className=" ml-[200px] ">
      <QuestionDisplay question={ReactInterviewQuestion.BuildFileExplorer} />
      <MainDisplay Output={FileExplorer} code={CountersCode} />
    </div>
  );
};

export default BuildFileExplorer;



`
