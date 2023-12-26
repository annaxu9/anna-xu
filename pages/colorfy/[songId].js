import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useTrackData from '../../hooks/useTrackData';
import TitleName from '../../components/Colorfy/TitleName';
import AlbumArtists from '../../components/Colorfy/AlbumArtists';
import MainStats from '../../components/Colorfy/MainStats';
import Genres from '../../components/Colorfy/Genres';
import Vibes from '../../components/Colorfy/Vibes';
import Stats from '../../components/Colorfy/Stats';

const SongDetails = () => {
    const { token } = useAuth(); // Access the token using useAuth
    const router = useRouter();
    const { songId } = router.query;
    const { trackDetails, audioFeatures, artistsDetails } = useTrackData(songId, token)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(token)
        if (trackDetails) {
            setLoading(false)
            console.log(trackDetails, audioFeatures, artistsDetails)
        } else {
            setLoading(true)
        }
    }, [trackDetails, audioFeatures, artistsDetails, token])

    return (
        <div className='flex justify-center'>
            { loading ? <p>Loading</p> :
                <div className='bg-black p-9 pb-36 w-4/5'>
                    <div className='bg-white p-5'>
                        <TitleName 
                            name={trackDetails.name}
                            url={trackDetails.external_urls.spotify}
                        />
                        <AlbumArtists 
                            artists={artistsDetails} 
                            album={trackDetails.album.name} 
                            album_url={trackDetails.album.external_urls.spotify} 
                            album_image_url={trackDetails.album.images[0].url}
                        />
                        <MainStats 
                            duration={trackDetails.duration_ms} 
                            date={trackDetails.album.release_date} 
                            popularity={trackDetails.popularity}
                        />
                        <Genres artists={artistsDetails}/>
                        <Vibes 
                            acousticness={audioFeatures.acousticness}
                            danceability={audioFeatures.danceability}
                            energy={audioFeatures.energy}
                            speechiness={audioFeatures.speechiness}
                            valence={audioFeatures.valence}
                            index={audioFeatures.key}
                        />
                        <Stats 
                            acousticness={audioFeatures.acousticness}
                            danceability={audioFeatures.danceability}
                            energy={audioFeatures.energy}
                            tempo={audioFeatures.tempo}
                            speechiness={audioFeatures.speechiness}
                            valence={audioFeatures.valence}
                        />
                    </div>
                </div>
            }
            
        </div>

    );
};

export default SongDetails;
