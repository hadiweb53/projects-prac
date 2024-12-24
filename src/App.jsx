import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Info from "./Navbar";
import Model from "./Model";
import Page2 from "./Page2";
import Cursor2 from './assets/Cursor/Cursor2'
import CanvasCursor from './assets/Cursor/CanvasCursor'
// import Page3 from './Page3'
const FoldingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll(".letter");

      gsap.fromTo(
        letters,
        { rotationX: -90, opacity: 0, transformOrigin: "top center" },
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",

          repeat: -1, 
          yoyo: true, 
          repeatDelay: 0.5,
        }
      );
    }
  }, []);

  return (
      <>
    <div ref={textRef} className="folding-text  " style={{ display: "flex",  }}>
      {"HADI'S WEBSITE".split("").map((char, index) => (
     <span
     key={index}
     className="letter"
     style={{
       display: "inline-block",
       fontSize: "4rem",
       color: "#141414",
       margin: "20px",
       marginTop: "70px",
      //  fontFamily: "'Roboto', sans-serif",
      
      }}
   >
     {char}
   </span>
   
     
    ))}
    <Info/>
    </div>
     <Model/>
     <CanvasCursor />
     <Cursor2/>
     <Page2/>
     {/* <Page3/> */}
     </>
  );
};

export default FoldingText;
