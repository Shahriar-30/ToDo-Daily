import AddList from "@/components/Dashboard/AddList";
import TaskList from "@/components/Dashboard/TaskList";
import TitleDash from "@/components/ReUse/titleDash";
import React from "react";

const TodayPage: React.FC = () => {
  return (
    <>
      <section className="px-3 md:px-8 py-3">
        <TitleDash txt="today" />
        <div>
          <AddList />
        </div>
        <div className="mt-[20px]  flex flex-col gap-2 items-center justify-start h-[400px] overflow-y-scroll">
          <TaskList />
        </div>
      </section>
    </>
  );
};

export default TodayPage;
