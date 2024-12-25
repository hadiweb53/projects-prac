import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function TextReveal() {
    gsap.registerPlugin(ScrollTrigger);
    const text1 = useRef(null);
    const text2 = useRef(null);

    useEffect(() => {
        gsap.to(text1.current, {
            scrollTrigger: {
                trigger: text1.current,  // Trigger the animation when text1 comes into view
                start: "top 120%",         // Start when the top of text1 reaches 80% of the viewport height
                end: "bottom 20%",        // End when the bottom of text1 reaches 20% of the viewport height
                scrub: true,
                markers:true,              // Use smooth scrubbing for more fluid animation
            },
            x: '220',                     // Move text1 200px to the right
            ease: "power2.out",           // Smooth ease-out easing for better scroll animation
        });

        // Animate text2 with opposite horizontal movement on scroll
        gsap.to(text2.current, {
            scrollTrigger: {
                trigger: text2.current,  // Trigger the animation when text2 comes into view
                start: "top 170%",        // Start when the top of text2 reaches 100% of the viewport height
                end: "bottom 20%",        // End when the bottom of text2 reaches 20% of the viewport height
                scrub: true,   
                markers:true,           // Smooth scrubbing
            },
            x: '-350',                    // Move text2 400px to the left (opposite direction of text1)
            ease: "power2.out",           // Smooth ease-out easing
        });
    }, []);

    return (
        <div className="relative text-9xl text-white h-screen w-screen bg-[#141414]">
            <h1
                ref={text1}
                className="relative z-[100] left-5 font-bold"
    
            >
                Great Experiences
            </h1>
            <h1
                ref={text2}
                className="relative left-[420px] font-bold"
            >
                Build Loyalty
            </h1>

            <p className="text-xl w-[500px] relative left-[800px] top-10 z-[100]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, consectetur provident nihil minima facilis quia sed fugiat commodi consequatur dicta fuga iste consequuntur possimus suscipit a sapiente doloremque debitis inventore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas reiciendis aliquid quam praesentium quae eaque odio explicabo laborum? Tempore repellat illum non eius necessitatibus aliquid tempora inventore minima molestias error!
            </p>
        </div>
    );
}

export default TextReveal;
