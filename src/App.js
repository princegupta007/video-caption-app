// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import CaptionForm from './components/CaptionForm';
import CaptionDisplay from './components/CaptionDisplay';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playerRef = useRef(null);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playerRef.current) {
      const interval = setInterval(() => {
        setCurrentTime(playerRef.current.getCurrentTime());
      }, 100);
      return () => clearInterval(interval);
    }
  }, [playerRef, playing]);

  return (
    <div className="App">
      <h1>Video Caption App</h1>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <VideoPlayer url={url} playing={playing} onPlayPause={handlePlayPause} />
      <CaptionForm addCaption={addCaption} />
      <CaptionDisplay captions={captions} currentTime={currentTime} />
    </div>
  );
};

export default App;
