import React from "react";

const Toolbar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center space-x-4">
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">File</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">Edit</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">View</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 rounded">Help</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded">Save</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded">Undo</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded">Redo</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded">Run Code</button>
        <button className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded">Share</button>
      </div>
    </div>
  );
};

export default Toolbar;