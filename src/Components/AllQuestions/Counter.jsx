import React, { useState } from "react";
import MainDisplay from "../MainDisplay";
import QuestionDisplay from "../QuestionDisplay";
import { questions } from "../AllQueAnsData";
 
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

const Counters = () => {
  return (
    <div className=" ml-[200px] ">
       <QuestionDisplay question={questions.Counter.QuestionName} /> 
      <MainDisplay Output={Counter} code={questions.Counter.QuestionAnswer} />
    </div>
  );
};

export default Counters;
