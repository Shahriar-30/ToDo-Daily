import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SigninPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-2">
      <div className="flex flex-col gap-3 border border-[#D8D8D8] rounded-md w-full max-w-[320px] px-4 py-6">
        <div>
          <img src={logo} className="w-[150px]" />
        </div>
        <div>
          <h3 className="font-bold text-[20px]">Signin</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-1 select-none cursor-pointer border border-[#D8D8D8] rounded-md w-full p-1 hover:bg-[#eee] duration-300">
            <FcGoogle className="text-[20px]" />
            <p className="font-semibold">Continue using Google</p>
          </div>
          <div className="flex items-center justify-center gap-1 select-none cursor-pointer border border-[#D8D8D8] rounded-md w-full p-1 hover:bg-[#eee] duration-300">
            <FaGithub className="text-[20px]" />
            <p className="font-semibold">Continue using Github</p>
          </div>
        </div>

        <div className="my-[30px] font-bold flex ">
          <p>
            Create an account ?{" "}
            <Button
              variant="link"
              className="text-prime font-bold text-[20px] m-0 p-0"
            >
              <Link to={"/user/signup"}>Signin</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
