import React, { useEffect, useState } from "react";
import { fetchMusicForMood } from "../api/youtube";

const MusicPlayer = ({ mood }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (mood) {
      fetchMusicForMood(mood).then(setVideos);
    }
  }, [mood]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Recommended Music for "{mood}"</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {videos.map((video) => (
          <iframe
            key={video.id.videoId}
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            className="rounded-lg shadow-md"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
