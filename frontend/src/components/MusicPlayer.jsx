import React from "react";

// Curated YouTube video IDs for each mood
const moodPlaylists = {
  happy: [
    { id: "ZbZSe6N_BXs", title: "Happy - Pharrell Williams" },
    { id: "ru0K8uYEZWw", title: "Walking On Sunshine - Katrina & The Waves" },
    { id: "y6Sxv-sUYtM", title: "Uptown Funk - Bruno Mars" },
    { id: "fJ9rUzIMcZQ", title: "Bohemian Rhapsody - Queen" },
    { id: "nfWlot6h_JM", title: "Shake It Off - Taylor Swift" },
  ],
  sad: [
    { id: "RBumgq5yVrA", title: "Someone Like You - Adele" },
    { id: "k4V3Mo61fJM", title: "Let Her Go - Passenger" },
    { id: "1DCKpAOXmqo", title: "Channa Mereya - Arijit Singh" },
    { id: "SpSMoBp8awM", title: "Tujhe Kitna Chahne Lage - Arijit Singh" },
    { id: "hLQl3WQQoQ0", title: "Someone You Loved - Lewis Capaldi" },
  ],
  angry: [
    { id: "r8OipmKFDeM", title: "Lose Yourself - Eminem" },
    { id: "CSvFpBOe8eY", title: "Stronger - Kanye West" },
    { id: "Hm7vnOC4hoY", title: "Apna Time Aayega - Ranveer Singh" },
    { id: "kXYiU_JCYtU", title: "Numb - Linkin Park" },
    { id: "lsV500W4BHU", title: "Centuries - Fall Out Boy" },
  ],
  fear: [
    { id: "u9Dg-g7t2l4", title: "Weightless - Marconi Union (Relaxing)" },
    { id: "1ZYbU82GVz4", title: "Breathe Me - Sia" },
    { id: "psuRGfAaju4", title: "Calm Down - Rema" },
    { id: "lp-EO5I60KA", title: "Stressed Out - Twenty One Pilots" },
    { id: "RgKAFK5djSk", title: "See You Again - Wiz Khalifa ft. Charlie Puth" },
  ],
  surprise: [
    { id: "dT2owtxkU8k", title: "Can't Stop The Feeling - Justin Timberlake" },
    { id: "JGwWNGJdvx8", title: "Shape of You - Ed Sheeran" },
    { id: "OPf0YbXqDm0", title: "Uptown Funk - Mark Ronson ft. Bruno Mars" },
    { id: "kJQP7kiw5Fk", title: "Despacito - Luis Fonsi ft. Daddy Yankee" },
    { id: "60ItHLz5WEA", title: "All Of Me - John Legend" },
  ],
  neutral: [
    { id: "YQHsXMglC9A", title: "Hello - Adele" },
    { id: "bo_efYhYU2A", title: "Tum Hi Ho - Arijit Singh" },
    { id: "450p7goxZqg", title: "Photograph - Ed Sheeran" },
    { id: "hT_nvWreIhg", title: "Counting Stars - OneRepublic" },
    { id: "RBumgq5yVrA", title: "Someone Like You - Adele" },
  ],
  disgust: [
    { id: "CevxZvSJLk8", title: "Roar - Katy Perry" },
    { id: "7wtfhZwyrcc", title: "Believer - Imagine Dragons" },
    { id: "btPJPFnesV4", title: "Eye of the Tiger - Survivor" },
    { id: "04854XqcfCY", title: "Bad Guy - Billie Eilish" },
    { id: "2vjPBrBU-TM", title: "Chandelier - Sia" },
  ],
};

const MusicPlayer = ({ mood }) => {
  const videos = moodPlaylists[mood?.toLowerCase()] || moodPlaylists["neutral"];

  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        🎵 Recommended Music for "{mood}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg overflow-hidden shadow-md bg-white">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              className="rounded-t-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="p-2 text-sm text-gray-700 font-medium truncate">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
