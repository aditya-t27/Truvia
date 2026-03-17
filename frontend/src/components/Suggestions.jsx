import { useState, useEffect } from "react";
import { fetchQuote, fetchActivity, fetchMindfulnessExercise } from "../../api/apiUtils";

export default function Suggestions({ detectedMood }) {
     const [mood, setMood] = useState(detectedMood || "sad"); // Default mood is "happy"
    
      useEffect(() => {
        if (detectedMood) {
          setMood(detectedMood);
        }
      }, [detectedMood]);
  const [quote, setQuote] = useState("");
  const [activity, setActivity] = useState("");
  const [exercise, setExercise] = useState("");

  useEffect(() => {
    fetchQuote().then(setQuote);
    fetchActivity().then(setActivity);
    fetchMindfulnessExercise().then(setExercise);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">💡 Personalized Suggestions</h2>

      {/* Motivational Quote */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold">📖 Motivational Quote</h3>
        <p>{quote}</p>
      </div>

      {/* Activity Suggestion */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold">🎭 Fun Activity</h3>
        <p>{activity}</p>
      </div>

      {/* Mindfulness Exercise */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold">🧘 Mindfulness Exercise</h3>
        <p>{exercise}</p>
      </div>
    </div>
  );
}
