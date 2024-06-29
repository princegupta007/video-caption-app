// src/components/CaptionDisplay.js
import React from 'react';

const CaptionDisplay = ({ captions, currentTime }) => {
  const currentCaption = captions.find(
    (caption) => currentTime >= caption.start && currentTime <= caption.end
  );

  return (
    <div className="caption-display">
      {currentCaption ? currentCaption.text : ''}
    </div>
  );
};

export default CaptionDisplay;
