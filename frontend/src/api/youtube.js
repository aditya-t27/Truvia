const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export const fetchMusicForMood = async (mood, language = "Hindi") => {
  try {
    // Set query based on the selected language
    const query =
      language.toLowerCase() === "punjabi"
        ? `${mood} Punjabi songs`
        : `${mood} Hindi songs`;

    const response = await fetch(
      `${BASE_URL}?part=snippet&q=${query}&type=video&maxResults=5&key=${API_KEY}`
    );

    const data = await response.json();
    return data.items; // Returns array of videos
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return [];
  }
};
