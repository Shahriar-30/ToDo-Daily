import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";

const AddList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  let [open, setOpen] = useState<boolean>(false);

  let hours: number[] = [];
  let mins: number[] = [];

  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }

  for (let i = 0; i <= 59; i++) {
    mins.push(i);
  }

  return (
    <>
      {open ? (
        <>
          <Button
          variant={"link"}
          className="font-bold hover:text-prime "
          onClick={() => setOpen(!open)}
        >
          <IoMdAddCircle className="text-[20px]" />
          Cancel
        </Button>
          <div className="flex flex-col gap-1 w-[300px] bg-[#eee] z-[999] p-5 rounded-lg  absolute">
            <input
              type="text"
              placeholder="Enter Task Name"
              className="border-2 rounded-[6px] border-black font-bold p-1"
              onChange={(e) => setTask(e.target.value)}
            />

            <div>
              <p className="font-semibold">Set Time:</p>
              <div className="flex gap-2">
                <div>
                  Hou:{" "}
                  <select className="border-2 px-3 rounded-[6px] border-black ">
                    {hours.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div>
                  Min:{" "}
                  <select className="border-2 px-3 rounded-[6px] border-black ">
                    {mins.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div>
                  Per:{" "}
                  <select className="border-2 px-3 rounded-[6px] border-black ">
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                  </select>
                </div>
              </div>
            </div>

            <Button
              className="font-bold bg-prime mt-2"
              onClick={() => setOpen(!open)}
            >
              <IoMdAddCircle className="text-[20px]" />
              Add Task
            </Button>
          </div>
        </>
      ) : (
        <Button
          variant={"link"}
          className="font-bold hover:text-prime "
          onClick={() => setOpen(!open)}
        >
          <IoMdAddCircle className="text-[20px]" />
          Add Task
        </Button>
      )}
    </>
  );
};

export default AddList;
