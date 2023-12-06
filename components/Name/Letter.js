import { useState, useEffect } from "react";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomBool(percent) {
    if (Math.random() > percent) {
        return true
    }
    return false
}


export default function Letter({letter}) {
    const [color, setColor] = useState('black');

    useEffect(() => {
        const interval = setInterval(() => {
            if (getRandomBool(.7)) {
                setColor(getRandomColor());
            }

        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (/^[A-Za-z]+$/.test(letter)) {
        return (
            <div className="font-semibold" style={{ color: color }}>
                {letter}
            </div>
        )
    } else {
        return (
            <div className="font-semibold">
                {letter}
            </div>
        )
    }


}