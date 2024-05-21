export const questions = {
    BuildFileExplorer: {
      QuestionLabel: "BuildFileExplorer",
      QuestionName: ` 
      You are tasked with building an Explorer component using React. The Explorer should mimic the functionality of file explorers like those found in VS Code or Windows Explorer. The Explorer component should consist of a tree structure with folders and files.
      
      Your task is to implement a React component that represents the Explorer and allows users to navigate through folders and view files. Additionally, you should style the Explorer to make it visually appealing.
      
      Requirements:
      1. Use React to create a component called Explorer.
      2. The Explorer component should display a tree structure with folders and files.
      3. Users should be able to expand and collapse folders to view their contents.
      4. Clicking on a file should open it or trigger an action (such as displaying its contents).
      5. Ensure that the Explorer supports nested folders (folders within folders).
      6. Style the Explorer to make it visually appealing. You can use CSS or any other styling method of your choice.
      7. Provide basic functionality like creating, renaming, deleting folders and files (optional, but encouraged for enhanced user experience).
      8. Ensure smooth navigation and interaction within the Explorer component.
      
      Example:
      Here's how the Explorer component should behave:
      - Initially, the Explorer displays a root folder with its contents.
      - Users can expand or collapse folders by clicking on them.
      - Clicking on a file opens it or performs an action associated with it.
      - Users can perform basic file management actions like creating, renaming, or deleting folders and files (optional, but encouraged).
      - The Explorer provides a visually appealing and intuitive user interface for navigating through folders and viewing files.
      
        `,
      QuestionAnswer :`  
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
      
      export default Trafficlights;  `
    },
    TrafficLight: {
      QuestionLabel: "TrafficLight",
      QuestionName: ` You are tasked with building a simple traffic light component using React. -The traffic light should consist of three lights: red, yellow, and green.
      The lights should switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations: Red light: 4000ms, Yellow light: 500ms, Green light: 3000ms.
       Your task is to implement a React component that represents the traffic light and switches between these colors based on the specified intervals. Additionally, you should style the traffic light to make it visually appealing. 
       You can use CSS or any other styling method of your choice.  `,
      QuestionAnswer: ` 
      
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
      `
    
    },
    Counter: {
      QuestionLabel: "Counter",
      QuestionName:  `Your task is to build a React component named Counter for a simple counter application. The component should display a number and enable users to interact with it using buttons. Your implementation should meet the following criteria 

      - Initially, the counter should display zero.
      - Users should be able to increment or decrement the counter value by clicking on buttons labeled 'Previous' and 'Next' respectively.
      - Provide an input field labeled 'Step' where users can specify the increment or decrement step value. This value determines how much the counter changes with each click.
      - Include another input field labeled 'Increment Limit' where users can set a maximum value for the counter. If the counter exceeds this limit upon incrementing, prevent further increments and display an alert message stating that the number is too large.
      - Ensure the user interface is visually appealing, with proper spacing, alignment, and clear labeling for input fields and buttons.
      - Consider accessibility to ensure all users can interact with the component effectively.
      - Implement the Counter component using functional components and React hooks for state management.
      - Add comments to your code to explain the functionality of each component part.
      - Develop the Counter component to meet these specifications, and provide the code along with any additional explanations or considerations you think are necessary.      `,
      QuestionAnswer : ` 
      
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
    },
    CheckScrollBarIsMovingUpDown: {
        QuestionLabel: "CheckScrollBarIsMovingUpDown",
     
        QuestionName: "Implement a React component that detects the scroll direction (up or down) and displays it. The component should include a custom hook for scroll detection and should integrate with an existing layout that displays a question and the output of a file explorer.",
        QuestionAnswer :`  import React, { useEffect, useRef, useState } from 'react';
        import MainDisplay from '../MainDisplay';
        import { BuildFileExplorerCode } from '../AllCode';
        import { questions } from '../AllQueAnsData';
        import QuestionDisplay from '../QuestionDisplay';
        
        // Custom hook to detect scroll direction
        const useScrollDetection = () => {
          const [scrollDirection, setScrollDirection] = useState(""); // State to store scroll direction
          const prevScrollY = useRef(0); // Ref to store the previous scroll position
        
          // Effect to add and clean up scroll event listener
          useEffect(() => {
            const handleScroll = () => {
              // Determine scroll direction by comparing current and previous scroll positions
              if (prevScrollY.current > window.scrollY) {
                setScrollDirection("UP"); // Scrolling up
              } else {
                setScrollDirection("DOWN"); // Scrolling down
              }
        
              // Update the previous scroll position
              prevScrollY.current = window.scrollY;
            };
        
            // Add scroll event listener
            window.addEventListener("scroll", handleScroll);
        
            // Clean up event listener on component unmount
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, []); // Empty dependency array to run effect once on mount
        
          return scrollDirection; // Return the scroll direction
        };
        
        // Component to display scroll direction
        const DetectScroll = () => {
          const scrollDetection = useScrollDetection(); // Use the custom hook to get scroll direction
        
          return (
            <>
              {/* Display scroll direction multiple times to ensure it's visible during scrolling */}
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
              <h1>Scroll Direction: {scrollDetection}</h1>
            </>
          );
        };
        
        export default DetectScroll;
        
         `
      
    },
    Counter: {
        QuestionLabel: "Counter",
        QuestionName: "Counter Component",
        QuestionAnswer : `import React, { useState } from "react";
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
export default Counter;

        
        `
      
    },
    Pagination: {
        QuestionLabel: "Pagination",
        QuestionName: "Explain how the pagination logic is implemented in the provided React component. Specifically, describe the role of the SelectPageHandler function and how it interacts with the state to update the displayed products.",
        QuestionAnswer : ` import { useEffect, useState } from "react";
        import { questions } from "../AllQueAnsData";
        import MainDisplay from "../MainDisplay";
        import QuestionDisplay from "../QuestionDisplay";
        
        const Page = () => {
          const [data, setData] = useState([]); // Initialize state to an empty array
          const [page, setPage] = useState(1);
        
          useEffect(() => {
            const url = "https://dummyjson.com/products?limit=100";
        
            fetch(url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                setData(data.products); // Update state with the fetched data
              })
              .catch((error) => {
                console.log(error);
              });
          }, []); // Empty dependency array means this effect runs once after the initial render
        
          const SelectPageHandler = (selectedPage) => {
            const totalPages = Math.ceil(data.length / 10); // Should use data.length instead of products.length
            if (
              selectedPage >= 1 &&
              selectedPage <= totalPages &&
              selectedPage !== page
            ) {
              // Check data.length
              setPage(selectedPage);
            }
          };
        
          return (
            <div className="flex flex-wrap">
              {data.length > 0 && (
                <div className="flex flex-wrap">
                  {data.slice(page * 10 - 10, page * 10).map((pro) => (
                    <div key={pro.id} className="p-4 w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                      <div className="border rounded-lg overflow-hidden">
                        <img
                          className="w-full cursor-pointer h-48 object-cover"
                          src={pro.thumbnail}
                          alt={pro.title}
                        />
                        <h1 className="font-bold text-center mt-2">{pro.title}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              )}
        
              {data.length > 0 && (
                <div className="items-center justify-center relative flex">
                  <span
                    onClick={() => SelectPageHandler(page - 1)}
                    className={
                      "cursor-pointer " + (page === 1 ? "text-gray-400" : "text-black")
                    }
                  >
                    ⬅️
                  </span>
                  <span className="text-white flex">
                    {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
                      <span
                        onClick={() => SelectPageHandler(i + 1)}
                        className={
                          "m-2 rounded items-center justify-center p-2 cursor-pointer " +
                          (page === i + 1
                            ? "bg-gray-50 text-black"
                            : "bg-black text-white")
                        }
                        key={i}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </span>
                  <span
                    onClick={() => SelectPageHandler(page + 1)}
                    className={
                      "cursor-pointer " +
                      (page === Math.ceil(data.length / 10)
                        ? "text-gray-400"
                        : "text-black")
                    }
                  >
                    ➡️
                  </span>
                </div>
              )}
            </div>
          );
        };
        
        
        
        export default Page;
         `
      
    },
    demo: {
      QuestionLabel: "Counter",
      QuestionName: "Counter Component",
      QuestionAnswer : `j `
    }
    

  }
  