import { useState, useEffect } from 'react';
import {fetchTrackDetails, fetchAudioFeatures, fetchArtistsDetails} from "../utils/spotify";

const useTrackData = (songId, token) => {
    const [trackDetails, setTrackDetails] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    const [artistsDetails, setArtistsDetails] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const trackDetailsData = await fetchTrackDetails(songId, token);
                const audioFeaturesData = await fetchAudioFeatures(songId, token);
                const artistsDetailsData = await fetchArtistsDetails(trackDetailsData.artists, token);

                setTrackDetails(trackDetailsData);
                setAudioFeatures(audioFeaturesData);
                setArtistsDetails(artistsDetailsData);
            } catch (error) {
                // console.error("Your session expired. Press OK to login again.");
                window.location.href = '/api/login';
            }
        };

        if (songId && token) {
            fetchData();
        }
    }, [songId, token]);
    return { trackDetails, audioFeatures, artistsDetails };
};

export default useTrackData;
