import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Landing = () => {
  const titleRef = useRef(null);
  const infoListRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1.2 }
    )
      .fromTo(
        infoListRef.current,
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0 , duration: 1.2 },
        // Delay the animation by 1 second relative to the previous animation
      );
  }, []);

  return (
    <div className="landing ml-[13vw] mt-[16vh]">
    
      <div>
        <h1 className="title opacity-0 text-[14vh]" ref={titleRef}>
          IRMCAS 2023
        </h1>
        <ul className="text-[3.9vh] opacity-0 mt-[7vh]" ref={infoListRef}>
          <li>Date: 14 October 2023</li>
          <li>Location: Chennai, Tamil Nadu, India</li>
          <li>Hosted by: <a className="hover:text-[#000000] hover:opacity-[0.7]" href="https://goo.gl/maps/eMjwbkXkzfcMSm6VA">SRM Institute of Science And Technology</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
