import  { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Initialize ScrollTrigger

const Chairman = () => {
  gsap.registerPlugin(ScrollTrigger);
 
  useEffect(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.chairman', // Use the appropriate trigger selector
        start: 'top 80%', // Adjust as needed
        scrub: false,
        markers: false, // Use true for debugging
      },
    });

    // Animate the list items
    timeline.fromTo(
      '.chairlist strong',
      {
        opacity: 0,
        y: 20,
        stagger: 0.2, // Adjust as needed for stagger effect
      },
      {
        opacity: 1,
        y: 0,
      }
    ).fromTo(
      '.chairlist p',
      {
        opacity: 0,
        y: 20,
        stagger: 0.2, // Adjust as needed for stagger effect
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <div className="chairmanhead mx-[3vh]">
      <h1 className="head font-bold uppercase text-center m-[3vh]">Chairman</h1>

      <ul className="chairman">
        <li className="chairlist text-center ">
          <strong className="m-2"> Maj. Dr. M Venkataramanan</strong>
          <p>Dean, College of science and Humanities</p>
          {/* <img className="organimg" src=" " /> */}
        </li>
        <li className="chairlist text-center ">
          <strong className="m-2"> Dr. V. Saravanan </strong>
          <p>Professor & Head - B.Sc CS Vice Prinicipal (Academics) - S&H</p>
          {/* <img className="organimg"  src=" " /> */}
        </li>
        <li className="chairlist text-center ">
          <strong className="m-2"> Dr. J. Dhilipan </strong>
          <p>Professor & Head - MCA Vice Prinicipal (Admin) - S&H</p>
          {/* <img  className="organimg"  src=" " /> */}
        </li>
      </ul>
    </div>
  );
};

export default Chairman;
