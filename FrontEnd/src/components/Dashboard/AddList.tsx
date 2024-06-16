import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddList: React.FC = () => {
  let navigate = useNavigate();

  const [task, setTask] = useState<string>("");
  const [hou, setHou] = useState<string>("1");
  const [min, setMin] = useState<string>("0");
  const [per, setPer] = useState<string>("am");

  let [borderColor, setBorderColor] = useState<string>("black");
  let [loading, setLoading] = useState<boolean>(false);
  let [open, setOpen] = useState<boolean>(false);

  let hours: number[] = [];
  let mins: number[] = [];

  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }

  for (let i = 0; i <= 59; i++) {
    mins.push(i);
  }

  let createTask = () => {
    if (!task) {
      setBorderColor("prime");
      setLoading(false);
    } else {
      setLoading(true);
      axios
        .post("http://localhost:4000/createtask", {
          task,
          hou,
          min,
          per,
        })
        .then(() => {
          setOpen(false);
        })
        .catch((e) => {
          console.log("error", e);
          navigate("/user/signin");
        })
        .finally(() => {
          setTimeout(() => {
            setBorderColor("black");
            setTask("");
            setHou("");
            setMin("");
            setPer("");
            setLoading(false);
          }, 4000);
        });
    }
  };

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
              className={`border-2 rounded-[6px] border-${borderColor} font-bold p-1`}
              onChange={(e) => {
                setTask(e.target.value);
                setBorderColor("black");
              }}
            />

            <div>
              <p className="font-semibold">Set Time:</p>
              <div className="flex gap-2">
                <div>
                  Hou:{" "}
                  <select
                    className="border-2 px-3 rounded-[6px] border-black "
                    onChange={(e) => {
                      setHou(e.target.value);
                    }}
                  >
                    {hours.map((e) => (
                      <option value={e} key={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  Min:{" "}
                  <select
                    className="border-2 px-3 rounded-[6px] border-black "
                    onChange={(e) => {
                      setMin(e.target.value);
                    }}
                  >
                    {mins.map((e) => (
                      <option value={e} key={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  Per:{" "}
                  <select
                    className="border-2 px-3 rounded-[6px] border-black "
                    onChange={(e) => {
                      setPer(e.target.value);
                    }}
                  >
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                  </select>
                </div>
              </div>
            </div>

            <Button className="font-bold bg-prime mt-2" onClick={createTask}>
              {loading ? (
                <>..waiting..</>
              ) : (
                <>
                  <IoMdAddCircle className="text-[20px]" />
                  Add Task
                </>
              )}
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
