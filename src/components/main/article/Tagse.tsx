type tagsType = {
  tags: [];
};

export default function Tagse({ tags }: tagsType) {
  return (
    <div className="flex flex-col gap-1 justify-center items-start text-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 px-4 py-4 shadow-xl rounded-lg">
      <p className="font-semibold text-xl  mb-2">تگ ها</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p className="text-sm hover:scale-105 focus:scale-95 transition-all px-3 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded  text-[#7281a3]">
            {`#${tag}`}
          </p>
        ))}
      </div>
    </div>
  );
}
