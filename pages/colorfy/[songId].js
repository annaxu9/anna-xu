import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useTrackData from '../../hooks/useTrackData';
import AlbumArtists from '../../components/Colorfy/AlbumArtists';
import MainStats from '../../components/Colorfy/MainStats';
import Genres from '../../components/Colorfy/Genres';
import Stats from '../../components/Colorfy/Stats';

const SongDetails = () => {
    const { token } = useAuth(); // Access the token using useAuth
    const router = useRouter();
    const { songId } = router.query;
    const { trackDetails, audioFeatures, artistsDetails } = useTrackData(songId, token)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (trackDetails) {
            setLoading(false)
            console.log(trackDetails, audioFeatures, artistsDetails)
        } else {
            setLoading(true)
        }
    }, [trackDetails, audioFeatures, artistsDetails])

    return (
        <div className='flex justify-center'>
            { loading ? <p>Loading</p> :
                <div className='bg-black p-9 pb-36 w-4/5'>
                    <div className='bg-white p-5'>
                        <div className='flex items-center justify-between w-full'> 
                            <button className='flex-shrink-0' onClick={() => router.back()}>
                                <h1 className='text-xl font-black'>&#60;</h1>
                            </button>                            
                            <h1 className='md:text-[2rem] font-black text-center flex-grow'>{trackDetails.name}</h1>
                        </div>
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
