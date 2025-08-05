import React, { useState } from "react";
import { Eraser, Sparkles } from "lucide-react";

const RemoveBackground = () => {
  const [imageFile, setImageFile] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!imageFile) return;

    // Add background removal logic here
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#2b9585]" />
          <h1 className="text-xl font-semibold">Remove Image Background</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full mt-2 text-sm border border-gray-600 rounded-md p-2"
          required
        />
        <p className="text-xs text-gray-500 font-light mt-1">
          Supports JPG, PNG, and other image formats
        </p>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r 
            from-[#3B82F6] to-[#b1cb30] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Eraser className="w-5" />
          Remove Background
        </button>
      </form>

      {/* Right Column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#2f5c85]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
