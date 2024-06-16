import React, { useRef, useState } from "react";
import logoWhite from "../../assets/img/logo-white.svg";
import { FaRegCircleUser } from "react-icons/fa6";
import { lovelyPopUp } from "react-lovely-popup";
import { GrLogout } from "react-icons/gr";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  let btn = useRef<HTMLElement>();
  let toggle = useRef<HTMLElement>();

  // react-lovely-popup
  lovelyPopUp({
    clickRef: btn,
    toggleRef: toggle,
    callBack: (e: boolean) => {
      setOpen(e);
    },
  });

  return (
    <>
      <nav className="flex items-center justify-between px-3 md:px-8 py-3 bg-prime">
        <div>
          <img src={logoWhite} className="text-white w-[150px]" />
        </div>
        <div ref={btn}>
          <FaRegCircleUser className="text-white font-bold text-[35px]" />
          {/* <img 
        className="w-9 h-9 rounded-full object-cover"
          src={
          a
          }
        /> */}
        </div>
      </nav>
      <div ref={toggle}>
        {open && (
          <div className=" p-3 absolute top-[60px] right-[2%] bg-[#eee]">
            <div className="select-none hover:bg-[#868585]  hover:text-white font-medium hover:font-semibold p-2 duration-700 cursor-pointer text-prime flex gap-2 items-center justify-center">
              <GrLogout /> Logout
            </div>
            <div className="select-none hover:bg-[#c2c2c2] hover:text-white font-medium  hover:font-semibold p-2 duration-700 cursor-pointer text-prime flex gap-2 items-center justify-center">
              <GrLogout /> Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
