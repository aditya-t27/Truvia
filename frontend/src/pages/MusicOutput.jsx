import React from "react";
import MusicPlayer from "../components/MusicPlayer";

const MusicOutput = ({ detectedMood }) => {
  const mood = detectedMood || "happy";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        🎶 Music Suggestions for Your Mood
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Based on your detected mood: <span className="font-semibold capitalize">{mood}</span>
      </p>
      <MusicPlayer mood={mood} />
    </div>
  );
};

export default MusicOutput;
