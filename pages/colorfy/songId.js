import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import ColorSquare from '../../components/Colorfy/ColorSquare';

const SongDetails = () => {
    const { token } = useAuth(); // Access the token using useAuth
    const router = useRouter();
    const { songId } = router.query;

    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    const [artistsGenres, setArtistGenres] = useState(new Set());

    useEffect(() => {
        if (songId) {
            getTrackData(songId, token); // Pass the token to getTrackData
        }
    }, [songId]);

    async function getTrackData(trackId, token) {
        try {
            // Fetching track details
            const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const trackDetailsData = await trackResponse.json();

            // Fetching audio features
            const featuresResponse = await fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const audioFeaturesData = await featuresResponse.json();

            console.log(trackDetailsData.artists)

            // Fetching artists' genres
            const artistsGenresResponse = await Promise.all(trackDetailsData.artists.map(async artist => {
                const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artist.id}`, {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const artistData = await artistResponse.json();
                console.log(artistData)
                // Correctly add the artistData to the artistsGenres set
                for (let i = 0; i < artistData.genres.length; i++) {
                    artistsGenres.add(artistData.genres[i]);
                }
                
                setArtistGenres(artistsGenres);
                console.log(artistsGenres)
            }));

            setTrackDetails(trackDetailsData);
            setAudioFeatures(audioFeaturesData);
        } catch (error) {
            console.error("Error fetching data: ", error);
            window.location.href = '/api/login';
        }
    }

    function handleBackButtonClick() {
        router.back(); // Go back to the previous page
    }

    function getHue(valence) {
        return (1 - valence) * 280
    }

    function getSaturation(danceability) {
        return danceability * 100
    }

    function getLightness(energy) {
        energy = energy - .25
        if (energy < 0) {
            energy = 0.01
        }
        return energy * 100
    }

    function getHueTempo(tempo) {
        if (tempo > 500) {
            return 360; // Red
        }
        if (tempo > 300) {
            return mapToRange(tempo, 300, 500, 40, 60); // Orange to Lime Green
        }
        if (tempo > 200) {
            return mapToRange(tempo, 200, 300, 300, 360); // Purple to Red
        }
        if (tempo > 100) {
            return mapToRange(tempo, 100, 200, 120, 180); // Lime Green to Cyan
        }
        return mapToRange(tempo, 0, 100, 200, 275); // Blue to Purple
    }
    
    function mapToRange(input, inputMin, inputMax, outputMin, outputMax) {
        const slope = (outputMax - outputMin) / (inputMax - inputMin);
        return outputMin + slope * (input - inputMin);
    }

    function getHueKey(key) {
        const keys = [
            { key: "C Major", hsl: 60 },    // Bright Yellow
            { key: "C-sharp/D-flat Major", hsl: 180 },  // Teal
            { key: "D Major", hsl: 210 },   // Sky Blue
            { key: "D-sharp/E-flat Major", hsl: 190 },  // Cyan
            { key: "E Major", hsl: 240 },   // Royal Blue
            { key: "F Major", hsl: 350 },   // Light Pink
            { key: "F-sharp/G-flat Major", hsl: 270 },  // Purple
            { key: "G Major", hsl: 120 },   // Grass Green
            { key: "G-sharp/A-flat Major", hsl: 30 },   // Warm Orange
            { key: "A Major", hsl: 50 },    // Gold
            { key: "A-sharp/B-flat Major", hsl: 20 },   // Coral
            { key: "B Major", hsl: 300 }    // Magenta
        ];
        return keys[key].hsl
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="w-4/5 max-w-screen-lg min-h-screen p-6">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">{trackDetails?.name}</h1>
                <button 
                    onClick={handleBackButtonClick} 
                    className="mb-6 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded shadow"
                >
                    Go Back
                </button>

                {trackDetails && (
                    <div id="trackDetails" className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-2">{trackDetails.name}</h3>
                        <div className='flex flex-row space-x-2 mb-4'>
                            {/* Assuming ColorSquare is a component */}
                            <ColorSquare hue={getHue(audioFeatures.valence)} saturation={getSaturation(audioFeatures.danceability)} lightness={getLightness(audioFeatures.energy)} />
                            <ColorSquare hue={getHueTempo(audioFeatures.tempo)} saturation={getSaturation(audioFeatures.danceability)} lightness={getLightness(audioFeatures.energy)} />
                            <ColorSquare hue={getHueKey(audioFeatures.key)} saturation={70} lightness={50} />
                        </div>
                        <p>Artist: {trackDetails.artists.map(artist => artist.name).join(', ')}</p>
                        <p>Album: {trackDetails.album.name}</p>
                        <p>Release Date: {trackDetails.album.release_date}</p>
                        <p>Popularity: {trackDetails.popularity}</p>
                        <p>Acousticness: {audioFeatures.acousticness}</p>
                        <p>Danceability: {audioFeatures.danceability}</p>
                        <p>Energy: {audioFeatures.energy}</p>
                        <p>Instrumentalness: {audioFeatures.instrumentalness}</p>
                        <p>Key: {audioFeatures.key}</p>
                        <p>Loudness: {audioFeatures.loudness} dB</p>
                        <p>Speechiness: {audioFeatures.speechiness}</p>
                        <p>Valence: {audioFeatures.valence}</p>
                        <p>Tempo: {audioFeatures.tempo} BPM</p>
                    </div>
                )}

                {artistsGenres && (
                    <div className="mt-6">
                        {Array.from(artistsGenres).map((genre, index) => (
                            <p key={index} className="bg-blue-200 p-2 rounded my-1">{genre}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongDetails;
