import { useState, useEffect } from 'react';
import {fetchTrackDetails, fetchAudioFeatures, fetchArtistsDetails} from "../utils/spotify";

const useTrackData = (songId) => {
    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    const [artistsDetails, setArtistsDetails] = useState(null);

    useEffect(() => {

        let token = ''
        try {
          token = localStorage.getItem('spotifyAccessToken');
        } catch (error) {
          window.location.href = '/api/login';
        }
    
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
            }
        };
    
        if (songId && token) {
            fetchData();
        }
    }, [songId]);
    
    return { trackDetails, audioFeatures, artistsDetails };
};

export default useTrackData;
