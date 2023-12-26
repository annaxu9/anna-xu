import ColorSquare from "./ColorSquare"
import {getFirstColor, getSecondColor, getThirdColor} from "../../utils/colors";

export default function Vibes({acousticness, energy, danceability, valence, speechiness, index}) {
    console.log(index)
    const firstColor = getFirstColor(valence, danceability, energy, speechiness)

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center font-black">Vibes</h1>
            <div className="flex flex-col md:flex-row justify-center">
                <ColorSquare color={firstColor}/>
                <ColorSquare color={getSecondColor(firstColor, energy)}/>
                <ColorSquare color={getThirdColor(index)}/>
            </div>
            
        </div>
    )
}