// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';

export default function ColorPage() {
  const [largeSquare1Color, setLargeSquare1Color] = useState('#8e44ad'); // Purple
  const [largeSquare2Color, setLargeSquare2Color] = useState('#f39c12'); // Orange
  const [smallSquare1Color, setSmallSquare1Color] = useState('#b87333'); // Brownish
  const [smallSquare2Color, setSmallSquare2Color] = useState('#d98e8e'); // Pinkish

  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('');
  const [setColorFunction, setSetColorFunction] = useState(() => {});

  const pickerRef = useRef();

  // Close the color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setPickerVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSquareClick = (colorSetter, currentColor, event) => {
    setSetColorFunction(() => colorSetter);
    setColor(currentColor);
    setPickerVisible(true);
    setPickerPosition({ x: event.clientX, y: event.clientY }); // Place picker near the clicked square
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-4 w-3/4 h-2/3">
        {/* Large Square 1 */}
        <div
          className="relative cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: largeSquare1Color }}
          onClick={(e) => handleSquareClick(setLargeSquare1Color, largeSquare1Color, e)}
        >
          {/* Small Square inside Large Square 1 */}
          <div
            className="w-16 h-16 cursor-pointer"
            style={{ backgroundColor: smallSquare1Color }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click handler
              handleSquareClick(setSmallSquare1Color, smallSquare1Color, e);
            }}
          />
        </div>

        {/* Large Square 2 */}
        <div
          className="relative cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: largeSquare2Color }}
          onClick={(e) => handleSquareClick(setLargeSquare2Color, largeSquare2Color, e)}
        >
          {/* Small Square inside Large Square 2 */}
          <div
            className="w-16 h-16 cursor-pointer"
            style={{ backgroundColor: smallSquare2Color }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click handler
              handleSquareClick(setSmallSquare2Color, smallSquare2Color, e);
            }}
          />
        </div>
      </div>

      {/* Render the color picker if visible */}
      {pickerVisible && (
        <div
          ref={pickerRef}
          className="absolute"
          style={{ top: pickerPosition.y + 10, left: pickerPosition.x + 10 }}
        >
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
            onChangeComplete={(updatedColor) => setColorFunction(updatedColor.hex)}
          />
        </div>
      )}
    </div>
  );
};

