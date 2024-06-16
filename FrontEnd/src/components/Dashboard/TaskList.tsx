import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { MdOutlineNoteAlt } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskList: React.FC = () => {
  let [done, SetDone] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  let txt = " Lorem ipsum, dolor sit ametitaque aliquid dolore fugit?";

  return (
    <>
      <div className="relative">
        <div className="max-w-[820px] w-full relative border-[1px] border-slate-800 flex px-[10px] py-[8px] items-center justify-between">
          <div className="w-[50px]"></div>
          <div className="absolute">
            <abbr title="Completed">
              <Checkbox
                onClick={() => SetDone(!done)}
                className="w-[20px] h-[20px] mt-[6px] "
              />
            </abbr>
          </div>
          <div className="w-full  text-start ">
            {done ? (
              <del>
                <h4 className="font-semibold px-1">{txt}</h4>
              </del>
            ) : (
              <h4 className="font-semibold px-1">{txt}</h4>
            )}
          </div>
          <div className="w-fit cursor-pointer flex gap-4 items-center justify-center ">
            <h4 className="select-none">03:30pm</h4>
            <div className="hover:bg-[#eeee] p-2">
              <SlOptionsVertical onClick={() => setOpen(!open)} />
            </div>
          </div>
        </div>
        {open && (
          <div className="bg-[#eee]   px-1 select-none z-50 border-2 border-white w-[100px] absolute right-[10%] top-[3%]">
            <Button className="bg-transparent text-black  hover:bg-[#c7c7c7]">
              <MdOutlineNoteAlt className="text-[15px]" />
              Update
            </Button>
            <div className=" border-b-[1px] border-[#000] my-1"></div>
            <Button className=" bg-transparent text-prime hover:bg-[#c7c7c7]">
              <RiDeleteBinLine className="text-[15px]" />
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
