import Animation from "./animation";

function AnimationSection() {
  return (
    <div className="parent-div relative mt-[400px] flex justify-center items-center">
      <div className=" relative max-w-[877px]">
        <h1 className="text-center">
          EEE Integrates Your Life Science Project within the US/UK Market with
          initial report in as short  a time as 6-8 Weeks
        </h1>
        <p className=" leading-[22.4px] font-mont text-[#424242] text-center pt-6 pb-[81px]">
          As the only private company mandated to bridge innovative healthcare
          projects, talent and funding among the NHS (UK), and Henry M. Jackson
          Foundation (US), to one another, we have all the in-house expertise to
          act as a one stop shop and invest privately also in intriguing
          opportunities ourselves subject to relevant and appropriate consents
          received.
        </p>
        <Animation />
      </div>
    </div>
  );
}

export default AnimationSection;
