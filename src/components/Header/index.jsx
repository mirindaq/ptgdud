import React from "react";
import { LuChefHat } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <div className="bg-slate-100 py-6 grid grid-cols-9 gap-5 items-center">
        <div className="col-span-1 ps-10 flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_IUH.png/800px-Logo_IUH.png"
            alt="Logo IUH"
            className="h-auto w-3/4 object-contain"
          />
        </div>
        <div className="space-y-4 col-span-3 me-5 flex items-center">
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Tìm kiếm"
          />
        </div>
        <div className="col-span-3 col-start-5">
          <ul className="grid grid-cols-5 text-center items-center h-full text-gray-500 font-normal">
            <li className="hover:text-gray-700 cursor-pointer">What to cook</li>
            <li className="hover:text-gray-700 cursor-pointer">Recipes</li>
            <li className="hover:text-gray-700 cursor-pointer">Ingredients</li>
            <li className="hover:text-gray-700 cursor-pointer">Occasions</li>
            <li className="hover:text-gray-700 cursor-pointer">About Us</li>
          </ul>
        </div>

        <div className="col-span-1 flex items-center justify-center space-x-2 bg-pink-100 py-2 px-3 rounded-lg">
          <LuChefHat className="text-pink-400" />
          <span className="text-pink-400 font-medium">Your Recipe Box</span>
        </div>

        <div className="col-span-1 text-center pe-5 flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIM1fLrksqeKl6hS0etNmTILvNLUom6ZIhQ&s"
            alt="Avatar"
            className="max-h-14 max-w-14 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
