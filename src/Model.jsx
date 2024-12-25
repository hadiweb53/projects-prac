import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
// import {Page2} from './Page2'
const Model = () => {
  const { scene } = useGLTF('src/files/public/late_night_lessions.glb');
  const modelRef = useRef(null);
  const animationCompleteRef = useRef(false); // Tracks the completion of the first animation
  const targetRotation = useRef({ x: 0, y: 0 }); // Target rotation values

  const handlePointerMove = (event) => {
    if (animationCompleteRef.current) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate normalized values for rotation
      const x = (clientX - centerX) / centerX; // Range: -1 to 1
      const y = (clientY - centerY) / centerY; // Range: -1 to 1

      // Update target rotation
      targetRotation.current = {
        x: y * 0.6,
        y: x * 0.4,
      };
    }
  };

  useEffect(() => {
    if (modelRef.current) {
      // First animation: movement, scaling, and 360° rotation on x-axis
      gsap.fromTo(
        modelRef.current.position,
        { z: -8 },
        {
          z: -3,
          duration: 1,
          scale: 0.1,
          ease: 'power2.out',
        }
      );

      // Rotate 360° during the same animation
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2, // 360 degrees
        duration: 1, // Match the duration of the position animation
        ease: 'power2.out',
        onComplete: () => {
          animationCompleteRef.current = true; // Mark the first animation as complete
        },
      });
    }
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // Smoothly interpolate rotation after initial animation
      modelRef.current.rotation.x +=
        (targetRotation.current.x - modelRef.current.rotation.x) * 0.1; // Adjust the multiplier for smoother or faster effect
      modelRef.current.rotation.y +=
        (targetRotation.current.y - modelRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[0, -2, -8]}
      onPointerMove={handlePointerMove} // Attach event to model
    />
  );
};

const App = () => {
  return (
    <>
    <div>
      <div className="wrapper" href="#home">
        <span className='font-semibold'>Home</span>
      </div>
      <div className="absolute w-96 left-5">
        <h1 className="portfolio text-3xl font-bold text-[#141414] ">Welcome To My Portfolio</h1>
        <span className="text-xl font-sans">
          where I showcase my passion for architectural design and 3D modeling.
          At the heart of this collection lies a 3D representation of a modern
          home, meticulously crafted to highlight both form and function. The
          house serves as a central focal point, demonstrating my skills in
          creating detailed, realistic, and immersive architectural
          visualizations.
        </span>
      </div>
      <Canvas
      style={{
        position: 'absolute',
        top: '40px', // Updated to 10px from the top
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
      }}
      
        onPointerMove={(e) => e.stopPropagation()} // Prevent Canvas events from affecting model rotation
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, -5]}
          castShadow={true}
        />
        <Environment
          files="src/files/public/HDR_112_River_Road_2_Env.hdr"
          background={false}
        />
        <Model />
      </Canvas>
      </div>
      {/* <Page2/> */}
    </>
  );
};

export default App;
