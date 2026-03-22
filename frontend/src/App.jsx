import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Upload from './pages/Upload';
import MusicOutput from './pages/MusicOutput';
import SuggestionsPage from './pages/SuggestionsPage';

function App() {
  const [detectedMood, setDetectedMood] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload onMoodDetected={setDetectedMood} />} />
          <Route path="/music" element={<MusicOutput detectedMood={detectedMood} />} />
          <Route path="/suggestions" element={<SuggestionsPage detectedMood={detectedMood} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
