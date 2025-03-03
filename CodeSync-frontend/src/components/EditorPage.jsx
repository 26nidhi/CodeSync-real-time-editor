import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ openFiles, activeFile, onCloseFile, onFileChange, setActiveFile }) => {
  const [editorValue, setEditorValue] = useState("");

  useEffect(() => {
    if (activeFile) {
      setEditorValue(activeFile.content);
    } else {
      setEditorValue("");
    }
  }, [activeFile]);

  const handleEditorChange = (value) => {
    setEditorValue(value);
    if (activeFile) {
      onFileChange(activeFile.name, value);
    }
  };

  const handleTabClick = (file) => {
    setActiveFile(file);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-100 dark:bg-gray-700 flex items-center border-b border-gray-200 dark:border-gray-600">
        {openFiles.map((file) => (
          <div
            key={file.name}
            className={`px-4 py-2 cursor-pointer ${
              activeFile && activeFile.name === file.name
                ? "bg-gray-200 dark:bg-gray-600 font-semibold"
                : "hover:bg-gray-200 dark:hover:bg-gray-600"
            } flex items-center`}
            onClick={() => handleTabClick(file)}
          >
            {file.name}
            <button
              className="ml-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={(e) => {
                e.stopPropagation();
                onCloseFile(file.name);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div className="flex-grow">
        {activeFile ? (
          <MonacoEditor
            height="100%"
            language={activeFile.language}
            value={editorValue}
            onChange={handleEditorChange}
            theme="vs-dark"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
            No file selected.
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;