import React, { useState, useEffect, useRef } from 'react';

const YourComponent = () => {
  const [results, setResults] = useState([]); // your search results
  const [selectedItem, setSelectedItem] = useState(0); // Initialize to 0
  const [isInputFocused, setIsInputFocused] = useState(true); // Track focus state
  const inputRef = useRef(null); // Ref for the search input

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isInputFocused) {
        // Logic when input is focused
        if (event.key === "Enter") {
            handleSongClick(results[selectedItem].id);
        }
      } else {
        // Logic when result list is focused
        if (event.key === "ArrowDown") {
          setSelectedItem(prev => (prev === results.length - 1) ? 0 : prev + 1);
        } else if (event.key === "ArrowUp") {
          setSelectedItem(prev => (prev === 0) ? results.length - 1 : prev - 1);
        } else if (event.key === "Enter" && selectedItem !== null) {
          handleSongClick(results[selectedItem].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [results, selectedItem, isInputFocused]);

  const handleSongClick = (id) => {
    // handle song click logic here
  };

  return (
    <div>
      <input 
        ref={inputRef}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        // ... other props
      />
      <div id="results" className="absolute top-full w-4/5 mt-1 bg-white border-white-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
        {results.map((track, index) => (
          <p 
            key={track.id} 
            onClick={() => handleSongClick(track.id)}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedItem === index ? 'bg-gray-100' : ''}`}
          >
            {track.name} by {track.artist}
          </p>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
