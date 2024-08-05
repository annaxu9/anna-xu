import React, { useState, useEffect } from 'react';
import Experience from '../components/Resume/Experiences';
import Link from 'next/link';
import Head from 'next/head';

export default function Resume() {
    const [isScrolled, setIsScrolled] = useState(false);

    const coursework = ["Data Structures and Programming Techniques", "Algorithms", "Full Stack Web Development", "Sofware Engineering", "Human Computer Interaction", "Data Visualization", "Systems Programming and Computer Architecture"]
    const nextsem = ["Object Oriented Programming", "Principles of Computer System Design", "Computer System Security"]

    const handleScroll = () => {
        const position = window.scrollY;
        setIsScrolled(position > 1); // Adjust '100' based on the position of your header
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="w-4/5 mx-auto">
            <Head>
                <title>Anna Xu</title>
            </Head>
            <h1 className={`transition-colors duration-500 bavista ${isScrolled ? 'text-white' : 'text-melrose'}`}>Oh hi<span className="nervada">!</span> we<span className="nervada">l</span>come<span className="nervada">!</span><span className='not-italic text-3xl'> 👩🏻‍💻 📖 🧠 💻</span></h1>
            <p className='text-center'></p>
            <hr className='mb-8'></hr>
            <div className="">
                <h1 className="text-center bavista2">Education</h1>
                <div className='ml-6 mb-4'>
                    <p><span className='font-bold text-yale'> 🐶 Yale University</span> - go bulldogs!</p>
                    <p>👩🏻‍💻 B.S. in Computer Science</p>
                    <p>⛄ Expected Graduation: December 2024</p>
                    <div className='flex flex-wrap ml-4 text-sm italic'>
                        <p>Relavent Coursework:&nbsp;</p>
                        {
                            coursework.map((course, index) => { 
                                if (index != coursework.length - 1)
                                    return (
                                        <p key={index}>{course},&nbsp;</p>
                                    )
                                else {
                                    return (
                                        <p key={index}>{course}</p>
                                    )                                    
                                }
                            })
                        }
                    </div>
                    <div className='flex flex-wrap ml-4 text-sm italic'>
                        <p>Upcoming Coursework:&nbsp;</p>
                        {
                            nextsem.map((course, index) => { 
                                if (index != nextsem.length - 1)
                                    return (
                                        <p key={index}>{course},&nbsp;</p>
                                    )
                                else {
                                    return (
                                        <p key={index}>{course}</p>
                                    )                                    
                                }
                            })
                        }
                    </div>
                </div>
                {/* <h1 className="bavista2 text-center">Ski<span className="nervada2">ll</span>s </h1>
                <Skills /> */}
                <h1 className="text-center bavista2">Experience </h1>
                <Experience />
                <h1 className="text-center bavista2 mt-5">Projects</h1>
                <h1 className='font-bold'>Co-creator of YIMS, an iPhone and Android compatible app for Yale Intramural sports</h1>
                <ul className='ml-12 list-disc'>
                    <li>I created all wireframes in Figma, implemented screens using React Native, connected frontend to application tier using Flask and Fetch API, and contributed to backend database design through discussions with IM Managers.</li>
                    <li>Every year Yale&apos;s 14 college compete in Intramural (IM) sports for the Tyng Cup. Still, there is no easy way to access and view the college standings and schedule for IM sports making it so that less students participate in this fun and awesome competition. We created YIMS to solve this problem!</li>
                    <li>Below is a demo where we walk through the login process, leaderboard page, how IM Managers can schedule and score games, and how students can add games to their calendar and view past game records.</li>
                </ul>
                <video controls width="100%" className="mx-auto m-4" style={{maxWidth: "500px"}} src="/demos/yims.mp4"></video>
                <Link className='font-bold' href="/vibe-check">Creater of <span className='css-rainbow-text'>vibe check</span></Link>
                <ul className='ml-12 list-disc'>
                    <li>I created vibe check, a web application that uses the Spotify API to search for songs/artists and display their data. I also accessed and displayed each song&apos;s vibe based off some observations I made about the song.</li>
                    <li>I leveraged Next.js&apos; Pages API to streamline fetch calls and seamlessly handle Spotify authentication and routing within my web application. The frontend work was done using React and Tailwind.</li>
                    <li>Below is a demo! And read more about vibe check <Link href="/about-vibe-check" className='underline'>here.</Link></li>
                </ul>
                <video controls width="100%" className="mx-auto m-4 mb-10" style={{maxWidth: "500px"}} src="/demos/vibe-check.mp4"></video>
                {/* <h1 className="text-center bavista2">Projects </h1>
                <h1 className="text-center bavista2">Extracurricu<span className="nervada2">l</span>ars</h1>
                <h1 className='text-center'>Other interests and hobbies covered in About Me</h1> */}
            </div>
        </div>
    )
}