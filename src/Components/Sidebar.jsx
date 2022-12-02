import React from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Sidebar = ({ isOpen = false, onCloseSidebar }) => {
    return (
      <aside
        className={`bg-white fixed right-0 transition duration-200 ease-in-out w-72 top-0 z-20 bottom-0 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={onCloseSidebar}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="px-4">
        <img src="https://grupoalynecosmeticos.com.br/wp-content/uploads/2021/03/grupoalyne.png" alt="" srcset="" />
          <ul className="flex flex-col gap-4 items-center mt-12">
            <li className="mt-4 font-bold ">
            </li>
          </ul>
        </div>
      </aside>
    );
  };
  