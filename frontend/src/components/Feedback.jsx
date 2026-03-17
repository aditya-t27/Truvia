import { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className=" bg-gray-400 rounded-xl my-20 shadow-md w-4/6 mx-auto p-4">
      <div className="flex md:flex-row flex-col w-full h-64">
        {/* Left: Image (50%) */}
        <div className="w-1/2 h-full">
          <img
            src="../Feedback.jpg"
            alt="Feedback"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right: Text Area (50%) */}
        <div className="w-1/2 h-full  flex flex-col">
          <textarea
            className="w-full h-full p-3 border border-gray-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => {
            alert(`Feedback Submitted: ${feedback}`);
            setFeedback(""); // Clear input after submission
          }}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
