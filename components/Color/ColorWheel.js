import { useState, useEffect } from 'react';
import { categorizeColor } from '../../utils/learn-colors';

export default function ColorWheel() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [colorName, setColorName] = useState('White');

  const handleColorChange = async (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    // Remove the # from the hex code
    const hexCode = newColor.substring(1);

    // Call the API
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode}`);
    const data = await response.json();

    // Set the color name
    setColorName(data.name.value);
  };

  return (
    <div className='w-screen flex items-center justify-center'>
        <div className="flex flex-col justify-center items-center border border-black p-4 m-10 w-96">
        {colorName && <p>Color Name: <span className="font-semibold">{colorName}</span></p>}
        <p>Selected Color: <span className="font-semibold">{selectedColor}</span></p>
        <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-60 h-60 cursor-pointer"
        />
        <div className="mt-4 text-lg">
        </div>
        </div>
        {/* <h1>{categorizeColor(selectedColor)}</h1> */}
    </div>

  );  
};