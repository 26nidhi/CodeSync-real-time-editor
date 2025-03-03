import React from "react";

const OutputTerminal = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 h-48 border-t border-gray-300 dark:border-gray-700 p-3 overflow-y-auto">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Console Output: (Will display console logs and errors here)
      </p>
    </div>
  );
};

export default OutputTerminal;