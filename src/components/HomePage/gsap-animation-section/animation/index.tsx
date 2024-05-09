"use client";

import React, { useRef } from "react";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Animation() {
  const ref1 = useRef(null);
  const tl = gsap.timeline();

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     tl.to(".scroll-test", {
  //       y: -900,
  //       scrollTrigger: {
  //         trigger: ".parent",
  //         start: "center center",
  //         end: "bottom top",
  //         scrub: 1,
  //         markers: true,
  //         pin: true,
  //         pinSpacing: true,
  //       },
  //     });
  //     tl.to(".scroll-2", {
  //       y: -900,
  //       scrollTrigger: {
  //         trigger: ".scroll-2",
  //         start: "center center",
  //         end: "bottom top",
  //         scrub: 1,
  //         markers: true,
  //         pin: true,
  //         pinSpacing: true,
  //       },
  //     });
  //   }, ref1);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={ref1} className="parent">
      <div className=" scroll-1 bg-[#00297A] max-w-[509px] m-auto flex justify-center rounded-[30px] rotate-[-3.2deg]">
        <div>
          <h2 className=" pt-12 max-w-[411px] ">
            Innovation Assessment & Strategy:
          </h2>
          <p className=" text-[#C0C0C0] font-mont pt-4 max-w-[411px] pb-[104px]">
            Rigorous evaluation and strategic guidance to align your project
            with market needs.
          </p>
        </div>
      </div>
      <div className=" scroll-2 bg-[#00297A] max-w-[509px] m-auto flex justify-center rounded-[30px]  right-1 bottom-[280px] rotate-[.2deg] border-2">
        <div>
          <h2 className=" pt-12 max-w-[411px] ">
            Innovation Assessment & Strategy 2:
          </h2>
          <p className=" text-[#C0C0C0] font-mont pt-4 max-w-[411px] pb-[104px]">
            Rigorous evaluation and strategic guidance to align your project
            with market needs.
          </p>
        </div>
      </div>

      <div className=" scroll-test bg-[#00297A] max-w-[509px] m-auto flex justify-center rounded-[30px]  right- bottom-[530px] rotate-[2.2deg] ">
        <div>
          <h2 className=" pt-12 max-w-[411px] ">
            Innovation Assessment & Strategy 3:
          </h2>
          <p className=" text-[#C0C0C0] font-mont pt-4 max-w-[411px] pb-[104px]">
            Rigorous evaluation and strategic guidance to align your project
            with market needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Animation;
