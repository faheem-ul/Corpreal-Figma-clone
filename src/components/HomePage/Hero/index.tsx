import Image from "next/image";

import HeroNavbar from "../Navbar";
import arrow from "../../../../public/Arrow 1.svg";

function Hero() {
  return (
    <div className=" relative">
      <video
        src="/Blue DNA Gradient Video mp4.mp4"
        muted
        loop
        autoPlay
        className=" absolute object-cover h-[820px] w-[100vw] mob:h-auto mob:w-auto"
      />
      <HeroNavbar />

      {/* hero content */}

      <div className=" relative  mx-[86px] mt-[77px] parent-div max-w-[585px] ">
        <h1 className=" heading text-secondary leading-[48px] font-mont">
          Empowering Innovations in Healthcare, HealthTech, and Life Sciences
        </h1>
        <p className=" para-div leading-[22.4px] font-mont text-secondary py-6">
          We transform groundbreaking ideas into market-leading solutions with
          tailored expertise and a unique, cross-border acceleration platform
          that utilizes our industry connections, funding avenues, and
          government mandates.
        </p>
        <div className=" footer-div flex gap-6 items-center">
          <button className=" bg-[#00297A] rounded-[40px] px-[30px] py-[7px] leading-7 font-dm text-secondary">
            CONTACT US
          </button>
          <div className=" flex items-center gap-[7px]">
            <p className=" leading-7 text-secondary font-dm">WHAT WE OFFER</p>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
