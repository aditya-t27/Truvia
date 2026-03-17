import React, { useState } from "react";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use your backend IP or localhost as appropriate
  const backendURL = "http://192.168.1.4:5001/predict";

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Show preview
      setImageFile(file); // Store file for upload
      setPrediction(null);
      setError(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!imageFile) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch(backendURL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Server error");
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
        {selectedImage && (
          <img src={selectedImage} alt="Preview" className="w-40 h-40 mt-4 rounded-lg" />
        )}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          disabled={!imageFile || loading}
        >
          {loading ? "Processing..." : "Upload & Predict"}
        </button>
      </form>
      {error && (
        <div className="mt-4 text-red-600">{error}</div>
      )}
      {prediction && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold">Prediction:</h3>
          <p className="text-lg">Emotion: {prediction.emotion}</p>
          <p className="text-lg">Confidence: {Math.round(prediction.confidence * 100)}%</p>
          {prediction.probabilities && (
            <ul className="mt-2">
              {Object.entries(prediction.probabilities).map(([emotion, prob]) => (
                <li key={emotion}>{emotion}: {(prob * 100).toFixed(2)}%</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
