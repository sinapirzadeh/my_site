export default function BlogFilter() {
  return (
    <div className="bg-white dark:bg-gray-500 border-2 shadow-lg rounded-lg mb-8 flex justify-between max-sm:flex-col">
      <div className="flex space-x-2 border-0 pr-2 border-purple-400 rounded-xl select-none max-md:mt-5">
        <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="html"
            className="peer hidden"
          />
          <span className="dark:text-white border-2 peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
            جدید
          </span>
        </label>

        <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="react"
            className="peer hidden"
          />
          <span className="dark:text-white border-2 peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
            قدیمی
          </span>
        </label>

        <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="vue"
            className="peer hidden"
          />
          <span className="dark:text-white border-2 peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
            کامنت
          </span>
        </label>

        <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="vue"
            className="peer hidden"
          />
          <span className="dark:text-white border-2 peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
            بازدید
          </span>
        </label>
      </div>
      <SearchBar />
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="">
        <div className="flex border-2 border-white rounded-lg">
          <input
            type="text"
            className="w-full px-2 rounded-tr-lg rounded-br-lg max-w-[160px] dark:placeholder:text-slate-100  dark:bg-gray-600 dark:text-white bg-slate-200 text-gray-500 pl-2 text-base  outline-0"
            placeholder="جست و جو کنید"
          />
          <input
            type="submit"
            value="جستوجو"
            className="bg-blue-500 p-2 px-3 rounded-tl-lg rounded-bl-lg  text-white cursor-pointer hover:bg-blue-800 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
