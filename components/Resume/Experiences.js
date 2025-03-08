import Experience from "./Experience";

export default function Experiences() {
  const experiences = [
    {
      image: "/resume-images/jianna-logo.png",
      title: "Co-founder & Chief Information Officer (CIO) – Jianna Consulting",
      date: "January 2024–Present",
      location: "Remote",
      mainText: [
        "[Jianna Consulting]",
        " is a forward-thinking consulting firm dedicated to empowering businesses and organizations through innovative technology solutions and strategic insights.",
      ],
      supplementaryText: [
        "Co-founded Jianna Consulting, leading the company's technical vision and strategy.",
        "As CIO, oversee IT infrastructure, security, and software solutions for clients.",
        "Developed scalable and efficient technology solutions tailored to business needs, ensuring seamless integration and optimization.",
        "Collaborate with co-founders to align business goals with technology-driven solutions, driving growth and operational excellence.",
      ],
      links: [
        { text: "Jianna Consulting", href: "https://www.jianna.net/" }, // Update with actual website if available
      ],
    },
    {
      image: "/resume-images/ycs.png",
      title: "Yale Computer Society Team Leader for YaleIMs",
      date: "January 2024–January 2025",
      location: "New Haven, CT",
      mainText: [
        "As a Team Leader at the ",
        "[Yale Computer Society]",
        ", I led the development of ",
        "[YaleIMs]",
        ", a responsive web application for tracking intramural sports schedules and standings. Leveraging Next.js, Tailwind CSS, and Firebase, we delivered an intuitive and engaging platform that streamlined the IM experience for students and administrators alike.",
      ],
      supplementaryText: [
        "Led an 11-person team, fostering collaboration and maintaining project momentum through Agile practices, Git, and GitHub for effective version control and task management.",
        "Organized weekly team meetings, mentoring team members on modern web development tools and best practices, including Firebase, Next.js, and Tailwind CSS.",
        "Conducted user studies to identify pain points and requirements, integrating insights into development to enhance user satisfaction.",
        "Designed user interfaces and workflows in Figma, ensuring a user-friendly experience across mobile and desktop platforms.",
        "Engineered robust frontend systems using advanced React hooks, contexts, and state management to ensure scalability and smooth navigation.",
        "Architected and implemented complex Cloud Functions and database schemas, enabling dynamic data handling, real-time updates, and secure backend operations.",
      ],
      links: [
        {
          text: "Yale Computer Society",
          href: "https://www.yalecomputersociety.org/",
        },
        {
          text: "YaleIMs",
          href: "https://yaleims.com",
        },
      ],
    },

    {
      image: "/resume-images/duck.png",
      title: "Yale CS50 Head TA / TA",
      date: "April 2022–December 2024",
      location: "New Haven, CT",
      mainText: [
        "[CS50]",
        " is a famous introductory computer science course.",
      ],
      supplementaryText: [
        "Led two weekly 2-hour Discussion Sections, conducted grading, and hosted Office Hours to support 56 students (and dozens more outside of my section) in mastering C, Python, SQL, HTML, CSS, and JavaScript. This eventually guided students in the creation of complex three-tier web applications.",
        "Facilitated Walkthroughs and one-on-one Office Hours to enhance student understanding and problem-solving skills.",
        "Assumed the role of Head TA, entailing mentoring new teaching assistants, assisting in class management, and contributing innovative ideas for course improvement.",
        "Created a Web API Guide to help students with final projects",
      ],
      links: [
        { text: "CS50", href: "https://www.edx.org/cs50" },
        {
          text: "Web API Guide",
          href: "https://docs.google.com/document/d/1Ik7YucGa8RRfZ9zIpEUBT9CF9Gff990rFnCkrs-d3q0/edit?usp=sharing",
        },
      ],
      additionalLinks: [
        {
          text: "Web API Guide",
          href: "https://docs.google.com/document/d/1Ik7YucGa8RRfZ9zIpEUBT9CF9Gff990rFnCkrs-d3q0/edit",
        },
      ],
    },
    {
      image: "/home-images/hcii.png",
      title:
        "Undergraduate Researcher –– Carnegie Mellon Human Computer Interaction Institute Summer Research Program",
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
        "Engineered Prompts for Design Assistant: Developed and optimized prompts to enhance the functionality of a design assistant.",
      ],
      links: [
        {
          text: "HCII Summer Undergraduate Research Program",
          href: "https://hcii.cmu.edu/summer-research-program",
        },
      ],
      //   additionalLinks: [{ text: "Poster", href: "/resume-images/HCII_Poster" }],
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
        "[Free People]",
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
        { text: "Free People", href: "https://www.freepeople.com" },
      ],
    },

    {
      image: "/home-images/nebraska.png",
      title:
        "Undergraduate Researcher –– University of Nebraska Summer Research Program",
      date: "June 2022–August 2022",
      location: "Lincoln, NE",
      mainText: [
        "The ",
        "[University of Nebraska Summer Research Program]",
        " is a selective 40hr/wk program.",
      ],
      supplementaryText: [
        "Used React, Express, and D3 to create VirusReader, an interactive and dynamic web application to display virology data, which allows scientists to upload their own CSV data for data analysis and visualization.",
        "Participated in workshops on scientific writing, career building, and ethics.",
      ],
      links: [
        {
          text: "University of Nebraska Summer Research Program",
          href: "https://www.unl.edu/summerprogram/",
        },
        {
          text: "VirusReader",
          href: "https://github.com/yao-laboratory/virusreader",
        },
      ],
    },
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
          additionalLinks={experience.additionalLinks}
        />
      ))}
    </div>
  );
}
