export default function SkillItem() {
  return (
    <div
      dir="ltr"
      className="bg-white dark:bg-indigo-900 rounded-lg p-5 shadow-md animate-flip-down"
    >
      <div className="flex justify-between">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Vue-js
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          50%
        </span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-80"></div>
      </div>
    </div>
  );
}
