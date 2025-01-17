import { motion } from "framer-motion";
import Btn from "../../../components/layout/Btns/Btn";
import { HiOutlineTrash } from "react-icons/hi2";
import AddSkill from "./AddSkill";

export default function SkillsPanel() {
  return (
    <>
      <AddSkill />
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div
          className="w-auto bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2"
          dir="ltr"
        >
          <div className="flex justify-between">
            <h3>sort : 1</h3>
            <h3>Python</h3>
            <span>40%</span>
          </div>
          <div className="grid grid-cols-12 gap-1 items-center">
            <Btn
              bg_color="bg-red-500 mx-auto"
              padding="p-2"
              customClasses="col-span-1 max-sm:col-span-2"
            >
              <HiOutlineTrash size={18} />
            </Btn>
            <div className="w-auto bg-gray-300 col-span-11 max-sm:col-span-10 rounded-full h-2.5 dark:bg-white">
              <motion.div
                className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${80}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
