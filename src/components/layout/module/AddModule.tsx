import React, { useState } from "react";
import Btn from "../Btns/Btn";

type TChildrenType = {
  children: React.ReactNode;
};
export default function Modal({ children }: TChildrenType) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Btn onClick={openModal} bg_color="bg-green-500" customClasses="mb-10">
        افزودن مهارت
      </Btn>
      {isOpen && (
        <div className=" flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
              <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
              <p className="text-gray-700 mb-6">{children}</p>
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
