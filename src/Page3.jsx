import React, { useState } from 'react';
import TextReveal from './TextReveal';

const HoverWidthDivs = () => {
  const [isFirstDivHovered, setIsFirstDivHovered] = useState(false);
  const [isSecondDivHovered, setIsSecondDivHovered] = useState(false);

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 z-[100]">
      <div className="flex space-x-[20px]">
        <div 
          className={`
            bg-blue-500  flex items-center z-[100] justify-center text-white 
            transition-all duration-500 ease-in-out
            ${isSecondDivHovered ? 'w-[100px]' : 'w-[400px]'}
            ${isFirstDivHovered ? 'w-[300px]' : 'w-[400px]'}
          `}
          onMouseEnter={() => {
            setIsFirstDivHovered(true);
            setIsSecondDivHovered(false);
          }}
          onMouseLeave={() => setIsFirstDivHovered(false)}
        >
          Hover me (First Div)
        </div>
        <div 
          className={`
            bg-red-500 h-[400px] flex items-center z-50 justify-center text-white 
            transition-all duration-500 ease-in-out
            ${isFirstDivHovered ? 'w-[100px]' : 'w-[400px]'}
            ${isSecondDivHovered ? 'w-[300px]' : 'w-[400px]'}
          `}
          onMouseEnter={() => {
            setIsSecondDivHovered(true);
            setIsFirstDivHovered(false);
          }}
          onMouseLeave={() => setIsSecondDivHovered(false)}
        >
          Hover me (Second Div)
        </div>
      </div>
    </div>
    <TextReveal/>
    </>
  );
};

export default HoverWidthDivs;