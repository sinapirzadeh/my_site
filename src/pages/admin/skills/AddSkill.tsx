import AddModal from "../../../components/layout/module/AddModule";

export default function AddSkill() {
  return (
    <AddModal modul_title="افزودن مهارت جدید" btn_title={'افزودن مهارت'}>
      <form>
        <div className="gap-5 mb-4 grid grid-cols-2 max-sm:grid-cols-1">
          <input
            className="w-full px-4 text-gray-600 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="نام تان را وارد کنید"
            type="text"
            required
          />
          <input
            className="w-full px-4 text-gray-600 py-2 bg-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="درصد پیشرفت تان را وارد کنید"
            type="number"
            min={1}
            max={100}
            minLength={1}
            maxLength={100}
            required
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
