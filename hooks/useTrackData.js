import { useState, useEffect } from 'react';
import {fetchTrackDetails, fetchAudioFeatures, fetchArtistsDetails} from "../utils/spotify";

const useTrackData = (songId, token) => {
    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    const [artistsDetails, setArtistsDetails] = useState(null);
    const [storageToken, setStorageToken] = useState('');

    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 3; // Maximum number of retries
        const retryDelay = 2000; // Delay between retries in milliseconds
    
        const fetchData = async () => {
            try {
                const trackDetailsData = await fetchTrackDetails(songId, token);
                const audioFeaturesData = await fetchAudioFeatures(songId, token);
                const artistsDetailsData = await fetchArtistsDetails(trackDetailsData.artists, token);
    
                setTrackDetails(trackDetailsData);
                setAudioFeatures(audioFeaturesData);
                setArtistsDetails(artistsDetailsData);
            } catch (error) {
                console.log(token)
                token = localStorage.getItem('spotifyAccessToken')
                if (retryCount < maxRetries) {
                    retryCount++;
                    setTimeout(fetchData, retryDelay);
                } else {
                    console.log("HELP")
                }
            }
        };
    
        if (songId && token) {
            fetchData();
        }
    }, [songId, token]);
    
    return { trackDetails, audioFeatures, artistsDetails };
};

export default useTrackData;
