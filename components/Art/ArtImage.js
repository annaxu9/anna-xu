import Image from "next/image"

export default function ArtImage({img}) {
    return (
        <div className="m-4">
            <Image 
                src={img[0]}
                width={150}
                height={150}
                layout="responsive"
            />
            <div>
                <p className="italic text-center">{img[1]}</p>
            </div>
        </div>
    )
}