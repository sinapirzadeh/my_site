import Modal from "../../../components/layout/module/AddModule";

export default function AddSkill() {
  return (
    <Modal>
      <form>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
            placeholder="نام تان را وارد کنید"
            type="text"
            required
          />
        </div>
        <button
          className="w-full bg-blue-400 text-white dark:bg-yellow-300 dark:text-gray-800 py-2 px-4 rounded-lg hover:bg-indigo-400 transition duration-300"
          type="submit"
        >
          ارسال پیام
        </button>
      </form>
    </Modal>
  );
}
