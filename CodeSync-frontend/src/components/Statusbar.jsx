import React from "react";

const StatusBar = ({ activeFile }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-between border-t border-gray-200 dark:border-gray-600">
      <div>
        {activeFile ? (
          <>
            <span className="text-sm dark:text-white mr-2">
              File: {activeFile.name}
            </span>
          </>
        ) : (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            No file selected.
          </span>
        )}
      </div>
      <div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Git Branch: main
        </span>
      </div>
    </div>
  );
};

export default StatusBar;