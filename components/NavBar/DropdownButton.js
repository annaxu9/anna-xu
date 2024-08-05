import Link from "next/link";
import { useState } from "react";

export default function DropdownButton({path, path_name}) {
    const [textSize, setTextSize] = useState("text-base");
    const changeText = () => {
        if (textSize == "text-base") {
            setTextSize("text-lg")
        } else {
            setTextSize("text-base")
        }
    }
    return (
        <li onMouseEnter={changeText} onMouseLeave={changeText} className="flex items-center justify-center">
            <Link href={"/" + path} className={"transition-all duration-400 relative h-[23px] z-100 p-1 rounded text-white text-center " + textSize} >
                {path_name}
            </Link>
        </li>
    )
}