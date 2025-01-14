import React, { useState } from "react";
import Btn from "../Btns/Btn";
import { HiOutlinePencilSquare } from "react-icons/hi2";

type TChildrenType = {
  children: React.ReactNode;
  modul_title: string;
  btn_title: string;
};
export default function EditModule({
  children,
  modul_title = "ویرایش",
  btn_title = "ویرایش",
}: TChildrenType) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Btn onClick={openModal} bg_color="bg-yellow-500" customClasses="mt-5 flex">
        <HiOutlinePencilSquare size={25} className="ml-2"/>
        {btn_title}
      </Btn>
      {isOpen && (
        <div className=" flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-500 dark:text-gray-800 rounded-lg shadow-lg max-md:w-2/3 w-1/3 p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{modul_title}</h2>
              <div className=" mb-6">{children}</div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
