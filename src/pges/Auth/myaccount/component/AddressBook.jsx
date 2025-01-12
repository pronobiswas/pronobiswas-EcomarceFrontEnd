import React, { useState } from "react";

const AddressBook = () => {
  return (
    <div>
      
      <div className="flex flex-col gap-8">
        <div className="flex  gap-x-5">
          {/* ===address=== */}
          <div className="w-1/2 border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
            <label
              htmlFor="address"
              className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
            >
              Address
            </label>
            <input
              type="password"
              id="address"
              name="address"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
            />
          </div>

          <div className="w-1/2 border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
            <label
              htmlFor="address1"
              className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
            >
              address1
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
            />
          </div>
        </div>

        <div className="flex  gap-x-5">
          {/* =====parmanent address===== */}
          <div className="w-1/2 border border-lastName shadow-inner rounded relative bg-Sada">
            <label
              htmlFor="emailAddress"
              className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
            >
              Parmanent address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
            />
          </div>
          <div className="w-1/2 border border-Dhusor-Lekhoni shadow-inner rounded relative bg-Sada">
            <label
              htmlFor="telephone"
              className="absolute bg-Sada -top-2 left-3 border-[1px] border-Dhusor-Lekhoni text-[10px] px-1 rounded"
            >
              parmanent address
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
            />
          </div>
        </div>
        <button className="w-fit bg-Secondary2 py-2 px-12 text-Sada font-popins rounded">
            Submit
        </button>
      </div>
    </div>
  );
};

export default AddressBook;
