import React from "react";
import { Button } from "../ui/button";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-3  ">
      <div>
        <Link to={"/"}>
          <img className="w-[150px] md:w-[200px]" src={logo} />
        </Link>
      </div>
      <div className="flex items-center justify-center  ">
        <Button
          variant="link"
          className="text-[15px] md:text-[18px] font-[700] mr-[-15px] md:mr-0"
        >
          <Link to={"/user/signin"} className="text-prime">
            Login
          </Link>
        </Button>
        <Button
          variant="link"
          className="text-[15px] md:text-[18px] font-[700]"
        >
          <Link to={"/user/signup"}>Signup</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
