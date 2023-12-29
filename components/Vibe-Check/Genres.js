import { getGenres } from "../../utils/spotify"

export default function Genres({ artists }) {
    const genres = getGenres(artists);
    console.log(genres); // Assuming this is a Set or Array of genre strings

    // Convert Set to Array if genres is a Set
    const genresArray = Array.from(genres);

    return (
        <div className="flex flex-wrap justify-center p-5">
            {
                genresArray.map((genre) => (
                    <div key={genre} className="bg-melrose100 rounded p-2 m-1 whitespace-nowrap"> {/* Use genre as key if it's unique */}
                        <h1 className="text-xs">{genre}</h1>
                    </div>
                ))
            }
        </div>
    );
}
