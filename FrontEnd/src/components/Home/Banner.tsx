import React from "react";
import bannerImg from "../../assets/img/bannerImg.svg"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <section className="flex flex-col  items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[30px] md:text-[45px] font-bold max-w-[500px] text-center">
          Organizing your day activity with{" "}
          <span className="text-prime">Todo Daily</span>
        </h1>
        <Button className="bg-prime text-white px-6 text-[15px] md:text-[18px] font-semibold mt-2 hover:bg-prime">
          <Link to={"/user/login"}>Get started</Link>
        </Button>
      </div>
      <div>
        <img src={bannerImg} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Banner;
