import React from "react";
import Achieve from "@/components/Home/Achieve";
import Banner from "@/components/Home/Banner";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Fotter"
import Process from "@/components/Home/Process";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="max-w-[1140px] w-full  mx-auto px-3 md:px-0">
        <Navbar />
        <div className="my-[18px]">
          <Banner />
        </div>
        <div className="my-[30px]">
          <Process />
        </div>
        <div className="mt-[80px] mb-[30px]">
          <Achieve />
        </div>
        <div className="mt-[100px]">
            <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
