import React from "react";
import { IoMenu } from "react-icons/io5";

export default function Search() {
  return (
    <div>
      <div className="grid grid-cols-12 py-5">
        <div className="col-span-4 col-start-2">
          <div className="flex items-center">
            <IoMenu className="h-8 w-8" />
            <span className="ms-2 font-semibold text-2xl py-4">FILTERS</span>
          </div>
          <div className="">
            <h3 class="text-lg font-medium mb-3">Type</h3>
            <div className="grid grid-cols-2">
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />

                <span class="text-base">Pan-fried</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Stir-fried</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Grilled</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Roasted</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Sauteed</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Baked</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Steamed</span>
              </label>
              <label class="flex items-center mb-2">
                <input
                  type="checkbox"
                  class="form-checkbox accent-pink-500 w-4 h-4 me-2"
                />
                <span class="text-base">Stewed</span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <p>Sorry, no results were found for "cakescaredcake"</p>
        </div>
      </div>
    </div>
  );
}
