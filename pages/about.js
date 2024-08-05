import Image from 'next/image'
import Head from 'next/head'

export default function AboutMe() {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center">
            <Head>
                <title>Anna Xu</title>
            </Head>

            <h1>About Me!</h1>

            <div className="m-2 p-2  max-w-[400px] h-auto border-melrose border-2">
                <div className="p-2  h-auto border-double border-pink border-2"> 
                    <div className="p-2  h-auto border-dashed border-yale border-2"> 
                        <div className="p-2  h-auto flex flex-col items-center">
                            <Image 
                                src="/about-images/hawaii.jpeg"
                                width={150}
                                height={150}
                                layout="responsive"
                                alt="this is me in hawaii"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ul className='list-disc mt-5'>
                <li>
                    I love the outdoors!
                </li>
                <li>
                    My favorite food to make and to eat is summer rolls.
                </li>
                <li>
                    I love learning about how computers, the web, and other systems work : ) 
                </li>
                <li>
                    I have fast reflexes, so I&apos;m very good at Egyptian Rat Screw (the card game), challenge me!
                </li>
                <li>
                    I want to get better at Mandarin.
                </li>
                <li className='mt-10'>
                    Let&apos;s be friends on <a target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.goodreads.com/user/show/59329922-anna-xu">goodreads</a> and <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://letterboxd.com/annaxu/" target="_blank">letterboxd</a>! 
                </li>
            </ul>
        </div>
    )
}