import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



export default function SearchResults({results}) {
    const [selectedItem, setSelectedItem] = useState(null);

    const router = useRouter();

    const handleSongClick = (trackId) => {
        router.push(`/colorfy/${trackId}`);
      };

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "ArrowDown") {
            if (selectedItem === null || selectedItem === results.length) {
                setSelectedItem(0)
            } else if (selectedItem < results.length - 1) {
                setSelectedItem(selectedItem + 1)
            }
          } else if (event.key === "ArrowUp") {
            if (selectedItem === null || selectedItem === 0) {
                setSelectedItem(results.length - 1)
            } else {
                setSelectedItem(selectedItem - 1) 
            }          
          } else if (event.key === "Enter" && selectedItem !== null) {
            handleSongClick(results[selectedItem].id);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [results, selectedItem]);

      return (
        <div id="results" className="absolute top-full w-4/5 mt-1 bg-white  border-white-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
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
      )


}