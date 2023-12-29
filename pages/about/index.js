import Link from "next/link"
import Image from "next/image"

export default function About() {
    return (
        <div className="w-4/5 mx-auto">
            <Link href="/about/me">
                <div>
                    <div className="p-2  w-[220px] h-[220px] border-melrose border-2"> 
                        <div className="p-5 w-[200px] h-[200px] border-dashed border-yale border-2"> 
                            <Image 
                                src="/about-images/matcha-me.png"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>



            </Link>
            <Link href="/about/vibe-check">About Vibe Check</Link>
        </div>
    )
}