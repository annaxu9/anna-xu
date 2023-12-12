import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const SongDetails = () => {
    const router = useRouter();
    const { songId } = router.query;

    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);

    useEffect(() => {
        getTrackData(songId)
    }, []);
      
    // Here, you can fetch the song details using songId or display placeholders until the data is loaded
    function displayTrackDetails(trackDetails, setTrackDetails, audioFeatures, setAudioFeatures) {
        setTrackDetails(trackDetails);
        setAudioFeatures(audioFeatures);

        console.log(trackDetails)
        console.log(audioFeatures)
    }
    
    async function getTrackData(trackId) {
        // ... existing code ...
        const accessToken = "BQB8xuFnRZaL5FoQlfqJZW3vdOqWVcOcMz5BGPwLZ0a3mxVOmagt6XXbe9LVeReksPwZgmhDJ6SQ7jUsN7xOYZzZUOpiwcP-V3-_B8JQB9yJc01971riUXS4SXzK3eP6oRqojZnG2Ft2CcNFZnlR-7VBgwbC3TnnEgPueS8HlNeCRDlrvvPROrWa7eTJ18WdUeZ_uI9RG4EWK1M_fYt1mQ";
        if (!accessToken) return;

        try {
            // ... existing fetch logic for track details and audio features ...
            // Fetching track details
        const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const trackDetails = await trackResponse.json();

        // Fetching audio features
        const featuresResponse = await fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        const audioFeatures = await featuresResponse.json();
            displayTrackDetails(trackDetails, setTrackDetails, audioFeatures, setAudioFeatures);
        } catch (error) {
            console.error('Error fetching track data', error);
        }
    }

    return (
        <div>
            <h1>Song Details Page</h1>
            <p>Song ID: {songId}</p>

            {/* Display track details */}
            {trackDetails && (
                <div id="trackDetails">
                {/* Render track details and audio features */}
                <h3>${trackDetails.name}</h3>
                    <p>Artist: {trackDetails.artists.map(artist => artist.name).join(', ')}</p>
                    <p>Album: {trackDetails.album.name}</p>
                    <p>Release Date: {trackDetails.album.release_date}</p>
                    {/* <img src="${trackDetails.album.images[0].url}" alt="Album Cover" width="200"> */}
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

        </div>
    );
};

export default SongDetails;
