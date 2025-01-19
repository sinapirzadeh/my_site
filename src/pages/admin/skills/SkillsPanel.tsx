import { motion } from "framer-motion";
import AddSkill from "./AddSkill";
import { useGetData } from "../../../hooks/api/useGetData";
import { delSkill, getAdminSkill } from "../../../services/admin/Skill";
import { ISkillType } from "../../../components/types/types";
import { useDelDataOne } from "../../../hooks/api/useDelDataOne";
import { toast } from "react-toastify";
import Btn from "../../../components/layout/Btns/Btn";
import { HiOutlineTrash } from "react-icons/hi2";

export default function SkillsPanel() {
  const { data, isLoading } = useGetData<ISkillType[]>("skill", getAdminSkill);
  const { mutate } = useDelDataOne(["delSkill"], delSkill, "skill");

  const heandelDelete = (_id: string) => {
    mutate(_id);
    toast.success("deleted!");
  };

  return (
    <>
      <AddSkill />
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {isLoading && <p className="text-center m-3">Loading ...</p>}
        {data &&
          data.map((skill) => (
            <div
              key={skill?._id}
              className={`w-auto bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2 ${skill.is_delete? 'opacity-20':''}`}
              dir="ltr"
            >
              <div className="flex justify-between">
                <h3>sort : 1</h3>
                <h3>{skill?.title}</h3>
                <span>{skill?.process}%</span>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <Btn
                  onClick={() => heandelDelete(skill?._id)}
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
                    animate={{ width: `${skill?.process}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
