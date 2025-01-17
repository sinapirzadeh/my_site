import { HiOutlineTrash } from "react-icons/hi2";
import Btn from "../../../components/layout/Btns/Btn";
import AddProject from "./AddSkill";

export default function ProjectsPanel() {
  return (
    <>
      <AddProject />
      <div className="grid grid-cols-5 gap-4 max-md:grid-cols-3 max-sm:grid-cols-1">
        <div className="relative w-auto bg-slate-100 dark:bg-slate-700 p-2 border-2  rounded-lg space-y-2 space-x-2">
          <img
            src="/public/images/projects/4.jpg"
            alt=""
            className="w-auto rounded-lg shadow-lg"
          />
          <h3 className="text-lg">title</h3>
          <span className="text-red-300">React - Python</span>
          <Btn
            bg_color="bg-red-500"
            padding="p-2"
            customClasses="absolute top-0 left-0"
          >
            <HiOutlineTrash size={22} />
          </Btn>
        </div>
      </div>
    </>
  );
}
