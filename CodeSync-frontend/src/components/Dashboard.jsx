import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";
import Editor from "./EditorPage";
import OutputTerminal from "./terminal";
import LiveChat from "./LiveChat";
import StatusBar from "./Statusbar";

const Dashboard = () => {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const location = useLocation(); // Access the location object

  // Access the roomLink from the location state
  const roomLink = location.state?.roomLink;

  useEffect(() => {
    // **Crucial: Validate the roomLink here!**
    // In a real app, you would check with your backend that
    // this roomLink is valid for the current user.
    if (roomLink) {
      console.log("Room Link:", roomLink); // Or send to a function that validates it.
    } else {
      // Handle the case where there's no roomLink.  Potentially redirect back to login.
      console.warn("No room link provided.  User might not be logged in.");
      // Example: navigate("/login");  // Redirect if no valid roomLink (requires navigate hook here)
    }
  }, [roomLink, location]); // location added as a dependancy


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
      {/* Toolbar */}
      <Toolbar />

      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar onOpenFile={handleOpenFile} />

        {/* Editor Area */}
        <div className="flex-grow flex flex-col">
          <Editor
            openFiles={openFiles}
            activeFile={activeFile}
            onCloseFile={handleCloseFile}
            onFileChange={handleFileContentChange}
            setActiveFile={setActiveFile}
          />

          {/* Output Terminal */}
          <OutputTerminal />
        </div>

        {/* Live Chat */}
        <LiveChat />
      </div>

      {/* Status Bar */}
      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default Dashboard;