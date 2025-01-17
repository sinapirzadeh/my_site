import { Link } from "react-router-dom";
import Btn from "../../../components/layout/Btns/Btn";

export default function ArticlesPanel() {
  return (
    <>
      <div className="flex mb-5 ">
        <Link
          to={"add"}
          className="p-2 px-3 rounded-lg shadow-lg bg-green-500 border-2 ml-2"
        >
          افزودن
        </Link>
        <button className="bg-indigo-500 text-white p-2 px-3 rounded-md shadow-lg border-2">
          همه
        </button>
        <button className="bg-indigo-500 text-white p-2 px-3 rounded-md shadow-lg border-2 mx-3">
          فعال
        </button>
        <button className="bg-indigo-500 text-white p-2 px-3 rounded-md shadow-lg border-2">
          غیره فعال
        </button>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
        <div className="bg-slate-200 space-y-2 dark:bg-gray-500 dark:text-white border-2 shadow-lg p-3 rounded-xl">
          <img
            src="/public/images/articles/5.jpg"
            alt=""
            className="rounded-lg"
          />
          <h1>title</h1>
          <h3>short Descripsion</h3>
          <div className="flex justify-between items-center">
            <span>12</span>
            <span>2022/2/2</span>
          </div>
          <div className="flex justify-end">
            <Btn bg_color="bg-yellow-500 ml-3">ویرایش</Btn>
            <Btn bg_color="bg-red-500" padding="p-2" customClasses="">
              غیره فعال
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
