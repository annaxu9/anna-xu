import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import useTrackData from '../../hooks/useTrackData';
import TitleName from '../../components/Colorfy/TitleName';
import ArtistPictures from '../../components/Colorfy/ArtistsPictures';
import AlbumArtists from '../../components/Colorfy/AlbumArtists';
import MainStats from '../../components/Colorfy/MainStats';
import Genres from '../../components/Colorfy/Genres';
import Vibes from '../../components/Colorfy/Vibes';
import Stats from '../../components/Colorfy/Stats';

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
            { loading ? <p>Loading</p> :
                <div className='bg-black p-9 pb-36 w-full'>
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
            }
            
        </div>

    );
};

export default SongDetails;
