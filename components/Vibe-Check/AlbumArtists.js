import ArtistPictures from './ArtistsPictures';

export default function AlbumArtists({album, album_url, album_image_url, artists, songId}) {
    const spotify_link = "https://open.spotify.com/embed/track/" + songId
    return (
        <div className='flex flex-col sm:flex-row justify-center sm:justify-around items-center p-5 l:px-36'>
            <a className=' flex flex-col items-center text-center' href={album_url} target="_blank">
                <iframe className='w-full' src={spotify_link} width="200" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </a>
            <div className='mt-3'>
                <ArtistPictures artists={artists}/>
            </div>
        </div>
    )
}