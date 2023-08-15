import React, { useEffect, useState, useRef } from "react";
import "./App.css"; // Import your CSS file
import Landing from "./components/Landing";
import Chairman from "./components/Chairman";
import Organising from "./components/Organising";
import Topics from "./components/Topics";
import ConferenceTrack from "./components/ConferenceTrack";
import { gsap, Power3 } from "gsap";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const s1Ref = useRef();
  const s2Ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      s1Ref.current,
      { opacity: 0, y: -300 },
      { opacity: 1, y: 0, duration: 1.5, ease: Power3.easeIn }
    )
      .to(s1Ref.current, { opacity: 0, y: 300, duration: 1.5, ease: Power3.easeIn, delay: 0.5 })
      .fromTo(
        s2Ref.current,
        { opacity: 0, y: -300 },
        { opacity: 1, y: 0, duration: 1.5, ease: Power3.easeIn } // Introduce a delay of 1 second before the animation starts
      )
      .to(s2Ref.current, { opacity: 0, y: 300, duration: 1.5, ease: Power3.easeIn, delay: 0.5 })
      .eventCallback("onComplete", () => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="h-full w-full font-sans relative">
          <p
            className="text-black mx-[120px] font-[500] text-[25px] uppercase opacity-0 break-normal text-center absolute left-0 right-0 top-64"
            ref={s1Ref}
          >
            "Innovations in Real Time Mission Control for Autonomous Systems and IoT"
          </p>
          <p
            className="text-black mx-[120px] font-[500] text-[25px] uppercase opacity-0 break-normal text-center absolute left-0 right-0 top-64 "
            ref={s2Ref}
          >
            International Conference 2023
          </p>
        </div>
      ) : (
        <>
          <Landing />
          <Chairman />
          <Organising />
          <Topics />
          <ConferenceTrack />
        </>
      )}
    </div>
  );
}

export default App;
