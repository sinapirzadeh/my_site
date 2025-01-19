import { toast } from "react-toastify";
import EditModule from "../../../components/layout/module/EditModule";
import { useForm } from "react-hook-form";
import { usePostData } from "../../../hooks/api/usePostData";
import { IProfileType } from "../../../components/types/types";
import { postEditProfile } from "../../../services/admin/ProfileApi";

export default function EditProfile() {
  const { mutate, error, isPending } = usePostData<IProfileType, string>(
    postEditProfile,
    ''
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProfileType>();

  if (error) toast.error((error as string) || "خطایی رخ داده است");

  // ارسال فرم
  const onSubmit = (formData: IProfileType) => {
    const imageFile = formData.image_url[0];
    mutate({ ...formData, image_url: imageFile });
    toast.success("اضافه شد");
    reset();
  };

  return (
    <EditModule modul_title="پروفایل" btn_title="پروفایل">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-5 mb-4 grid grid-cols-2 max-sm:grid-cols-1">
          <input
            {...register("name", { required: "نام الزامی است" })}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="نام"
            type="text"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}

          <input
            {...register("short_des", { maxLength: 150 })}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="توضیح کوتاه (حداکثر ۱۵۰ کاراکتر)"
            type="text"
          />
          {errors.short_des && (
            <span className="text-red-500">
              توضیح کوتاه نمی‌تواند بیشتر از ۱۵۰ کاراکتر باشد.
            </span>
          )}

          <input
            {...register("telegram_url", {
              pattern: {
                value: /^https?:\/\/(t\.me\/.+|telegram\.me\/.+)$/,
                message: "آدرس تلگرام معتبر نیست",
              },
            })}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="تلگرام"
            type="text"
          />
          {errors.telegram_url && (
            <span className="text-red-500">{errors.telegram_url.message}</span>
          )}

          <input
            {...register("linkedin_url", {
              pattern: {
                value: /^https?:\/\/(www\.)?linkedin\.com\/.+$/,
                message: "آدرس لینکدین معتبر نیست",
              },
            })}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="لینکدین"
            type="text"
          />
          {errors.linkedin_url && (
            <span className="text-red-500">{errors.linkedin_url.message}</span>
          )}

          <input
            {...register("github_url", {
              pattern: {
                value: /^https?:\/\/(www\.)?github\.com\/.+$/,
                message: "آدرس گیت‌هاب معتبر نیست",
              },
            })}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="گیت‌هاب"
            type="text"
          />
          {errors.github_url && (
            <span className="text-red-500">{errors.github_url.message}</span>
          )}

          <input
            {...register("rezome_url")}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="رزومه (PDF)"
            type="text"
          />
          <input
            type="file"
            accept="image/*"
            {...register("image_url", { required: "تصویر الزامی است" })}
          />
          {errors.image_url && (
            <span className="text-red-500">{errors.image_url.message}</span>
          )}

          <input
            {...register("image_alt")}
            className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
            placeholder="توضیح عکس (alt)"
            type="text"
          />
        </div>
        <textarea
          {...register("descirption", { required: "توضیحات الزامی است" })}
          className="w-full text-gray-800 px-4 py-2 bg-slate-100 rounded-lg"
          placeholder="توضیحات"
        ></textarea>
        {errors.descirption && (
          <span className="text-red-500">{errors.descirption.message}</span>
        )}

        <button
          className={`w-full ${
            isPending ? "bg-gray-400" : "bg-green-500"
          } text-white py-2 px-4 rounded-lg`}
          type="submit"
          disabled={isPending}
        >
          {isPending ? "در حال ارسال..." : "اعمال"}
        </button>
      </form>
    </EditModule>
  );
}
