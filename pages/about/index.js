import Link from "next/link"
import Image from "next/image"

export default function About() {
    return (
        <div className="w-4/5 mx-auto">
            <h1>My Journey Here & Where I'm Going</h1>
            <Link href="/about/me">
                <h1>More About Me</h1>
                <div className="p-2 w-full max-w-[400px] h-auto border-melrose border-2">
                    <div className="p-2 w-full h-auto border-double border-pink border-2"> 
                        <div className="p-2 w-full h-auto border-dashed border-yale border-2"> 
                            <div className="p-2 w-full h-auto flex flex-col items-center">
                                <Image 
                                    src="/about-images/matcha-me.png"
                                    width={150}
                                    height={150}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/about/vibe-check">About Vibe Check</Link>
        </div>
    )
}