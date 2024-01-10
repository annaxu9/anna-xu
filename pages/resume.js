import React, { useState, useEffect } from 'react';
import Skills from '../components/Resume/skills';
import Experience from './test2';

export default function Resume() {
    const [isScrolled, setIsScrolled] = useState(false);

    const coursework = ["Data Structures and Programming Techniques", "Algorithms", "Full Stack Web Development", "Sofware Engineering", "Human Computer Interaction", "Data Visualization", "Systems Programming and Computer Architecture"]
    const nextsem = ["Operating Systems", "Networks", "Object Oriented Programming"]

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
            <h1 className={`transition-colors duration-500 bavista ${isScrolled ? 'text-white' : 'text-melrose'}`}>Oh hi<span className="nervada">!</span> we<span className="nervada">l</span>come<span className="nervada">!</span></h1>
            <p>i hope you this gives 👩🏻‍💻 📖 🧠 💻</p>
            <hr className='mb-8'></hr>
            <div className="">
                <h1 className="text-center bavista2">Education</h1>
                <p></p>
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
                <h1 className="text-center bavista2">Projects </h1>
                <h1 className="text-center bavista2">Extracurricu<span className="nervada2">l</span>ars</h1>
                <h1 className='text-center'>Other interests and hobbies covered in About Me</h1>


            </div>
        </div>
    )
}