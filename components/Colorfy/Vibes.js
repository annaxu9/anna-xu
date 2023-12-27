import ColorSquare from "./ColorSquare"
import {getFirstColor, getSecondColor, getThirdColor, energyComment} from "../../utils/colors";

export default function Vibes({acousticness, energy, danceability, valence, speechiness, index}) {
    
    const firstColor = getFirstColor(valence, danceability, energy, speechiness)
    console.log(firstColor)

    return (
<div className="flex flex-col items-center">
    <h1 className="text-center font-black text-3xl my-4">Vibes</h1>
    <div className="flex flex-wrap justify-center gap-4 ">
        <ColorSquare color={firstColor[0]}/>
        <ColorSquare color={getSecondColor(firstColor[0], energy)}/>
        <ColorSquare color={getThirdColor(index)[0]}/>
    </div>
    <div>
        <p className="text-center mt-2">{firstColor[1]}</p>
        <p className="text-center mt-2">with {energyComment(energy)} energy...</p>
        <p className="text-center mt-2 mb-3">and it&apos;s in the {getThirdColor(index)[1]} key</p>
    </div>
</div>

    )
}