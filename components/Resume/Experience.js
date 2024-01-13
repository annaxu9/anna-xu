import {useState} from "react";

export default function Experience() {
    const [showMore, setShowMore] = useState([false, false, false])

    const toggleShowMore = (index) => {
        const newShowMore = [...showMore]
        newShowMore[index] = !newShowMore[index]
        setShowMore(newShowMore)
    }
    
    return (
        <div>
            <div className="flex gap-2">
                <img src="/resume-images/URBN.jpeg" className="w-12 h-12"/>
                <h3>
                    <span className="font-bold w-2/3">URBN Web Software Engineering Intern</span> <br></br>
                    Philadelphia, PA (June 2023–August 2023)
                </h3>
            </div>

            <p className="text-center my-4"> 
                URBN is a portfolio of global consumer brands comprising &nbsp;
                <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.urbanoutfitters.com" target="_blank">Urban Outfitters</a>,&nbsp;
                <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.anthropologie.com" target="_blank">Anthropologie</a>,
                and&nbsp;
                <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.freepeople.com" target="_blank">Free People</a>.
            </p>

            <div className="bg-[#FADB4A] rounded p-2" onClick={() => toggleShowMore(0)} >

            {!showMore[0] && (
                <h1 className="text-center">Read more!</h1>
                ) 
            }      

            <div className={`content ${showMore[0] ? 'show' : 'hide'}`}>

            {showMore[0] && (
                        <ul className="list-disc ml-10 mt-5 mr-4">
                        <li>Completed multiple tickets, modifying numerous files and hundreds of lines of code that went into production code.</li>
                        <li>Converted JavaScript files into TypeScript including creating new Vue Store Interfaces resulting in enhanced code quality, maintainability, and developer productivity.</li>
                        <li>Led the planning and development of The Internship Showcase Site.</li>
                        <ul className="bullet ml-6 mr-4">
                            <li>Utilized Vue.js, Nuxt.js, and TailwindCSS to create a user-friendly platform based on markdown file-based blogs.</li>
                            <li>Collaborated closely with the URBN Talent and Communications team to ensure alignment with the organization&apos;s recruiting goals. The portal is currently in the final stages of review and will go live shortly.</li>
                            <li>Took ownership of data collection by designing and conducting surveys among the interns.</li>
                            <li>Designed the website to seamlessly integrate with the URBN aesthetic while infusing it with my creative insight.</li>
                            <li>Presented my project in front of the URBN Board of Directors, managers, and fellow interns.</li>
                        </ul>
                        <li>Led Design for Team S-AI-ze Em&apos; at URBN&apos;s annual Hackathon.</li>
                        <ul className="bullet ml-6 mb-5 mr-4">
                            <li>Won 3rd place in the Hackathon.</li>
                            <li>Presented to the URBN Board of Directors and secured funding for future development for the feature that uses an AI model to suggest size to users for products based on the user’s photo and past reviews from other users.</li>
                            <li>Utilized Figma to generate mockups for the sizing feature.</li>
                            <li>Completed the Vertex AI Google Tutorial and collaborated with developers to implement the AI script.</li>
                        </ul>
                    </ul>
            )
            }
            </div>
            </div>
        
            <div className="flex gap-2 items-center">
                <img src="/resume-images/duck.png" className="w-12 h-12 mt-3"/>
                <div>
                    <h3 className="font-bold mt-4">Yale CS50 Head TA / TA</h3>
                    <h3>New Haven, CT (April 2022–December 2023)</h3>
                </div>

            </div>
            
            <p className="text-center my-2">
                <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.edx.org/cs50" target="_blank">CS50</a>
                &nbsp;is a famous introductory computer science course.
            </p>

            <div className="bg-[#FADB4A] rounded p-2" onClick={() => toggleShowMore(1)} >
            
            {!showMore[1] && (
                <h1 className="text-center">Read more!</h1>
                ) 
            }            
            <div className={`content ${showMore[1] ? 'show' : 'hide'}`}>

            {showMore[1] && (
                <ul className="list-disc ml-12 mt-3">
                    <li>Led two weekly 2-hour Discussion Sections, conducted grading, and hosted Office Hours to support 56 students (and dozens more outside of my section) in mastering C, Python, SQL, HTML, CSS, and JavaScript. This eventually guided students in the creation of complex three-tier web applications.</li>
                    <li>Facilitated Walkthroughs and one-on-one Office Hours to enhance student understanding and problem-solving skills.</li>
                    <li>Assumed the role of Head TA, entailing mentoring new teaching assistants, assisting in class management, and contributing innovative ideas for course improvement.</li>
                    <l1>Created a <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://docs.google.com/document/d/1Ik7YucGa8RRfZ9zIpEUBT9CF9Gff990rFnCkrs-d3q0/edit?usp=sharing" target="_blank">Web API Guide</a> to help students with final projects</l1>
                </ul>   
            )  
            }
            </div>
            </div>

            <div>
                <div className="flex gap-2 items-center">
                    <img src="/home-images/nebraska.png" className="w-12 h-12 mt-5"/>
                    <div>
                        <h3 className="font-bold mt-4">Undergraduate Researcher –– University of Nebraska Summer Research Program</h3>
                        <h3>Lincoln, NE (June 2022–August 2022)</h3>
                    </div>
                </div>
                
                <p className="text-center my-2">
                    The <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://www.unl.edu/summerprogram/" target="_blank">University of Nebraska Summer Research Program</a> is a selective 40hr/wk program.
                </p>

                <div className="bg-[#FADB4A] rounded p-2" onClick={() => toggleShowMore(2)} >
                    {!showMore[2] && (
                    <h1 className="text-center">Read more!</h1>
                    ) 
                    }

                    <div className={`content ${showMore[2] ? 'show' : 'hide'}`}>
                    {showMore[2] && (
                        
                        <ul className="list-disc ml-12">
                            <li>Used React, Express, and D3 to create <a className="text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/yao-laboratory/virusreader" target="_blank">VirusReader</a>, an interactive and dynamic web application to display virology data.</li>
                            <li>Allows scientists to upload their own CSV data for data analysis and visualization.</li>
                            <li>Participated in workshops on scientific writing, career building, and ethics.</li>
                        </ul>
                    )
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}