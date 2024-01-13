import Image from 'next/image'

export default function AboutMe() {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <h1>More Coming Soon!</h1>
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

            <h1 className="text-center">My Web Development Journey</h1>
            <p className="sm:w-3/4 p-2 m-2 bg-lightgray mb-8">
            On a good day, coding is a fun, invigorating puzzle. On a bad day, coding is... less fun. As someone who didn&apos;t really code before college, I found myself often fighting an uphill battle.

            That&apos;s why, before my senior year, I took a gap semester. While I taught CS50 and had extracurricular commitments, without classes I was able to carve out the space to finally fill my conceptual holes, practice without much stress, and explore. With a background in journalism, I used an investigative approach to learning the fundamental web development concepts—always asking questions and never giving up. When I used to feel apprehension at the thought of opening VSCode, I now engage with the application spontaneously and many times even eagerly.
            </p>
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