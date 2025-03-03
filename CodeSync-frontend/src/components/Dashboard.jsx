import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";
import Editor from "./EditorPage";
import OutputTerminal from "./terminal";
import LiveChat from "./LiveChat";
import StatusBar from "./Statusbar";

const Dashboard = () => {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const location = useLocation();
  const roomLink = location.state?.roomLink;

  useEffect(() => {
    if (roomLink) {
      console.log("Room Link:", roomLink);
    } else {
      console.warn("No room link provided. User might not be logged in.");
    }
  }, [roomLink]);

  const handleOpenFile = (file) => {
    if (!openFiles.some((f) => f.name === file.name)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  const handleCloseFile = (fileName) => {
    const updatedFiles = openFiles.filter((file) => file.name !== fileName);
    setOpenFiles(updatedFiles);
    if (activeFile && activeFile.name === fileName) {
      setActiveFile(updatedFiles.length > 0 ? updatedFiles[0] : null);
    }
  };

  const handleFileContentChange = (fileName, newContent) => {
    const updatedFiles = openFiles.map((file) =>
      file.name === fileName ? { ...file, content: newContent } : file
    );
    setOpenFiles(updatedFiles);
  };

  return (
    <div className="h-screen w-screen flex flex-col dark:bg-gray-800 dark:text-white">
      <Toolbar />
      <div className="flex flex-grow">
        <Sidebar onOpenFile={handleOpenFile} />
        <div className="flex-grow flex flex-col">
          <Editor
            openFiles={openFiles}
            activeFile={activeFile}
            onCloseFile={handleCloseFile}
            onFileChange={handleFileContentChange}
            setActiveFile={setActiveFile}
          />
          <OutputTerminal />
        </div>
        <LiveChat />
      </div>
      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default Dashboard;