import Image from "next/image"
export default function ArtistPictures({artists}) {
    return (
        <div className="flex flex-col sm:flex-row justify-center items-center">
            {
                artists.map((artist) => (
                    <div key={artist.id} className="p-1 text-center">
                        <a href={artist.external_urls.spotify} target="__blank">
                            <h2 className="">{artist.name}</h2>
                            {
                                artist.images && artist.images.length > 0 ? (
                                    <Image
                                        src={artist.images[0].url}
                                        width={120} 
                                        height={120}
                                        alt="artist pic"
                                    />
                                ) : (
                                    <h2 className="md:text-sm">(No Image)</h2>
                                )
                            }
                        </a>
                    </div>
                ))
            }
        </div>
    )
}