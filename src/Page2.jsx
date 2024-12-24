import React, { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function Page2() {
  
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const image = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const Container = useRef(null);
  useLayoutEffect(()=>{
   let ctx = gsap.context(()=>{
    ScrollTrigger.create({
      trigger:bg1.current,
      pin:bg1.current,
      pinSpacing:false,
      start:"top top",
      endTrigger:".last",
      end :"bottom bottom ",

    })
    gsap.set(Container.current,{marginTop: -(Container.current.offsetHeight)})
    gsap.timeline({
    scrollTrigger:{
      trigger:img_container.current,
      pin:img_container.current,
      start:"0% 0%",
      scrub:1,
    }
    })
    .to(image.current,{transform:'translateZ(2200px)'})
    .to(text1.current, {y:-800},0.05,"<")
    .to(text2.current, {y:-800},0.08,"<")
    .fromTo(Container.current, 
      {yPercent:  100 ,  scaleY: 2},
      {yPercent:  0   ,     scale: 1 })
  })
   return ()=> ctx.revert();
  },[])
  return (
  <>
  <div className='relative'>
    <div ref={bg1} className="bg bg-[#141414] absolute h-screen w-screen  z-[-1]"></div>
    <section>
  <div  ref={img_container} className='img-container perspective flex mt-[400px]  justify-center items-center h-screen w-screen'>
      <img ref={image}  className='image' src='public/pool.jpg' alt="" />
      <div className='text-white absolute flex flex-col item-center justify-center'>
        <h1 ref={text1} className='text-[130px] Kalnia '>
          <span className='text-stroke '>OutLook</span> Above
        </h1>
        <p  ref={text2} className=' relative opacity-50 left-[320px] text-white '>A showcase of the world's best <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; aerial photography </p>
      </div>
      </div>
      <div ref={Container} className="container py-12 flex flex-wrap items-center justify-around  ">
        <div className="col-1 flex flex-col gap-16  translate-y-[30%] pb-8">
          <img className='w-[450px] h-[350px]' src="public/table.jpeg" alt="" />
          <img className='w-[450px] h-[400px]' src="public/gsap.jpg" alt="" />
        </div>
        <div   className="col-2 flex flex-col gap-16">
        <img   className='w-[600px] h-[400px]' src="public/shoe.jpg" alt="" />
        <img   className='w-[450px] h-[400px] last'   src="public/house.jpg" alt="" />
        </div>
      </div>
    </section>
  </div>
  </>
  )
}

export default Page2

















































































// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import SplitType from 'split-type';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Page2 = () => {
//   const textContainerRef = useRef(null); // Ref for the text container

//   useEffect(() => {
//     // Split the text into lines and words
//     const splitText = new SplitType('.split-word', {
//       types: 'lines, words',
//     });

//     // Get the words and create animation
//     const words = document.querySelectorAll('.word');

//     // Set initial state for words
//     gsap.set(words, {
//       opacity: 0,
//       x: -50, // Position the text slightly to the left
//     });

//     // GSAP animation for scroll effect
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '.split-word',
//         start: 'top 90%', // When text is slightly above the viewport
//         end: 'bottom 70%', // When the text is mostly out of the viewport
//         scrub: 1, // Smooth transition with scrolling
//         markers: true, // Debugging markers (remove in production)
//       },
//     }).to(words, {
//       x: 0, // Move to original position
//       opacity: 1, // Fully visible
//       duration: 1,
//       stagger: 0.2, // Stagger animation for each word
//     });

//     // Cleanup SplitType instances on component unmount
//     return () => {
//       splitText.revert();
//     };
//   }, []);

//   return (
//  <div
//   ref={textContainerRef}
//   className="page-text split-word text-8xl text-white font-bold bg-[#078a92] mt-[400px] flex items-center justify-center h-screen z-40"
// >
//   <span className="mb-[300px] ml-8">My name is Abdul Hadi</span>
//   <span className="mt-[300px] relative">
//     I am a Three.js <span className="absolute left-20"> Developer </span>
//   </span>
// </div>

//   );
// };

// export default Page2;
