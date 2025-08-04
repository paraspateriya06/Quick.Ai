import React, { useState } from "react";
import Markdown from  'react-markdown'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="font-medium">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full text-xs"
        >
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="mt-4">
          {item.type === "image" ? (
            <img
              src={item.content}
              alt="Generated"
              className="w-full max-w-md rounded-md"
            />
          ) : (
            <div className="overflow-y-scroll text-slate-700 whitespace-pre-wrap">
              <div className="reset-tw">
                     <Markdown>
 {item.content}
             </Markdown>

              </div>
        
             
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
