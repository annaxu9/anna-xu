import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import useTrackData from '../../hooks/useTrackData';
import TitleName from '../../components/Vibe-Check/TitleName';
import ArtistPictures from '../../components/Vibe-Check/ArtistsPictures';
import MainStats from '../../components/Vibe-Check/MainStats';
import Genres from '../../components/Vibe-Check/Genres';
import Vibes from '../../components/Vibe-Check/Vibes';
import Stats from '../../components/Vibe-Check/Stats';
import Image from 'next/image';

const SongDetails = () => {
    const router = useRouter();
    const { songId } = router.query;
    const { trackDetails, audioFeatures, artistsDetails } = useTrackData(songId)
    const [loading, setLoading] = useState(true)
    const spotify_link = "https://open.spotify.com/embed/track/" + songId

    useEffect(() => {
        if (trackDetails) {
            setLoading(false)
            console.log(trackDetails, audioFeatures, artistsDetails)
        } else {
            setLoading(true)
        }
    }, [trackDetails, audioFeatures, artistsDetails])

    return (
        <div className='w-4/5 items-center mx-auto'>
            <iframe className='w-full mt-9' src={spotify_link} width="200" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            { loading ? <p className='text-center'>Loading...</p> :
                <div>
                    <Image 
                        src="/icons/spotify.png"
                        width={100}
                        height={100}
                        alt="spotify logo"
                    />

                    <div className='bg-black p-3 sm:p-9 w-full'>
                        <div className='bg-white p-5'>
                            <TitleName 
                                name={trackDetails.name}
                                url={trackDetails.external_urls.spotify}
                            />
                            <ArtistPictures artists={artistsDetails}/>
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
                </div>
            }
            
        </div>

    );
};

export default SongDetails;
