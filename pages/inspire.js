import { useState } from "react";

export default function Inspire() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="art-board">
            <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
            <div className="display-area">{text}</div>
        </div>
    );
}