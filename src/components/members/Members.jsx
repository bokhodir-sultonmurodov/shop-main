import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const Members = () => {

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6 space-y-4">
      <h2 className="text-lg font-bold text-blue-700">Group Members</h2>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter member ID"
         
         
          className="border border-gray-300 px-3 py-2 rounded w-full"
        />
        <button
          
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

   
    </div>
  );
};

export default Members;