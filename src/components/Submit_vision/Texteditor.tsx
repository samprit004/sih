"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface TextEditorProps {
  onContentChange?: (content: string) => void; // Optional callback for content updates
}

const TextEditor: React.FC<TextEditorProps> = ({ onContentChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");

  // Function to apply commands like bold, italic, underline
  const applyCommand = (command: string, value?: string) => {
    if (editorRef.current) {
      document.execCommand(command, false, value || "");
      const updatedContent = editorRef.current.innerHTML;
      handleContentUpdate(updatedContent);
    }
  };

  // Bullet list function (Correcting the approach)
  const handleBulletList = () => {
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString().trim();

        // Check if the selection is non-empty
        if (selectedText.length > 0) {
          // Create a bullet list with the selected text
          const listHTML = `<ul><li>${selectedText.replace(/\n/g, "</li><li>")}</li></ul>`;
          const newContent = editorRef.current.innerHTML.replace(
            selectedText,
            listHTML
          );
          editorRef.current.innerHTML = newContent;
          handleContentUpdate(newContent);
        } else {
          // If no text is selected, create a new bullet list
          const currentContent = editorRef.current.innerHTML;
          const newContent = `${currentContent}<ul><li></li></ul>`;
          editorRef.current.innerHTML = newContent;
          handleContentUpdate(newContent);
        }
      }
    }
  };

  // Handle input and update content state
  const handleInput = () => {
    if (editorRef.current) {
      let updatedContent = editorRef.current.innerHTML;

      // Remove unnecessary <br> tags when the content is empty
      if (updatedContent === "<br>" || updatedContent.trim() === "") {
        updatedContent = "";
        editorRef.current.innerHTML = ""; // Clear the editor
      }

      handleContentUpdate(updatedContent);
    }
  };

  // Centralized content update handler
  const handleContentUpdate = (updatedContent: string) => {
    setContent(updatedContent);
    if (onContentChange) {
      onContentChange(updatedContent);
    }
  };

  return (
    <div className="border border-black rounded-md">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-[#AAA2A2A3] px-2 py-1 border-b border-black rounded-sm">
        {/* Formatting Buttons */}
        <div className="flex gap-2">
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
          <button onClick={handleBulletList} className="px-2 hover:bg-gray-300">
            <Image src="/bullet.svg" alt="Bullet List" width={20} height={20} />
          </button>
        </div>

        {/* Get Help Button */}
        <button className="text-sm text-white px-3 py-1 bg-black rounded-sm hover:bg-gray-400 flex gap-3">
          Get help with writing
          <Image src="/plus.svg" alt="Bullet List" width={20} height={20} />
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
