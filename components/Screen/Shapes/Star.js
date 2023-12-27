const Star = () => {
    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const starColor = getRandomColor();

    return (
        <div className="star">
            <style jsx>{`
                .star {
                    --star-color:${starColor};
                    margin:1em auto;
                    font-size:2em;
                    position: relative;
                    display: block;
                    width: 0px;
                    height: 0px;
                    border-right: 1em solid transparent;
                    border-bottom: 0.7em solid var(--star-color);
                    border-left: 1em solid transparent;
                    transform: rotate(35deg);
                }
                .star::before {
                    border-bottom: 0.8em solid var(--star-color);
                    border-left: 0.3em solid transparent;
                    border-right: 0.3em solid transparent;
                    position: absolute;
                    height: 0;
                    width: 0;
                    top: -0.45em;
                    left: -0.65em;
                    display: block;
                    content:"";
                    transform: rotate(-35deg);
                }
                .star::after {
                    position: absolute;
                    display: block;
                    top: 0.03em;
                    left: -1.05em;
                    width: 0;
                    height: 0;
                    border-right: 1em solid transparent;
                    border-bottom: 0.7em solid var(--star-color);
                    border-left: 1em solid transparent;
                    transform: rotate(-70deg);
                    content:"";
                }
            `}</style>
        </div>
    );
}

export default Star;
