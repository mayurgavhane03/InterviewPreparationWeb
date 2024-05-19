
 
import React, { useEffect, useState } from "react";
 
import MainDisplay from "../MainDisplay";
import { TrafficlightsCode } from "../AllCode";
import QuestionDisplay from "../QuestionDisplay";
import ReactInterviewQuestion from "../question";

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
    <div className="flex flex-col items-center w-24 p-4 bg-black rounded-md  mt-16">
      {/* Red light */}
      <div className={`w-12 h-12 my-2 rounded-full ${light === 'red' ? 'bg-red-500 opacity-100' : 'bg-red-500 opacity-50'}`}></div>
      {/* Yellow light */}
      <div className={`w-12 h-12 my-2 rounded-full ${light === 'yellow' ? 'bg-yellow-500 opacity-100' : 'bg-yellow-500 opacity-30'}`}></div>
      {/* Green light */}
      <div className={`w-12 h-12 my-2 rounded-full ${light === 'green' ? 'bg-green-500 opacity-100' : 'bg-green-500 opacity-30'}`}></div>
    </div>
  );
};

const TrafficLights = () => {
  return (
    <div className=" ml-[200px] ">
        <QuestionDisplay question={ReactInterviewQuestion.TrafficLight}  /> 
      <MainDisplay Output={Trafficlights} code={TrafficlightsCode} />
    </div>
  );
};

export default TrafficLights;
