import Experience from "./Experience";

export default function Experiences() {
    const experiences = [
        {
            image: "/home-images/hcii.png",
            title: "Undergraduate Researcher –– Carnegie Mellon Human Computer Interaction Institute Summer Research Program",
            date: "May 2024-Augest 2024", 
            location: "Pittsburgh, PA",
            mainText: [
                "The ",
                "[HCII Summer Undergraduate Research Program]",
                " is a selective 40hr/wk program.",
            ],
            supplementaryText: [
                "Developed a Co-Creative Design Voice Assistant: Architected the application and implemented the frontend using Electron and React, with Express for the application tier. Integrated OpenAI's Chat Completions API and Whisper API.",
                "Created a User Study Evaluation Tool: Designed and implemented a tool to evaluate user studies.",
                "Engineered Prompts for Design Assistant: Developed and optimized prompts to enhance the functionality of a design assistant."
            ],
            links: [
                {text: "HCII Summer Undergraduate Research Program", href: "https://hcii.cmu.edu/summer-research-program"}
            ]
        },
        {
            image: "/resume-images/URBN.jpeg",
            title: "URBN Web Software Engineering Intern",
            date: "June 2023–August 2023",
            location: "Philadelphia, PA",
            mainText: [
                "URBN is a portfolio of global consumer brands comprising ",
                "[Urban Outfitters]",
                ", ",
                "[Anthropologie]",
                ", and ",
                "[Free People]"
            ],
            supplementaryText: [
                "Completed multiple tickets, modifying numerous files and hundreds of lines of code that went into production code.",
                "Converted JavaScript files into TypeScript including creating new Vue Store Interfaces resulting in enhanced code quality, maintainability, and developer productivity.",
                "Led the planning and development of The Internship Showcase Site and utilized Vue.js, Nuxt.js, and TailwindCSS to create a user-friendly platform based on markdown file-based blogs.",
                "Presented my project in front of the URBN Board of Directors, managers, and fellow interns.",
            ],
            links: [
                { text: "Urban Outfitters", href: "https://www.urbanoutfitters.com" },
                { text: "Anthropologie", href: "https://www.anthropologie.com" },
                { text: "Free People", href: "https://www.freepeople.com" }
            ]
        },
        {
            image: "/resume-images/duck.png",
            title: "Yale CS50 Head TA / TA",
            date: "April 2022–Now",
            location: "New Haven, CT",
            mainText: [
                "[CS50]",
                " is a famous introductory computer science course."
            ],
            supplementaryText: [
                "Led two weekly 2-hour Discussion Sections, conducted grading, and hosted Office Hours to support 56 students (and dozens more outside of my section) in mastering C, Python, SQL, HTML, CSS, and JavaScript. This eventually guided students in the creation of complex three-tier web applications.",
                "Facilitated Walkthroughs and one-on-one Office Hours to enhance student understanding and problem-solving skills.",
                "Assumed the role of Head TA, entailing mentoring new teaching assistants, assisting in class management, and contributing innovative ideas for course improvement.",
                "Created a Web API Guide to help students with final projects"
            ],
            links: [
                { text: "CS50", href: "https://www.edx.org/cs50" },
                { text: "Web API Guide", href: "https://docs.google.com/document/d/1Ik7YucGa8RRfZ9zIpEUBT9CF9Gff990rFnCkrs-d3q0/edit?usp=sharing" }
            ]
        },
        {
            image: "/home-images/nebraska.png",
            title: "Undergraduate Researcher –– University of Nebraska Summer Research Program",
            date: "June 2022–August 2022",
            location: "Lincoln, NE",
            mainText: [
                "The ",
                "[University of Nebraska Summer Research Program]",
                " is a selective 40hr/wk program.",
            ],
            supplementaryText: [
                "Used React, Express, and D3 to create VirusReader, an interactive and dynamic web application to display virology data, which allows scientists to upload their own CSV data for data analysis and visualization.",
                "Participated in workshops on scientific writing, career building, and ethics."
            ],
            links: [
                { text: "University of Nebraska Summer Research Program", href: "https://www.unl.edu/summerprogram/" },
                { text: "VirusReader", href: "https://github.com/yao-laboratory/virusreader" }
            ]
        }
    ];

    return (
        <div>
            {experiences.map((experience, index) => (
                <Experience
                    key={index}
                    image={experience.image}
                    title={experience.title}
                    date={experience.date}
                    location={experience.location}
                    mainText={experience.mainText}
                    supplementaryText={experience.supplementaryText}
                    links={experience.links}
                > </Experience>
            ))}
        </div>
    );
}
