import { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";

const cards = [
    { title: "Facial Emotion Detection", description: "Recognize emotions from facial expressions instantly.", image: "../FaceScan.png" },
    { title: "Mood Analysis", description: "Identify overall mood based on detected emotions.", image: "../MoodAnalysis.png" },
    { title: "Therapy Recommendations", description: "Suggest personalized therapy techniques for well-being.", image: "../Therapy.png" },
    { title: "Music Suggestions", description: "Curate music playlists based on emotional state.", image: "../Music.png" },
    { title: "Activity Recommendations", description: "Offer activities to uplift or match the user’s mood.", image: "../Activity.png" },
    { title: "AI-Powered Insights", description: "Provide deep analysis for emotional and mental health trends.", image: "../Ai.png" }
];

export default function FeatureContainer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[radial-gradient(circle,_rgba(33,28,117,1)_0%,_rgba(188,192,205,1)_53%,_rgba(10,10,173,1)_100%)] w-full">
      <div className="relative p-10 w-full max-w-4xl mt-20 mx-auto overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 33.33}%)` }}>
          {cards.concat(cards).map((card, i) => ( // Duplicate cards for infinite effect
            <div key={i} className="w-1/3 px-2 flex-shrink-0">
              <FeatureCard title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
