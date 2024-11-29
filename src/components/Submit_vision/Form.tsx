"use client"
import { useState, useEffect } from "react";
import TextEditor from "@/components/Submit_vision/Texteditor"; // Import the TextEditor component

// Interface to define the structure of the form data
interface FormData {
  sampritWho: string;
  sampritDOB: string;
  sampritAge: string;
  sampritFavFootballer: string;
  sampritLove: string;
}

// Maximum word limit for the text fields
const WORD_LIMIT = 300;

const Form = () => {
  // State for tracking whether the component is loaded on the client side
  const [isClient, setIsClient] = useState(false);

  // State to store the form data for each question
  const [formData, setFormData] = useState<FormData>({
    sampritWho: "",
    sampritDOB: "",
    sampritAge: "",
    sampritFavFootballer: "",
    sampritLove: "",
  });

  // State to track the progress of the form completion
  const [progress, setProgress] = useState(0);

  // Set the client-side state to true when the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate the progress based on how many fields are filled
  useEffect(() => {
    const totalFields = 5;
    const completedFields = Object.values(formData).filter(
      (val) => val.trim() !== ""
    ).length;
    const progressValue = (completedFields / totalFields) * 100;
    setProgress(progressValue);
  }, [formData]);

  // Check if all form fields are filled
  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  // Handle text editor content change
  const handleEditorChange = (name: string, content: string) => {
    // Get word count of the editor content
    const wordCount = getWordCount(content);

    // If the word count exceeds the limit, show an alert and stop saving the content
    if (wordCount > WORD_LIMIT) {
      alert("Word limit exceeded. Maximum allowed is 300 words.");
      return;
    }

    // Update the corresponding field in the form data state
    setFormData((prevData) => ({ ...prevData, [name]: content }));
  };

  // Helper function to calculate word count
  const getWordCount = (text: string) => {
    if (!text.trim()) return 0; // If the text is empty, return 0
    return text.trim().split(/\s+/).length; // Split by spaces and count words
  };

  // If the client-side is not ready, show a loading message
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 p-8 justify-center gap-8">
      <div className="w-full sm:w-1/2 p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Fill Your Details</h2>

        {[ 
          { label: "Who is Samprit?", name: "sampritWho" },
          { label: "What is Samprit's Date of Birth?", name: "sampritDOB" },
          { label: "How old is Samprit?", name: "sampritAge" },
          { label: "Who is Samprit's Favorite Footballer?", name: "sampritFavFootballer" },
          { label: "What does Samprit Love?", name: "sampritLove" },
        ].map(({ label, name }) => (
          <div className="question-card" key={name}>
            <label className="block text-xl font-semibold">{label}</label>
            <TextEditor
              onContentChange={(content: string) =>
                handleEditorChange(name, content)
              }
            />
            <div className="text-right text-sm text-gray-600 mt-1">
              {getWordCount(formData[name as keyof FormData])}/{WORD_LIMIT}
            </div>
          </div>
        ))}

        <div className="flex items-center mt-6">
          <progress value={progress} max={100} className="w-full" />
          <span className="ml-2 text-lg font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <button
          disabled={!isFormComplete}
          className={`mt-4 w-full px-4 py-3 text-white ${
            isFormComplete ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
          } rounded-lg shadow-md`}
        >
          Submit
        </button>
      </div>

      {/* Live preview section */}
      <div className="w-full sm:w-1/2 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Live Preview</h2>
        <div className="space-y-6">
          <div className="preview-item">
            <h4 className="text-xl font-semibold">Who is Samprit?</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritWho }} />
          </div>
          <div className="preview-item">
            <h4 className="text-xl font-semibold">Samprit's Date of Birth</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritDOB }} />
          </div>
          <div className="preview-item">
            <h4 className="text-xl font-semibold">Samprit's Age</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritAge }} />
          </div>
          <div className="preview-item">
            <h4 className="text-xl font-semibold">Samprit's Favorite Footballer</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritFavFootballer }} />
          </div>
          <div className="preview-item">
            <h4 className="text-xl font-semibold">Samprit's Love</h4>
            <p dangerouslySetInnerHTML={{ __html: formData.sampritLove }} />
          </div>
        </div>
        <div className="mt-6">
          <button
            className={`w-full px-4 py-3 text-white ${
              isFormComplete ? "bg-green-500" : "bg-gray-300 cursor-not-allowed"
            } rounded-lg shadow-md`}
            disabled={!isFormComplete}
            onClick={() => {
              alert("Download functionality is not implemented yet.");
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

