import ProgressBar from "./ProgressBar"
import StatHover from "./StatHover"

export default function Stats({acousticness, danceability, energy, tempo, valence, speechiness}) {

    function categorizeTempo(bpm) {
        if (bpm >= 40 && bpm <= 60) {
            return 'Largo';
        } else if (bpm >= 66 && bpm <= 76) {
            return 'Adagio';
        } else if (bpm >= 76 && bpm <= 108) {
            return 'Andante';
        } else if (bpm >= 108 && bpm <= 120) {
            return 'Moderato';
        } else if (bpm >= 120 && bpm <= 168) {
            return 'Allegro';
        } else if (bpm >= 168 && bpm <= 200) {
            return 'Presto';
        } else if (bpm > 200) {
            return 'Prestissimo';
        } else if (bpm < 40) {
            return 'Slower than Largo';
        } else {
            return 'Faster Than Prestissimo'
        }
    }

    return (
        <div className="bg-melrose100 p-2 rounded-lg">
            <h1 className="text-center font-black">Stats</h1>
            <div className="flex justify-around flex-col sm:flex-row items-center">
                <div className="flex-grow w-1/2 p-2">
                    <div>
                        <StatHover 
                            title="Acousticness"
                            hovertext="Determined by analyzing the presence of non-electric and non-electronic sounds. 
                            Songs featuring a lot of acoustic guitar or piano tend to have higher acousticness values whereas
                            songs with low acoustic scores tend to be more electronic."
                        />
                        <ProgressBar start={0} end={1} target={acousticness} />
                    </div>
                    <div>
                        <StatHover 
                            title="Danceability"
                            hovertext="This describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. 
                            A song with a high danceability score typically has a steady beat and a clear rhythm."
                        />
                        <ProgressBar start={0} end={1} target={danceability}/>
                    </div>
                    <div>
                        <StatHover 
                            title="Energy"
                            hovertext="This reflects a track's intensity, shaped by dynamic range (contrast between loud and quiet parts), rhythmic stability (consistency of the beat), and timbral texture (quality and intensity of sounds). 
                            Factors like faster tempo, higher perceived loudness, and more intense vocals also contribute to a song's energy level, making it a comprehensive indicator of its power and vibrancy."
                        />
                        <ProgressBar start={0} end={1} target={energy}/>
                    </div>
                </div>
                <div className="flex-grow w-1/2 p-2">
                    <div>
                        <StatHover 
                            title="Speechiness"
                            hovertext="This measure of how much spoken words are present. 
                            A song that blends music with spoken elements, such as rap, will have a higher speechiness score compared to a completely instrumental piece.
                            Since podcasts are included in this score, numbers will mostly range from 0 - 0.4"
                        />
                        <ProgressBar start={0} end={0.4} target={speechiness}/>
                    </div>
                    <div className="flex flex-col text-center items-center">
                        <StatHover 
                            title="Tempo"
                            hovertext="Tempo is measured in beats per minute (BPM) and spans a wide range. 
                            Largo, the slowest tempo, ranges from 40–60 BPM and is often found in classical and meditative music. 
                            Adagio (66–76 BPM) and Andante (76–108 BPM) tempos are typical for slower ballads and relaxed pop songs. 
                            Moderato, a moderate tempo of 108–120 BPM, suits many rock and pop songs. 
                            Faster tempos like Allegro (120–168 BPM) are common in upbeat pop, dance, and certain types of classical music. 
                            The very fast Presto (168–200 BPM) and Prestissimo (over 200 BPM) are often found in fast-paced electronic music and some extreme genres of metal."
                        />
                        <h2 className="pl-3 mb-7 text-sm">{Math.round(tempo)} BPM ({categorizeTempo(tempo)})</h2>
                    </div>
                    <div>
                        <StatHover
                            title="Valence"
                            hovertext="This measures the musical positiveness conveyed by a track. 
                            Tracks with high valence sound more positive (happy, cheerful, euphoric), while tracks with low valence sound more negative (sad, depressed, angry)."
                        />
                        <ProgressBar start={0} end={1} target={valence}/>
                    </div>
                </div>
            </div>


        </div>
    )
}