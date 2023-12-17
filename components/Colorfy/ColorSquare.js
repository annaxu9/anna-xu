import React from 'react';

const ColorSquare = ({ hue, saturation, lightness }) => {
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
  };

  return <div style={style} />;
}

export default ColorSquare;
