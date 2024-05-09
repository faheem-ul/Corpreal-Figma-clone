import Image from "next/image";
import logo from "../../../../public/herologo.png";
function HeroNavbar() {
  return (
    <div className=" parent-div relative pt-7 px-[86px] flex items-center justify-between">
      <div className=" left-side flex gap-[30px] items-center">
        <div className=" logo">
          <Image src={logo} alt="bfwjfiq" />
        </div>
        <div className=" navbar-links text-secondary leading-7 font-dm flex gap-[35px]">
          <p className=" font-mont">WHY WORK WITH US</p>
          <p>SERVICES</p>
          <p>TEAM</p>
          <p>SUBMIT PROPOSAL</p>
        </div>
      </div>
      <div className=" contact-us">
        <button className=" bg-[#00297A] rounded-[40px] px-[30px] py-[7px] leading-7 font-dm text-secondary">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default HeroNavbar;
