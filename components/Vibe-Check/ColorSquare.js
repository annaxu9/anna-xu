import React from 'react';

const ColorSquare = ({ color }) => {
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
  };

  return <div className='m-3' style={style} />;
}

export default ColorSquare;
