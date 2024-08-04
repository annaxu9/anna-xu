import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function SearchResults({results, isSearchFocused}) {
    const [selectedItem, setSelectedItem] = useState(null);
    const resultRefs = useRef([]);

    const router = useRouter();

    const handleSongClick = (trackId) => {
        router.push(`/vibe-check/${trackId}`);
      };

    useEffect(() => {
      setSelectedItem(null)
    }, [results])

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowDown") {
            if (selectedItem === null) {
                setSelectedItem(0)
            } else if (selectedItem < results.length - 1) {
                setSelectedItem(selectedItem + 1)
            }
          } else if (event.key === "ArrowUp") {
            if (selectedItem > 0 && selectedItem < results.length) {
                setSelectedItem(selectedItem - 1) 
            }          
          } else if (event.key === "Enter" && selectedItem !== null && isSearchFocused == false) {
            handleSongClick(results[selectedItem].id);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [selectedItem, isSearchFocused]);

      useEffect(() => {
        if (selectedItem !== null && resultRefs.current[selectedItem]) {
          resultRefs.current[selectedItem].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, [selectedItem]);

      return (
        <div id="results" className="absolute top-full w-4/5 mt-1 bg-white  border-white-300 rounded-md shadow-lg max-h-60 z-10">
            {results.map((track, index) => (
            <p 
                key={track.id} 
                onClick={() => handleSongClick(track.id)}
                className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedItem === index ? 'bg-gray-100' : ''}`}
                ref={el => resultRefs.current[index] = el}
            >
                {track.name} by {track.artist}
            </p>
            ))}
        </div>
      )


}