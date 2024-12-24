export default function Comments() {
  return (
    <div
      role="alert"
      className="my-2 p-4 text-gray-900 dark:bg-gray-700 bg-white rounded-lg shadow dark:text-gray-300"
      id="toast-notification"
    >
      <div className="flex items-center">
        <div className="ms-3 text-sm font-normal space-y-3">
          <div className="text-sm font-semibold text-gray-900 dark:text-white border-r-2 border-blue-500 pr-2">
            نام
          </div>
          <div className="text-sm font-normal">کامنت طرف</div>
          <span className="text-xs font-medium dark:text-blue-300 text-blue-600">
            دو دقیقه قبل
          </span>
        </div>
      </div>
    </div>
  );
}
