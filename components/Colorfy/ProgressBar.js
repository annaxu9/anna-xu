export default function ProgressBar({ start, end, target }) {
  // Calculate the total range
  const totalRange = end - start;

  // Calculate the progress width as a percentage
  const progressWidth = ((target - start) / totalRange) * 100;

  // Styles for the progress and remaining parts
  const progressStyle = {
    width: `${progressWidth}%`,
    backgroundColor: 'black',
    borderRadius: '0.25rem 0 0 0.25rem',
  };

  const remainingStyle = {
    width: `${100 - progressWidth}%`,
    backgroundColor: 'grey',
    borderRadius: '0 0.25rem 0.25rem 0',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '7px', // Adjust as necessary
    left: `calc(${progressWidth}% - 5px)`, // Center the arrow
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '10px solid black', // Arrow color
  };

  const numberStyle = {
    position: 'absolute',
    top: '17px', 
    left: `calc(${progressWidth}% - 10px)`,
    fontSize: 'small',
  }

  return (
    <div className="relative w-full mt-2 mb-9">
      <div className="flex w-full h-1">
        <div style={progressStyle}></div>
        <div style={remainingStyle}></div>
      </div>
      <div style={arrowStyle}></div>
      <span style={numberStyle}>
        {target}
      </span>
    </div>
  );
}
