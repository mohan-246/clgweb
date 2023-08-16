import {useEffect} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Organising = () => {

  gsap.registerPlugin(ScrollTrigger);
 
  useEffect(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.organising-container', // Use the appropriate trigger selector
        start: 'top 80%', // Adjust as needed
        scrub: false,
        markers: false, //Use true for debugging
      },
    });

    // Animate the list items
    timeline.fromTo(
      '.cover strong',
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
      '.cover p',
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
      <div>
        {" "}
        <div className="organ organising-container">
          <h1 className=" font-bold uppercase m-[3vh]">Organising Secretary/Convener</h1>
          <div className="organ cover">
            
              <strong className="m-2">Dr. R. Ramyadevi</strong>
              <p>Assistant Professor, Department of Computer Science & Applications</p>
              {/* <img className="organimg" src="" /> */}
            
          </div>
        </div>
      </div>
    );
  
};

export default Organising;
