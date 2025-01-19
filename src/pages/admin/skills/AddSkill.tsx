import { useForm } from "react-hook-form";
import AddModal from "../../../components/layout/module/AddModule";
import { ISkillType } from "../../../components/types/types";
import { usePostData } from "../../../hooks/api/usePostData";
import { postSkill } from "../../../services/admin/Skill";
import { toast } from "react-toastify";

export default function AddSkill() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISkillType>();

  const { mutate } = usePostData(postSkill, "skill");

  const onSubmit = (data: ISkillType) => {
    mutate(data);
    toast.success("added!");
    reset();
  };

  return (
    <AddModal modul_title="افزودن مهارت جدید" btn_title={"افزودن مهارت"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.title && (
          <p className="text-red-400">{errors.title?.message}</p>
        )}
        {errors.process && (
          <p className="text-red-400">{errors.process?.message}</p>
        )}
        <div className="gap-5 mb-4 grid grid-cols-2 max-sm:grid-cols-1">
          <input
            {...register("title", { required: "required!" })}
            className="w-full px-4 text-gray-600 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="نام تان را وارد کنید"
            type="text"
          />
          <input
            {...register("process", {
              maxLength: 100,
              minLength: 0,
              required: "required!",
            })}
            className="w-full px-4 text-gray-600 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="درصد پیشرفت تان را وارد کنید"
            type="number"
          />
        </div>
        <button
          className="w-full bg-green-500 text-white dark:bg-green-400  py-2 px-4 rounded-lg hover:bg-indigo-400 transition duration-300"
          type="submit"
        >
          افزودن
        </button>
      </form>
    </AddModal>
  );
}
