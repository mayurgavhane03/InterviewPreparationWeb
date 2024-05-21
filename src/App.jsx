import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import TrafficLights from './Components/AllQuestions/TrafficLights';
import Counters from './Components/AllQuestions/Counter';
import NavBar from './Components/NavBar';
import TypeofCourse from './Components/TypeofCourse';
import Sample from './Components/CodeComponents/sample';
import FrontPage from './Components/FrontPage';
import BuildFileExplorer from './Components/AllQuestions/BuildFileExplorer';
import AdminDashboard from './Components/AdminDashboard';
import CheckScrollBarIsMovingUpDown from './Components/AllQuestions/CheckScrollBarIsMovingUpDown';
import Pagination from './Components/AllQuestions/Pagination';

function App() {
  return (
    <>
      <NavBar />
      <TypeofCourse />
      <div className="flex bg-gray-400">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/react/react1" element={<TrafficLights />} />
            <Route path="/react/react2" element={<Counters />} />
            <Route path="/react/react3" element={<BuildFileExplorer />} />
            <Route path="/react/react4" element={<CheckScrollBarIsMovingUpDown />} />
            <Route path="/react/react5" element={<Pagination />} />
      

            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/javascript/javaScript1" element={<TrafficLights   />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
