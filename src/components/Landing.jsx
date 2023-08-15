import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";  // Removed the incorrect SlowMo import

const Landing = () => {
  const titleRef = useRef(null);
  const infoListRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      titleRef.current,
      { opacity: 0, x: 300, delay: 1 }
    ).to(
      titleRef.current,
      { opacity: 1, x: 0, ease: Power3.easeIn, duration: 1.5, delay: 1 }
    )
    // .from(
    //   infoListRef.current,
    //   { opacity: 0, x: 300, delay: 1 }
    // ).to(
    //   infoListRef.current,
    //   { opacity: 1, x: 0, ease: Power3.easeIn, duration: 1.5, delay: 1 }
    // );
  }, []);

  return (
    <div className="landing ml-[164px] mt-[80px]">
      <div>
        <h1 className="title text-[90px] opacity-0" ref={titleRef}>
          IRMCAS 2023
        </h1>
        <ul className="text-[24px] mt-[45px] opacity-0" ref={infoListRef}>
          <li>Date: 14 October 2023</li>
          <li>Location: Chennai, Tamil Nadu, India</li>
          <li>Hosted by: SRM Institute of Science And Technology</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
