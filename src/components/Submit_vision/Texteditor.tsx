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
    <div className=" border border-black rounded-md">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-[#AAA2A2A3] px-2 py-1 border-b border-black rounded-sm">
        {/* Formatting Buttons */}
        <div className="flex gap-2 ">
          <button
            onClick={() => applyCommand("bold")}
            className="px-2 hover:bg-gray-300"
          >
            <Image src="/B.svg" alt="Bold" width={10} height={20} />
          </button>
          <button
            onClick={() => applyCommand("italic")}
            className="px-2 hover:bg-gray-300"
          >
            <Image src="/I.svg" alt="Italic" width={5} height={20} />
          </button>
          <button
            onClick={() => applyCommand("underline")}
            className="px-2 hover:bg-gray-300"
          >
            <Image src="/U.svg" alt="Underline" width={13} height={20} />
          </button>
          <button
            onClick={handleBulletList}
            className="px-2 hover:bg-gray-300"
          >
            <Image src="/bullet.svg" alt="Bullet List" width={20} height={20} />
          </button>
        </div>

        {/* Get Help Button */}
        <button className="text-sm text-white px-3 py-1 bg-black rounded-sm hover:bg-gray-400">
          Get help with writing
        </button>
      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="w-full min-h-[100px] p-2 bg-white border-t-0 border border-gray-300 rounded-b-lg focus:outline-none"
      />
    </div>
  );
};

export default TextEditor;