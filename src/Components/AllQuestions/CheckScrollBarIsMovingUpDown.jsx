import React, { useEffect, useRef, useState } from 'react'
import MainDisplay from '../MainDisplay';
import { questions } from '../AllQueAnsData';
import QuestionDisplay from '../QuestionDisplay';

const useScrollDetection = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const prevScrollY = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    prevScrollY.current > window.scrollY
      ? setScrollDirection("UP")
      : setScrollDirection("DOWN");

    prevScrollY.current = window.scrollY;
  };

  return scrollDirection;
};



const DetectScroll =() =>{
  const scrollDetection =  useScrollDetection();
  return (
    <>

<h1 className='text-3xl mb-5 font-bold '>Now Scoll Up and Down</h1>
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
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    <h1>Scroll Direction: {scrollDetection}</h1>
    
    </>
  )
}
 

const CheckScrollBarIsMovingUpDown = () => {
  return (
    <div className="ml-[200px]">
    
      {/* Display the interview question related to building a file explorer. */}
      <QuestionDisplay question={questions.CheckScrollBarIsMovingUpDown.QuestionName} />
      {/* Main display component that shows the output of the FileExplorer and the corresponding code. */}
      <MainDisplay Output={DetectScroll} code={questions.CheckScrollBarIsMovingUpDown.QuestionAnswer}/>
    </div>
  )
}

export default CheckScrollBarIsMovingUpDown
