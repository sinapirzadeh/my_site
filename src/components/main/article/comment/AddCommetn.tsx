export default function AddCommetn() {
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white rounded-xl p-4 ">
      <p className="p-3 dark:text-white bg-red-800 bg-opacity-75 rounded-lg w-auto">
        خطای ff fdfsaدارید
      </p>
      <h5 className="text-xl font-bold col-span-6 my-4">افزودن نظر</h5>
      <form method="post" className="space-y-2 grid">
        <input
          className="bg-slate-100 placeholder:dark:text-white text-slate-300 dark:bg-slate-500 dark:text-white placeholder:text-slate-600 placeholder:opacity-70 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
          type="text"
          placeholder="نام"
        />
        <textarea
          className="bg-slate-100 placeholder:dark:text-white text-slate-300 dark:bg-slate-500 dark:text-white placeholder:text-slate-600 placeholder:opacity-70 h-28 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
          placeholder="دیدگاه خود را به اشتراک بگذارید"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 py-2 px-10 text-center  text-white rounded-lg shadow-lg"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
