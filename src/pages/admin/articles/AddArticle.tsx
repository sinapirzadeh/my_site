import React from "react";

export default function AddArticle() {
  return (
    <div>
      <form>
        <div className="gap-5 mb-4 grid grid-cols-3 max-sm:grid-cols-1 ">
          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="نام"
            type="text"
            required
          />
          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="توضیح کوتاه"
            type="text"
            required
          />

          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="تلگرام"
            type="text"
            required
          />
          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="لینکدین"
            type="text"
            required
          />
          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="گیت هاب"
            type="text"
            required
          />
          <input
            className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="pdf"
            type="text"
            required
          />
        </div>
        <div className="grid w-full max-w-xs items-center gap-1.5 my-3">
          <label className="text-sm text-gray-400 dark:text-gray-100 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            پروفایل تان را انتخاب کنید
          </label>
          <input
            id="picture"
            type="file"
            className="flex text-gray-800 h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <textarea
          className="w-full text-gray-800 px-4 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          placeholder="توضیحات"
          required
        ></textarea>
        <button
          className="mx-auto bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          type="submit"
        >
          اعمال
        </button>
      </form>
    </div>
  );
}
