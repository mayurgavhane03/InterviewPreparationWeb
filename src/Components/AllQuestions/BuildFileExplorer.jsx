import React, { useState } from "react";
import ReactInterviewQuestion from "../question";
import Counters from "./Counter";
import { BuildFileExplorerCode, CountersCode } from "../AllCode";
import QuestionDisplay from "../QuestionDisplay";
import MainDisplay from "../MainDisplay";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

// The Explorer component is a recursive component that displays a file explorer tree structure.
const Explorer = ({ data }) => {
  // useState hook to manage the expand/collapse state of a folder.
  const [expand, setExpand] = useState(false);

  return (
    <div>
      {/* The folder name is displayed here. Clicking on the name toggles the expand state. */}
      <p className="flex" onClick={() => setExpand(!expand)}>
        {/* Display a caret icon if the item is a folder. Change icon based on expand state. */}
        {data.isFolder ? (expand ? <FaCaretDown /> : <FaCaretRight />) : null}
        {data.name}+
      </p>
      {/* If the item is a folder and it's expanded, recursively render its children. */}
      {data.isFolder && expand && (
        <div className="ml-10">
          {data.items.map((childItem) => (
            <Explorer key={childItem.name} data={childItem} />
          ))}
        </div>
      )}
    </div>
  );
};

// The FileExplorer component initializes the file structure and passes it to the Explorer component.
const FileExplorer = () => {
  // Define the file structure with nested folders and files.
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
      {
        name: "package.json",
        isFolder: false,
      },
    ],
  };

  return (
    <div className="mt-[100px] text-5xl">
      {/* Render the Explorer component with the defined file structure. */}
      <Explorer data={fileData} />
    </div>
  );
};

// The BuildFileExplorer component integrates the file explorer with other components and displays the question and main display.
const BuildFileExplorer = () => {
  return (
    <div className="ml-[200px]">
      {/* Display the interview question related to building a file explorer. */}
      <QuestionDisplay question={ReactInterviewQuestion.BuildFileExplorer} />
      {/* Main display component that shows the output of the FileExplorer and the corresponding code. */}
      <MainDisplay Output={FileExplorer} code={BuildFileExplorerCode} />
    </div>
  );
};

export default BuildFileExplorer;
