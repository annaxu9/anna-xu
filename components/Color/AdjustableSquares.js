// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { ChromePicker } from 'react-color';

const AdjustableSquares = () => {
  // States for colors
  const [largeSquare1Color, setLargeSquare1Color] = useState('#8e44ad');
  const [largeSquare2Color, setLargeSquare2Color] = useState('#f39c12');
  const [smallSquare1Color, setSmallSquare1Color] = useState('#b87333');
  const [smallSquare2Color, setSmallSquare2Color] = useState('#d98e8e');

  // States for sizes (width and height of each square)
  const [largeSquare1Size, setLargeSquare1Size] = useState({ width: 300, height: 300 });
  const [largeSquare2Size, setLargeSquare2Size] = useState({ width: 300, height: 300 });
  const [smallSquare1Size, setSmallSquare1Size] = useState({ width: 50, height: 50 });
  const [smallSquare2Size, setSmallSquare2Size] = useState({ width: 50, height: 50 });

  // States for color picker visibility
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('');
  const [setColorFunction, setSetColorFunction] = useState(() => {});

  const pickerRef = useRef();

  // Close color picker when clicking outside
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
    setPickerPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-2 gap-4 w-3/4">
        {/* Large Square 1 */}
        <div
          className="relative cursor-pointer flex items-center justify-center"
          style={{
            backgroundColor: largeSquare1Color,
            width: largeSquare1Size.width,
            height: largeSquare1Size.height,
          }}
          onClick={(e) => handleSquareClick(setLargeSquare1Color, largeSquare1Color, e)}
        >
          {/* Small Square inside Large Square 1 */}
          <div
            className="cursor-pointer"
            style={{
              backgroundColor: smallSquare1Color,
              width: smallSquare1Size.width,
              height: smallSquare1Size.height,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleSquareClick(setSmallSquare1Color, smallSquare1Color, e);
            }}
          />
        </div>

        {/* Large Square 2 */}
        <div
          className="relative cursor-pointer flex items-center justify-center"
          style={{
            backgroundColor: largeSquare2Color,
            width: largeSquare2Size.width,
            height: largeSquare2Size.height,
          }}
          onClick={(e) => handleSquareClick(setLargeSquare2Color, largeSquare2Color, e)}
        >
          {/* Small Square inside Large Square 2 */}
          <div
            className="cursor-pointer"
            style={{
              backgroundColor: smallSquare2Color,
              width: smallSquare2Size.width,
              height: smallSquare2Size.height,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleSquareClick(setSmallSquare2Color, smallSquare2Color, e);
            }}
          />
        </div>
      </div>

      {/* Sliders to adjust sizes */}
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Adjust Rectangle Sizes</h2>
        <div className="flex space-x-8">
          <div>
            <label>Large Square 1 Width: {largeSquare1Size.width}px</label>
            <input
              type="range"
              min="100"
              max="500"
              value={largeSquare1Size.width}
              onChange={(e) =>
                setLargeSquare1Size((prev) => ({ ...prev, width: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Large Square 1 Height: {largeSquare1Size.height}px</label>
            <input
              type="range"
              min="100"
              max="500"
              value={largeSquare1Size.height}
              onChange={(e) =>
                setLargeSquare1Size((prev) => ({ ...prev, height: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <label>Small Square 1 Width: {smallSquare1Size.width}px</label>
            <input
              type="range"
              min="20"
              max="200"
              value={smallSquare1Size.width}
              onChange={(e) =>
                setSmallSquare1Size((prev) => ({ ...prev, width: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Small Square 1 Height: {smallSquare1Size.height}px</label>
            <input
              type="range"
              min="20"
              max="200"
              value={smallSquare1Size.height}
              onChange={(e) =>
                setSmallSquare1Size((prev) => ({ ...prev, height: e.target.value }))
              }
            />
          </div>
        </div>
      </div>

      {/* Color Picker */}
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

export default AdjustableSquares;
