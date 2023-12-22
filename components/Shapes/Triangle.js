const Triangle = () => {
    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const triangleStyle = {
        width: 0,
        height: 0,
        borderLeft: '30px solid transparent',
        borderRight: '30px solid transparent',
        borderBottom: `52px solid ${getRandomColor()}`,
    };

    return (
        <div className="flex justify-center items-center">
            <div style={triangleStyle}></div>
        </div>

    );
}

export default Triangle;
