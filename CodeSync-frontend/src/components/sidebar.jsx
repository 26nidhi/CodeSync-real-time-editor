
import React, { useState } from "react";

const Sidebar = ({ onOpenFile }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilesExpanded, setIsFilesExpanded] = useState(true);
  const [isGitExpanded, setIsGitExpanded] = useState(false);
  const [isExtensionsExpanded, setIsExtensionsExpanded] = useState(false);

  const handleFileClick = (file) => {
    onOpenFile(file);
  };

  // Dummy file data (replace with your actual file system logic)
  const files = [
    { name: "index.html", content: "<h1>Hello World</h1>", language: "html" },
    { name: "style.css", content: "body { color: black; }", language: "css" },
    { name: "script.js", content: "console.log('Hello');", language: "javascript" },
  ];

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      {/* File Explorer */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold dark:text-white">Files</h2>
          <button onClick={() => setIsFilesExpanded(!isFilesExpanded)}>
            {isFilesExpanded ? "-" : "+"}
          </button>
        </div>
        {isFilesExpanded && (
          <div>
            <input
              type="text"
              placeholder="Search files..."
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md mb-2 dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredFiles.map((file) => (
                <li
                  key={file.name}
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded cursor-pointer"
                  onClick={() => handleFileClick(file)}
                >
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Git Integration */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold dark:text-white">Git</h2>
          <button onClick={() => setIsGitExpanded(!isGitExpanded)}>
            {isGitExpanded ? "-" : "+"}
          </button>
        </div>
        {isGitExpanded && (
          <div>
            {/* Git integration content (e.g., branch, commit history) */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Git functionality will be implemented here.
            </p>
          </div>
        )}
      </div>

      {/* Extensions */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold dark:text-white">Extensions</h2>
          <button onClick={() => setIsExtensionsExpanded(!isExtensionsExpanded)}>
            {isExtensionsExpanded ? "-" : "+"}
          </button>
        </div>
        {isExtensionsExpanded && (
          <div>
            {/* Extension management content */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Extension management will be implemented here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;