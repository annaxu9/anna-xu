import { useState } from "react";
import Head from "next/head";

export default function Skills() {
  const categories = [
    ["All", "#CCE5FF"], // Light Blue
    ["Full-Stack Development", "#E6F5C1"], // Light Green
    ["Software Engineering", "#B3E5FC"], // Light Blue-Gray
    ["Data Structures & Algorithms", "#FFE599"], // Soft Yellow
    ["Computer Security", "#F6C6C6"], // Light Red
    ["Systems Programming", "#D7C4F2"], // Soft Purple
    ["Writing & Journalism", "#F5D7B8"], // Peach
    ["Art & Illustration", "#FBC1F6"], // Soft Pink
  ];

  const skills = {
    "Full-Stack Development": [
      {
        name: "HTML & CSS",
        level: "Expert",
        experience:
          "Extensive experience in classwork and projects. Taught HTML & CSS fundamentals in CS50 and applied them in real-world projects like YaleIMs and VirusReader.",
      },
      {
        name: "JavaScript & TypeScript",
        level: "Expert",
        experience:
          "Taught vanilla JavaScript in CS50 and worked with JavaScript extensively in personal and academic projects. Used TypeScript in YaleIMs and other applications, ensuring maintainable and scalable codebases with frameworks like Next.js and React.",
      },
      {
        name: "JavaScript Web Development Libraries",
        technologies: "React, Next, Vue, Nuxt, Remix, Electron",
        level: "Expert",
        experience:
          "Built applications using React, Next.js, Remix, and Vue.js, implementing key software development principles such as lifecycle management, state management, and performance optimization. Developed custom React hooks for handling API calls, authentication flows, and UI logic. Used React Context and Redux for global state management, ensuring scalability across large applications. Designed authentication hooks and middleware for user access control in Next.js and Firebase-based apps. Additionally, developed an Electron-based voice assistant interface for the CMU research project, integrating OpenAI’s APIs to enable real-time user interactions.",
      },

      {
        name: "JavaScript Data Visualization",
        technologies: "D3",
        level: "Proficient",
        experience:
          "Developed interactive data visualizations using D3.js for VirusReader, allowing scientists to explore virology datasets more effectively.",
      },
      {
        name: "Mobile App Development",
        technologies: "React Native, Flutter",
        level: "Proficient",
        experience:
          "Developed the initial YaleIMs app using React Native, implementing key features such as authentication, navigation, and API integration. Later explored Flutter for personal projects, gaining experience in cross-platform development and UI design.",
      },

      {
        name: "CSS Libraries",
        technologies: "Tailwind, Bootstrap",
        level: "Expert",
        experience:
          "Extensive experience with Tailwind CSS and Bootstrap for designing modern, responsive web applications. Taught styling techniques in CS50 and applied them in multiple projects.",
      },
      {
        name: "API Development",
        technologies:
          "Node.js, Express, Flask, RESTful APIs, HTTP Requests, Authentication, Middleware",
        level: "Proficient",
        experience:
          "Developed and maintained RESTful APIs using Express and Flask, handling authentication, request validation, and database interactions. Built secure API endpoints for YaleIMs and VirusReader, integrating Firebase Authentication. Designed middleware for logging, security, and request processing.",
      },
      {
        name: "Databases",
        technologies: "MySQL, Firebase Firestore, DynamoDB",
        level: "Proficient",
        experience:
          "Worked with both SQL and NoSQL databases. Used MySQL for relational data modeling, while leveraging Firebase Firestore and AWS DynamoDB for scalable NoSQL applications. Designed efficient database schemas, implemented indexing strategies, and optimized queries for performance.",
      },
      {
        name: "Serverless Computing",
        technologies: "Firebase Cloud Functions",
        level: "Proficient",
        experience:
          "Designed real-time updates for YaleIMs with Firebase Cloud Functions and Firestore.",
      },
      {
        name: "Infrastructure & Deployment",
        technologies: "Cloudflare, Cloudflare Pages, Firebase Hosting, AWS EC2",
        level: "Proficient",
        experience:
          "Deployed and managed web applications like YaleIMs using Firebase Hosting, ensuring fast global load times and seamless integration with Firebase services. Configured Cloudflare for enhanced security, caching, and domain management, optimizing performance for both frontend assets and API requests. Currently using Cloudflare Pages for personal projects to streamline static site deployment. Previously worked with AWS EC2 for hosting and managing scalable compute instances.",
      },
    ],

    "Software Engineering": [
      {
        name: "Object-Oriented Programming (OOP)",
        technologies: "Java, Python, C++, Design Patterns",
        level: "Proficient",
        experience:
          "Applied OOP principles such as encapsulation, inheritance, and polymorphism in software projects. Used design patterns like Singleton, Factory, and Observer to build scalable and maintainable applications. Developed OOP-based solutions in Java, Python, and C++ for coursework and personal projects.",
      },
      {
        name: "Project Management",
        technologies: "Trello, Jira, Agile Methodologies, Team Leadership",
        level: "Proficient",
        experience:
          "Led and managed the development of YaleIMs, coordinating an 11-person team using Agile methodologies. Used Trello for sprint planning, task tracking, and team collaboration. Additionally, worked with Jira at URBN to manage software development workflows, organize sprints, and track engineering tasks. Conducted user studies and integrated feedback into iterative development cycles, ensuring continuous improvement and usability enhancements.",
      },

      {
        name: "Source Control & Collaboration",
        technologies: "Git, GitHub, GitHub Issues",
        level: "Proficient",
        experience:
          "Extensive experience using Git and GitHub for version control and collaborative development. Managed repositories for YaleIMs, ensuring code quality and consistency through pull request reviews and structured branching strategies. Used GitHub Issues for task management and bug tracking, facilitating organized and efficient software development workflows.",
      },
      {
        name: "UI/UX Design",
        technologies: "Figma, Adobe Illustrator, Wireframing, Prototyping",
        level: "Expert",
        experience:
          "Designed and prototyped user-friendly interfaces using Figma for YaleIMs and hackathon projects. Created wireframes, high-fidelity mockups, and interactive prototypes to improve usability and engagement.",
      },
      {
        name: "User Research & Accessibility",
        technologies: "User Testing, Heuristic Evaluation, UX Research",
        level: "Proficient",
        experience:
          "Conducted user studies and integrated feedback into iterative design improvements. Applied accessibility best practices (contrast ratios, keyboard navigation, screen reader compatibility) in web applications.",
      },
    ],

    "Data Structures & Algorithms": [
      {
        name: "Algorithmic Problem-Solving",
        technologies:
          "Sorting, Graph Algorithms, Dynamic Programming, Greedy Algorithms",
        level: "Proficient",
        experience:
          "Studied and implemented fundamental algorithms such as sorting, searching, graph traversal (DFS/BFS), and dynamic programming techniques. Applied these algorithms in coding assignments, optimizing solutions for efficiency.",
      },
      {
        name: "Data Structures",
        technologies: "Arrays, Linked Lists, Hash Tables, Trees, Graphs, Heaps",
        level: "Proficient",
        experience:
          "Worked with fundamental and advanced data structures, implementing custom linked lists, hash tables, and balanced trees. Used graph data structures in pathfinding and network flow algorithms.",
      },
      {
        name: "Time & Space Complexity Analysis",
        technologies: "Big-O Notation, Performance Optimization",
        level: "Proficient",
        experience:
          "Analyzed algorithmic efficiency using Big-O notation. Optimized algorithms for scalability, improving performance in real-world applications like database queries and large-scale computations.",
      },
    ],

    "Computer Security": [
      {
        name: "Security Fundamentals",
        technologies: "Security Principles, Authentication, Access Control",
        level: "Proficient",
        experience:
          "Studied core security principles, including least privilege, defense in depth, and secure system design. Gained a deep understanding of authentication mechanisms, access control models (RBAC, DAC, MAC), and Unix access control policies.",
      },
      {
        name: "Web Security & Exploits",
        technologies:
          "CSRF, XSS, Clickjacking, Same-Origin Policy, HTTP Security",
        level: "Proficient",
        experience:
          "Analyzed and mitigated common web vulnerabilities, including Cross-Site Request Forgery (CSRF), Cross-Site Scripting (XSS), and clickjacking. Studied how browsers enforce the Same-Origin Policy and how attackers bypass security restrictions via CORS misconfigurations.",
      },
      {
        name: "Network & Cryptographic Security",
        technologies: "TLS/SSL, Certificates, Network Encryption, DNS Security",
        level: "Proficient",
        experience:
          "Examined cryptographic security protocols such as TLS/SSL and their role in securing communications. Studied certificate authorities, certificate validation, and DNS security mechanisms to prevent spoofing and MITM attacks.",
      },
      {
        name: "Operating System Security",
        technologies: "Unix Access Control, File Permissions, Session Fixation",
        level: "Proficient",
        experience:
          "Explored Unix-based security models, including file permissions, user groups, and process privilege management. Analyzed session fixation attacks and how improper session handling can lead to privilege escalation.",
      },
      {
        name: "Application & Domain Security",
        technologies:
          "Application Hardening, Domain Attacks, Secure HTTP Practices",
        level: "Familiar",
        experience:
          "Studied application security best practices to prevent common domain-based attacks, including domain hijacking, subdomain takeovers, and HTTP security misconfigurations. Explored secure development methodologies for web and cloud-based applications.",
      },
    ],

    "Systems Programming": [
      {
        name: "Low-Level Programming",
        technologies: "C, Rust, Assembly",
        level: "Proficient",
        experience:
          "Took two systems programming courses covering memory management, concurrency, and low-level system interactions. Worked extensively with C and Rust to implement system-level programs, including kernel modules and user-space applications. Studied assembly to understand hardware interactions and binary representations.",
      },
      {
        name: "Kernel Development & OS Concepts",
        technologies: "Kernel Programming, User vs. Kernel Space, System Calls",
        level: "Familiar",
        experience:
          "Wrote kernel-level code, interacting directly with system calls and memory management mechanisms. Explored the separation between user space and kernel space, implementing efficient interprocess communication (IPC). Studied operating systems architecture, including process scheduling, virtual memory, and filesystem design.",
      },
      {
        name: "Compilers & Optimization",
        technologies: "C Compiler, Optimization Theory, Binary Representations",
        level: "Familiar",
        experience:
          "Studied compiler design, including parsing, lexical analysis, and optimization strategies. Explored binary representations and how low-level optimizations affect execution speed and memory efficiency. Took detailed notes on compiler inner workings and cache optimization strategies.",
      },
      {
        name: "Shell Development & Unix Systems",
        technologies: "Bash, Unix, Shell Scripting",
        level: "Proficient",
        experience:
          "Built a custom Bash-like shell from scratch, handling process creation, command execution, and signal management. Developed an in-depth understanding of Unix-based systems, file systems, and interprocess communication (IPC). Worked with command-line utilities, scripting, and automating system tasks.",
      },
      {
        name: "Memory Management & Virtualization",
        technologies: "Virtual Memory, Caching, Floating Point Arithmetic",
        level: "Proficient",
        experience:
          "Studied memory management techniques, including virtual memory, paging, and segmentation. Explored cache optimization strategies, including Intel’s virtual memory architecture and caching mechanisms. Analyzed floating point arithmetic and its impact on numerical precision and performance.",
      },
    ],

    "Writing & Journalism": [
      {
        name: "News Writing",
        level: "Expert",
        experience:
          "Served as Editor-in-Chief of a high school newspaper, published in Yale Daily News.",
      },
      {
        name: "Editorial Writing",
        level: "Expert",
        experience:
          "Contributed columns and guest pieces for the Yale Daily News and Dirt Magazine.",
      },
      {
        name: "Technical Writing",
        level: "Expert",
        experience:
          "Helped author research papers, documentation for software projects, and guides for teaching.",
      },
    ],
    "Art & Illustration": [
      {
        name: "Digital Illustration",
        technologies: "Procreate, Adobe Illustrator, Photoshop",
        level: "Expert",
        experience:
          "Created digital illustrations for Yale Daily News and personal commissions using Procreate and Adobe Illustrator. Designed vector-based graphics and editorial artwork for print and online publications.",
      },
      {
        name: "Painting",
        technologies: "Acrylic, Oil, Watercolor, Gouache",
        level: "Expert",
        experience:
          "Took 5 Yale art courses focusing on different painting mediums, developing a strong foundation in color theory, composition, and realism. Sold paintings and murals for personal commissions and exhibitions.",
      },
      {
        name: "Printmaking",
        technologies: "Screen Printing, Linocut, Etching, Monotype, Woodblock",
        level: "Expert",
        experience:
          "Studied and practiced various printmaking techniques in Yale art courses. Created custom-designed prints, posters, and merchandise using screen printing and relief printing techniques.",
      },
      {
        name: "Set & Props Design",
        technologies: "Woodworking, Stained Glass, Painting",
        level: "Proficient",
        experience:
          "Designed and built sets and props for Yale theater productions. Created detailed stained glass pieces, hand-painted backdrops, and custom-built stage elements using woodworking and sculpting techniques.",
      },
    ],
  };

  const levelColors = {
    Expert: "bg-green-300 text-green-900",
    Proficient: "bg-yellow-300 text-yellow-900",
    Familiar: "bg-blue-300 text-blue-900",
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills =
    selectedCategory === "All"
      ? Object.entries(skills)
      : [[selectedCategory, skills[selectedCategory] || []]];

  return (
    <div className="w-11/12 mx-auto py-5">
      <Head>
        <title>Anna Xu | Skills</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map(([category, color]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition ${
              selectedCategory === category ? "ring-2 ring-black" : "opacity-70"
            }`}
            style={{ backgroundColor: color }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {filteredSkills.map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 text-center">
              {skills.map(({ name, level, technologies, experience }) => (
                <div
                  key={name}
                  className="bg-gray-100 rounded-lg p-3 shadow-sm text-lg font-medium flex flex-col items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() =>
                    setSelectedSkill({ name, level, technologies, experience })
                  }
                >
                  {name}
                  <span className={`px-2 py-1 mt-1 text-xs`}>
                    {technologies}
                  </span>
                  <span
                    className={`px-2 py-1 mt-1 text-xs rounded ${levelColors[level]}`}
                  >
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Skill Details */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-xl font-bold">{selectedSkill.name}</h2>
            <span className={`px-2 py-1 mt-1 text-xs`}>
              {selectedSkill.technologies}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                levelColors[selectedSkill.level]
              }`}
            >
              {selectedSkill.level}
            </span>
            <p className="mt-4 text-gray-700">{selectedSkill.experience}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
