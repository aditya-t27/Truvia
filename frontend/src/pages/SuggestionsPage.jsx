import Suggestions from "../components/Suggestions"; // Import the component
import { useState } from "react";

export default function SuggestionsPage({mood}) {


  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Your Personalized Suggestions</h1>
      <Suggestions mood={mood} />
    </div>
  );
}
