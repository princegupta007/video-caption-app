// src/components/CaptionForm.js
import React, { useState } from 'react';

const CaptionForm = ({ addCaption }) => {
  const [text, setText] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCaption({ text, start: parseFloat(start), end: parseFloat(end) });
    setText('');
    setStart('');
    setEnd('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Caption Text"
        required
      />
      <input
        type="number"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Start Time (s)"
        step="0.1"
        required
      />
      <input
        type="number"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="End Time (s)"
        step="0.1"
        required
      />
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionForm;
