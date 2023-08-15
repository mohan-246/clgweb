import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

const Landing = () => {
  const titleRef = useRef(null);
  const infoListRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, ease: Power3.easeIn, duration: 1.5 }
    )
      .fromTo(
        infoListRef.current,
        { opacity: 0, x: 300 },
        { opacity: 1, x: 0, ease: Power3.easeIn, duration: 1.5 }
        // Delay the animation by 1 second relative to the previous animation
      );
  }, []);

  return (
    <div className="landing ml-[13vw] mt-[16vh]">
      <div>
        <h1 className="title opacity-0 text-[90px]" ref={titleRef}>
          IRMCAS 2023
        </h1>
        <ul className="text-[24px] opacity-0 mt-[7vh]" ref={infoListRef}>
          <li>Date: 14 October 2023</li>
          <li>Location: Chennai, Tamil Nadu, India</li>
          <li>Hosted by: SRM Institute of Science And Technology</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
