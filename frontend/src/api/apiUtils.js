const ZEN_QUOTES_URL = "https://zenquotes.io/api/random";
const BORED_API_URL = "https://www.boredapi.com/api/activity";
const MINDFUL_MOMENTS_URL = "https://mindfulmomentsapi.com/api/exercises";

/** Fetch a motivational quote */
export const fetchQuote = async () => {
    try {
        const response = await fetch(ZEN_QUOTES_URL);
        const data = await response.json();
        return data[0]?.q + " - " + data[0]?.a;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Stay positive and keep going!";
    }
};

/** Fetch a fun activity suggestion */
export const fetchActivity = async () => {
    try {
        const response = await fetch(BORED_API_URL);
        const data = await response.json();
        return data.activity || "Try something new today!";
    } catch (error) {
        console.error("Error fetching activity:", error);
        return "Explore a new hobby!";
    }
};

/** Fetch a mindfulness exercise */
export const fetchMindfulnessExercise = async () => {
    try {
        const response = await fetch(MINDFUL_MOMENTS_URL);
        const data = await response.json();
        return data.exercise || "Take a deep breath and be present.";
    } catch (error) {
        console.error("Error fetching mindfulness exercise:", error);
        return "Take a deep breath and focus on the moment.";
    }
};
