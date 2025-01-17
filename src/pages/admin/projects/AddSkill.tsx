import AddModal from "../../../components/layout/module/AddModule";

export default function AddProject() {
  return (
    <AddModal modul_title="افزودن پروژه جدید" btn_title={"افزودن پروژه"}>
      <form>
        <div className="gap-5 mb-4 grid grid-cols-2 max-sm:grid-cols-1">
          <input
            className="w-full px-4 py-2 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="نام پروژه"
            type="text"
            required
          />
          <input
            className="w-full px-4 py-2 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="فرم ورک ها"
            type="text"
            required
          />
          <input
            className="w-full px-4 py-2 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            placeholder="url"
            type="text"
            required
          />
          <input
            type="file"
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
          />
        </div>
        <div className="grid w-full max-w-xs items-center gap-1.5 my-3"></div>
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          type="submit"
        >
          افزودن
        </button>
      </form>
    </AddModal>
  );
}
