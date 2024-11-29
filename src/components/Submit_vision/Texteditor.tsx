"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
interface TextEditorProps {
  onContentChange?: (content: string) => void; // Optional callback for content updates
}

const TextEditor: React.FC<TextEditorProps> = ({ onContentChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");

  const applyCommand = (command: string, value?: string) => {
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString();

        // Apply the command (e.g., bold, italic, etc.)
        document.execCommand(command, false, value || "");
        const updatedContent = editorRef.current.innerHTML;

        // If content changed, update state
        if (updatedContent !== content) {
          setContent(updatedContent);
          if (onContentChange) {
            onContentChange(updatedContent);
          }
        }
      }
    }
  };

  const handleBulletList = () => {
  if (editorRef.current) {
    // Check if the browser supports execCommand (fallback for older browsers)
    if (document.queryCommandSupported && document.queryCommandSupported("insertUnorderedList")) {
      document.execCommand("insertUnorderedList");
    } else {
      console.warn("insertUnorderedList is not supported in this browser.");
    }

    // Update React state with the new content
    const updatedContent = editorRef.current.innerHTML;
    setContent(updatedContent);

    // Trigger the onContentChange callback, if provided
    if (onContentChange) {
      onContentChange(updatedContent);
    }
  }
};


  const handleInput = () => {
    if (editorRef.current) {
      const updatedContent = editorRef.current.innerHTML;
      setContent(updatedContent);
      if (onContentChange) {
        onContentChange(updatedContent);
      }
    }
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-col ">
      {/* Toolbar */}
      <div className="flex"> 
      <div className="mb-2 flex gap-1 w-full">
        <button
          onClick={() => applyCommand("bold")}
          className="px-2    hover:bg-gray-400"
        >
          <Image
            src="/B.svg"
            alt="Main Logo"
            width={10}
            height={20}
          />
        </button>
        <button
          onClick={() => applyCommand("italic")}
          className="px-2  rounded hover:bg-gray-400"
        >
          <Image
            src="/I.svg"
            alt="Main Logo"
            width={5}
            height={20}
          />
        </button>
        <button
          onClick={() => applyCommand("underline")}
          className="px-2  rounded hover:bg-gray-400"
        >
          <Image
            src="/U.svg"
            alt="Main Logo"
            width={13}
            height={20}
          />
        </button>
        <button
          onClick={handleBulletList}
          className="px-2    rounded hover:bg-gray-400"
        >
          <Image
            src="/bullet.svg"
            alt="Main Logo"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div>
        <button>Get help with writing</button>
      </div>
      </div>
      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="w-full max-w-2xl min-h-[200px] p-4 bg-white border border-gray-300 rounded shadow-sm focus:outline-none"
      />
    </div>
  );
};

export default TextEditor;
