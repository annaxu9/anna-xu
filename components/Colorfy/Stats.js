import ProgressBar from "./ProgressBar"

export default function Stats({acousticness, danceability, energy, tempo, valence, speechiness}) {
    return (
        <div className="bg-melrose100 p-2 rounded-lg">
            <h1 className="text-center font-black">Stats</h1>
            <div className="flex justify-around flex-col md:flex-row">
                <div className="flex-grow w-1/2 p-2">
                    <div>
                        <h2>Acousticness</h2>
                        <ProgressBar start={0} end={1} target={acousticness}/>
                    </div>
                    <div>
                        <h2>Danceability</h2>
                        <ProgressBar start={0} end={1} target={danceability}/>
                    </div>
                    <div>
                        <h2>Energy</h2>
                        <ProgressBar start={0} end={1} target={energy}/>
                    </div>
                </div>
                <div className="flex-grow w-1/2 p-2">
                    <div>
                        <h2>Speechiness</h2>
                        <ProgressBar start={0} end={1} target={speechiness}/>
                    </div>
                    <div>
                        <h2>Tempo</h2>
                        <h2 className="pl-3 mb-6">{tempo} BPM</h2>
                    </div>
                    <div>
                        <h2>Valence</h2>
                        <ProgressBar start={0} end={1} target={valence}/>
                    </div>
                </div>
            </div>


        </div>
    )
}