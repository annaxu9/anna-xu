import Image from 'next/image';
import ArtistPictures from './ArtistsPictures';

export default function AlbumArtists({album, album_url, album_image_url, artists}) {
    return (
        <div className='flex flex-col sm:flex-row justify-center sm:justify-around items-center p-5 l:px-36'>
            <a className=' flex flex-col items-center text-center' href={album_url} target="_blank">
                <h2 className='font-bold text-sm md:text-xl'>{album}</h2>
            
                <Image 
                    src={album_image_url}
                    width={150} 
                    height={150}
                    objectFit="cover"
                    className="w-full h-auto"
                />
            </a>
            <div className='mt-3'>
                <ArtistPictures artists={artists}/>
            </div>
        </div>
    )
}