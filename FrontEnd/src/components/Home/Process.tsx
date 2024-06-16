import React from "react";
import ImgText from "../ReUse/imgText"; // Capitalized component name convention
import smallTaskImg from "../../assets/img/smallTaskImg.svg";
import writeItImg  from "../../assets/img/writeItImg.svg";
import doItImg  from "../../assets/img/doItImg.svg";
import repeatImg  from "../../assets/img/repeatImg.svg";

const Process: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-[30px] md:text-[45px] font-bold max-w-[500px] text-center">
        Don’t let your day doing nothing
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-2 w-full max-w-[800px] mt-4">
        <ImgText txt="Small Task" img={smallTaskImg} />
        <ImgText txt="Write It" img={writeItImg} />
        <ImgText txt="Do It" img={doItImg} />
        <ImgText txt="Repeat" img={repeatImg} />
      </div>
    </section>
  );
};

export default Process;

