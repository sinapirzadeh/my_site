import {
  HiArrowLeft,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineDocumentText,
  HiOutlineEye,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function HomeArticles() {
  return (
    <div className="my-10 z-0">
      <div className=" mb-16 flex justify-between">
        <div className="text-indigo-500 dark:text-white flex items-center border-b-2 border-indigo-500 dark:border-white uppercase">
          <HiOutlineDocumentText size={30} />
          <h2 className="pr-1 text-xl inline-block">مقاله ها</h2>
        </div>
        <div className="hover:animate-jump p-2 bg-blue-500 rounded-md text-white flex">
          <Link to={"/articles"} className="pl-3">
            مشاهده همه
          </Link>
          <HiArrowLeft size={25} />
        </div>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-20">
        <div className="relative m-auto flex w-80 flex-col rounded-xl dark:bg-blue-800 bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative  mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src="./assets/images/articles/2.jpg" alt="" />
          </div>
          <div className="p-6">
            <h4 className="mb-2 block font-Vazir text-lg font-semibold leading-snug tracking-normal dark:text-white text-blue-gray-900 antialiased">
              برنامه نویسی
            </h4>
            <p className="block font-Vazir text-base font-light leading-relaxed text-inherit antialiased dark:text-gray-300">
              برنامه نویس چگونه است و با چه زبان های باید شروع کنیم ...{" "}
              <Link
                to={`articles/${1}`}
                className="text-blue-700 hover:text-blue-500 dark:hover:text-blue-200 border-b-2 border-blue-700 dark:border-blue-300 dark:text-blue-300"
              >
                مشاهده مقاله
              </Link>
            </p>
            <div className="flex mt-3 dark:text-white">
              <span className="flex pl-3">
                <HiOutlineEye size={20}/>
                <span className="pr-1">0</span>
              </span>
              <span className="flex items-center">
                <HiOutlineChatBubbleLeftEllipsis size={20}/>
                <span className="pr-1">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
