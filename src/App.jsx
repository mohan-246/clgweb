import React, { useEffect, useState, useRef } from "react";
import "./App.css"; // Import your CSS file
import Landing from "./components/Landing";
import Chairman from "./components/Chairman";
import Organising from "./components/Organising";
import Topics from "./components/Topics";
import ConferenceTrack from "./components/ConferenceTrack";
import Lenis from '@studio-freight/lenis'
import { gsap, Power3 } from "gsap";

function App() {
  const [isLoading, setIsLoading] = useState(false); // Set isLoading to true initially
  const s1Ref = useRef();
  const s2Ref = useRef();

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false); // Set isLoading to false when animation completes
      },
    });

    tl.fromTo(
      s1Ref.current,
      { opacity: 0, y: -50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: Power3.easeIn }
    )
      .to(s1Ref.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.5,
        ease: Power3.easeOut,
        delay: 0.9,
      })
      .fromTo(
        s2Ref.current,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, duration: 1.5, scale: 1, ease: Power3.easeIn }
      )
      .to(s2Ref.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.5,
        ease: Power3.easeOut,
        delay: 0.7,
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="h-[100vh] w-[100vw] font-sans relative">
          <p
            className="mx-auto font-[500] text-[4vh] uppercase opacity-0 break-normal text-center centered-axis-x-y"
            ref={s1Ref}
          >
            "Innovations in Real Time Mission Control for Autonomous Systems and
            IoT"
          </p>
          <p
            className="mx-auto font-[500] text-[4vh] uppercase opacity-0 break-normal text-center centered-axis-x-y"
            ref={s2Ref}
          >
            International Conference 2023
          </p>
        </div>
      ) : (
        <>
          <Landing />
          <div id="font">
            <Chairman />
            <Organising />
            <ConferenceTrack />
            <Topics />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
