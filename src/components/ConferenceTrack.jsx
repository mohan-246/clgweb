import  { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ConferenceTrack = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  
 
  useEffect(() => {

  
    const scrollAnimateElements = gsap.utils.toArray(".scrollAnimate1");

    scrollAnimateElements.forEach((scrollAnimateElement) => {
      const h3Element = scrollAnimateElement.querySelector("h3");
      const ulElement = scrollAnimateElement.querySelector(".conf-ul");
      const liElements = ulElement.querySelectorAll("li");

      const animationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollAnimateElement,
          start: "top 80%",
          end: "bottom 20%",
          markers: false, // Use true for debugging
          scrub: false,
        },
      });

      animationTimeline.fromTo(
        h3Element,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
        }
      );

      animationTimeline.fromTo(
        liElements,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );
    });
  }, []);
  
   return ( < >
      <h2 className=" font-bold uppercase m-[3vh] text-center">
        Conference Tracks
      </h2>
      <div className="conference-section mx-[15vw] overflow-x-hidden">
        <div className="conference-container w-full">

          {/* Real-Time Data Processing and Analysis */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Real-Time Data Processing and Analysis:
            </h3>
            <ul className="conf-ul">
              <li>
                Techniques for real-time data collection, processing, and
                analysis in mission control systems.
              </li>
              <li>
                Streaming data analytics and machine learning algorithms for
                autonomous systems and IoT.
              </li>
              <li>
                Real-time visualization and decision-making tools for mission
                control.
              </li>
            </ul>
          </div>

          {/* Autonomy and Intelligent Systems */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Autonomy and Intelligent Systems:
            </h3>
            <ul className="conf-ul">
              <li>
                Advances in autonomous systems and robotics for mission control
                applications.
              </li>
              <li>
                AI-based techniques for autonomous decision-making and control.
              </li>
              <li>
                Sensor fusion and perception algorithms for intelligent systems.
              </li>
              <li>
                Human-robot interaction and collaboration in mission control.
              </li>
            </ul>
          </div>

          {/* Communication and Networking */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Communication and Networking:
            </h3>
            <ul className="conf-ul">
              <li>
                Real-time communication protocols and network architectures for
                mission control systems.
              </li>
              <li>
                Reliable and secure data transmission in heterogeneous IoT
                environments.
              </li>
              <li>
                Edge computing and fog computing for mission control
                applications.
              </li>
              <li>Integration of 5G and satellite communication networks.</li>
            </ul>
          </div>

          {/* Cybersecurity and Privacy */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Cybersecurity and Privacy:
            </h3>
            <ul className="conf-ul">
              <li>
                Security challenges and solutions in autonomous systems and IoT.
              </li>
              <li>
                Threat detection and mitigation strategies for mission control
                systems.
              </li>
              <li>
                Privacy-preserving techniques for sensitive data in mission
                control.
              </li>
              <li>
                Secure communication protocols and authentication mechanisms.
              </li>
            </ul>
          </div>

          {/* Mission Planning and Optimization */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Mission Planning and Optimization:
            </h3>
            <ul className="conf-ul">
              <li>
                Real-time mission planning algorithms for autonomous systems.
              </li>
              <li>
                Optimization techniques for resource allocation and task
                scheduling.
              </li>
              <li>
                Multi-objective optimization in mission control operations.
              </li>
              <li>
                Adaptive and dynamic planning approaches for changing mission
                requirements.
              </li>
            </ul>
          </div>

          {/* Keynote Presentations */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Keynote Presentations:
            </h3>
            <ul className="conf-ul">
              <li>
                Prominent researchers and industry experts sharing insights on
                real-time mission control and IoT innovations.
              </li>
            </ul>
          </div>

          {/* Research Paper Presentations */}
          <div className="scrollAnimate1">
            {" "}
            <h3 className=" font-semibold ml-0 m-[1vh] ">
              Research Paper Presentations:
            </h3>
            <ul className="conf-ul">
              <li>
                Researchers presenting their latest findings and innovations in
                the field of real-time mission control and autonomous systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConferenceTrack;
