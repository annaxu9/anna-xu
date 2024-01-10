import Image from 'next/image'

export default function AboutMe() {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <p className="text-center">Hi! My name is Anna and other than coding, here&apos;s some more about me! (Coming Soon)</p> 
            <div className="m-2 p-2  max-w-[400px] h-auto border-melrose border-2">
                <div className="p-2  h-auto border-double border-pink border-2"> 
                    <div className="p-2  h-auto border-dashed border-yale border-2"> 
                        <div className="p-2  h-auto flex flex-col items-center">
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
            {/* <div className="ml-2">
                <h1>Some Things I Care About</h1>
                <h1>Free Palestine / End This War!</h1>
                <h1>Mental Health</h1>
                <h1>LGBTQ+ Rights</h1>
                <h1>Black Lives Matter</h1>
                <h1>Environment</h1>
            </div>
            <div>
                <h1>Some Interests I have</h1>
                <h1>Movies</h1>
                <h1>Books</h1>
                <h1>Podcasts</h1>
                <h1>Music</h1>
                <h1>Creating Art</h1>
                <h1>Writing/Journalism</h1>
                <h1>Theater</h1>
                <h1>Chinese Food</h1>
                <h1>Tarot</h1>
                <h1>Outdoors</h1>
            </div> */}
        </div>
    )
}