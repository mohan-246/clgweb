import  { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Topics = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const scrollAnimateElements = gsap.utils.toArray(".topic-item");
  
    scrollAnimateElements.forEach((scrollAnimateElement, index) => {
      const imgRef = scrollAnimateElement.querySelector(".bg-image");
      const animationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollAnimateElement,
          start: "top 80%",
          end: "bottom 20%",
          markers: false,
          scrub: false,
        },
      });
  
      // Animate image
      animationTimeline.fromTo(
        imgRef,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1 }
      );
  
      // Animate heading
      animationTimeline.fromTo(
        scrollAnimateElement.querySelector("h1, h2, h3"),
        { y:30 , opacity: 0 },
        { y:0, opacity: 1 },0.4
      );
  
      // Animate p elements
      animationTimeline.fromTo(
        scrollAnimateElement.querySelectorAll("p"),
        { y:30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0 },0.5
      );
  
      // Animate ol elements
      animationTimeline.fromTo(
        scrollAnimateElement.querySelectorAll("ol"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0 },0.6
      );
    });
  }, []);
  

  return (
    <div className="topic mx-auto max-w-screen-xl p-4 topic-container overflow-hidden">
      {/* Topic 1 */}
      <div className="topic-1 topic-item flex flex-col md:flex-row items-center justify-center my-10">
        {/* Placeholder image for Topic 1 */}
        <div
          className="imgout1 md:w-1/3 bg-cover bg-center h-[40vh] rounded-md md:mr-[4vh] mb-4 md:mb-0 bg-image"
          style={{ backgroundImage: 'url("./p1.jpg")' }}
          ref={img1Ref}
        ></div>
        {/* Content for Topic 1 */}
        <div className="content-1 md:w-2/3">
          <h1 className="th1-1 text-xl font-semibold mb-4 uppercase">
            Topics being covered
          </h1>
          <p className="py-3">
            {/* Content for Topic 1: Paragraph */}
            The conference will explore real-time mission control and autonomous
            systems, covering technology, methodologies, challenges,
            applications, and welcoming recent research developments.
          </p>
          <ol className="tlist-1 list-decimal pl-4">
            {/* Content for Topic 1: List items */}
            <li>Real-time data analytics for autonomous systems.</li>
            <li>IoT-enabled mission control system applications.</li>
            <li>Advances in autonomous navigation and control algorithms.</li>
            <li>Cybersecurity challenges in autonomous systems and IoT.</li>
            <li>Human-machine interaction in mission control systems.</li>
          </ol>
        </div>
      </div>

      {/* Topic 2 */}
      <div className="topic-2 topic-item flex flex-col md:flex-row items-center justify-center my-10 ">
        {/* Content for Topic 2 */}
        <div className="content-2 md:w-2/3">
          <h2 className="th1-2 text-xl font-semibold mb-4 uppercase">
            Relevance and Importance of the Topics in the Context of National
            Needs
          </h2>
          <p className="py-3">
            {/* Content for Topic 2: Paragraph */}
            The topics covered in the conference, "Advancements in Real-Time
            Mission Control and Autonomous Systems," hold great relevance and
            importance in the context of national needs for several reasons:
          </p>
          <ol className="tlist-2 list-decimal pl-4">
            {/* Content for Topic 2: List items */}
            <li>
              Technological Innovation: Drives economic growth, competitiveness,
              and societal progress.
            </li>
            <li>
              National Security: Implications for safeguarding critical
              infrastructure and data privacy.
            </li>
            <li>
              Human-Machine Interface: Crucial for effective mission control and
              user experience.
            </li>
            <li>
              Safety and Reliability: Ensuring safe and dependable operations.
            </li>
            <li>
              Infrastructure and Urban Development: Improving efficiency and
              sustainability.
            </li>
          </ol>
        </div>
        {/* Placeholder image for Topic 2 */}
        <div
          className="imgout2 md:w-1/3 bg-cover bg-center h-[40vh] rounded-md md:ml-[4vh] mb-4 md:mb-0 bg-image"
          style={{ backgroundImage: 'url("./p2.jpg")' }}
          ref={img2Ref}
        ></div>
      </div>

      {/* Topic 3 */}
      <div className="topic-1 topic-item flex flex-col md:flex-row items-center justify-center my-10">
        {/* Placeholder image for Topic 3 */}
        <div
          className="imgout3 md:w-1/3 bg-cover bg-center h-[40vh] rounded-md md:mr-[4vh] mb-4 md:mb-0 bg-image"
          style={{ backgroundImage: 'url("./p3.jpg")' }}
          ref={img3Ref}
        ></div>
        {/* Content for Topic 3 */}
        <div className="content-3 md:w-2/3">
          <h2 className="th1-3 text-xl font-semibold mb-4 uppercase">
            Relevance and Importance of the Topics to ISRO
          </h2>
          <p className="py-3">
            {/* Content for Topic 3: Paragraph */}
            The conference serves as a platform for collaboration and networking
            among researchers, experts, and industry professionals working in
            the field of real-time mission control and autonomous systems.
          </p>
          <ol className="tlist-3 list-decimal pl-4">
            {/* Content for Topic 3: List items */}
            <li>
              Real-time Mission Control Systems: Monitoring and managing space
              missions.
            </li>
            <li>
              Autonomous Systems in Space Exploration: Crucial role in space
              exploration and satellite operations.
            </li>
            <li>
              Technical Needs: Addressing verification, validation, testing, and
              cybersecurity.
            </li>
            <li>
              Sharing Innovations: Platform for sharing innovative ideas and
              advancements.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Topics;
