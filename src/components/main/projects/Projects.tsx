import image from '../../../../public/images/projects/3.jpg'


export default function Projects() {
  return (
    <>
      <div className="space-y-5 z-10">
        <h2 className="text-4xl dark:text-white text-center">پروژه ها</h2>
        <p className="text-center dark:text-gray-300 text-lg">
          پروژه های برنامه نویسی شده و نمونه کار ها
        </p>
      </div>
      <div className="mx-5 md:mx-24 my-20 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 ">
        <div className="m-auto shadow-lg group cursor-pointer group mr-auto overflow-hidden relative text-gray-50 h-52 w-64 rounded-lg hover:duration-700 duration-700">
          <a href="https://github.com/sinapirzadeh/">
            <img src={image} alt="" />
          </a>
          <div className="absolute bg-white dark:bg-blue-800 -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-blue-600 dark:text-gray-300 font-bold text-xs">
              Django - React
            </span>
            <h4 className="text-gray-800 dark:text-white font-bold text-2xl">
              سایت فروشگاهی
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
