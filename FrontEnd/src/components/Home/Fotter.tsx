import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import icon from "../../assets/img/icon.svg";

const Fotter: React.FC = () => {
  return (
    <footer className=" flex flex-wrap gap-4 items-center justify-between border-t-2 py-4 border-prime mb-3">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <img src={icon} />
          <p className="w-[245px] font-normal text-[15px] md:text-[18px] ">
            Let's change your habit join with million people
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="w-[245px] font-bold text-[15px] mb-[-10px] ">
            AS Tech Company
          </p>
          <p className="w-[245px] font-normal text-[13px] ">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <Link to={"/"}>
          <img src={logo} className="w-[220px]" />
        </Link>
      </div>
    </footer>
  );
};

export default Fotter;
