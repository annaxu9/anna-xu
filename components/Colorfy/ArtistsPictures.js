import Image from "next/image"
export default function ArtistPictures({artists}) {
    console.log("Where is image", artists)
    return (
        <div className="flex flex-col md:flex-row justify-center">
            {
                artists.map((artist) => (
                    <div key={artist.id} className="p-1 text-center">
                        <a href={artist.external_urls.spotify} target="__blank">
                            <h2 className="md:text-sm">{artist.name}</h2>
                            {
                                artist.images && artist.images.length > 0 ? (
                                    <div className="max-w-1/3">
                                        <Image
                                            src={artist.images[0].url}
                                            width={120} 
                                            height={120}
                                            objectFit="contain"
                                            className="rounded-full"
                                        />
                                    </div>
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