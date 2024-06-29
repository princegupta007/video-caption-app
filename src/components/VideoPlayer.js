// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, playing, onPlayPause }) => {
  return (
    <div>
      <ReactPlayer url={url} playing={playing} controls />
      <button onClick={onPlayPause}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default VideoPlayer;
