import React from "react";

const CreationItem = ({item}) => {
  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center gap-4"></div>
   <div>
    <h2>
{item.prompt}
    </h2>
    <p className="text-gray-500">{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
   </div>
   <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full"> {item.type} </button>
   
    </div>
  );
};

export default CreationItem;


//2:11:19