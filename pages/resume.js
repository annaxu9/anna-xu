import React, { useState, useEffect } from "react";
import Experience from "../components/Resume/Experiences";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Resume() {
  const [isScrolled, setIsScrolled] = useState(false);

  const coursework = [
    "Data Structures and Programming Techniques",
    "Algorithms",
    "Full Stack Web Development",
    "Software Engineering",
    "Human Computer Interaction",
    "Data Visualization",
    "Systems Programming and Computer Architecture",
    "Object Oriented Programming",
    "Principles of Computer System Design",
    "Computer System Security",
  ];

  const handleScroll = () => setIsScrolled(window.scrollY > 1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-11/12 sm:w-4/5 mx-auto">
      <Head>
        <title>Anna Xu</title>
      </Head>
      <h1
        className={`transition-colors duration-500 bavista ${
          isScrolled ? "text-white" : "text-melrose"
        }`}
      >
        hi<span className="nervada">!</span> we
        <span className="nervada">l</span>come<span className="nervada">!</span>
        <span className="not-italic text-3xl"> 👩🏻‍💻 📖 🧠 💻</span>
      </h1>
      <hr className="mb-8" />

      <div className="flex justify-end gap-2 mb-5">
        <Link href="/skills">
          <p className="text-white rounded-lg bg-melrose p-1 w-20 text-center hover:bg-melrose100 transition">
            Skills
          </p>
        </Link>
      </div>

      <div>
        {/* Education Section */}
        <h1 className="text-center bavista2">Education</h1>
        <div className="ml-6 mb-4">
          <p>
            <span className="font-bold text-yale">
              {" "}
              🐶 Yale University (2020-2024.5)
            </span>{" "}
            - go bulldogs!
          </p>
          <p>👩🏻‍💻 B.S. in Computer Science</p>
          <div className="ml-4 text-sm italic">
            <p>
              <span className="font-bold">Relevant Coursework:</span>{" "}
              {coursework.join(", ")}
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <h1 className="text-center bavista2">Experience</h1>
        <Experience />
        {/* Projects Section */}
        <h1 className="text-center bavista2 mt-10">Products</h1>
        {/* YaleIMs Project */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-5 gap-2 bg-melrose100 p-4 rounded-lg pb-8">
          <Image
            src="/resume-images/yaleims.png"
            alt="YaleIMs Project"
            width={100}
            height={100}
          />
          <div>
            <a
              href="https://yaleims.com"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              yaleims.com
            </a>
            <p>
              Yale&apos;s 14 colleges compete annually for the Tyng Cup in
              Intramural (IM) sports, but there was no centralized way to view
              standings and schedules. We built YaleIMs to improve accessibility
              and engagement.
            </p>
          </div>
        </div>
        {/* Vibe Check Project */}
        <div className="bg-melrose100 p-10 rounded-lg">
          <Link className="font-bold underline" href="/vibe-check">
            vibe check
          </Link>
          <ul className="ml-12 list-disc">
            <li>
              Developed <strong>Vibe Check</strong>, a web application that uses
              the Spotify API to search songs/artists and analyze their data.
              Displayed song &quot;vibes&quot; based on key audio features.
            </li>
          </ul>
        </div>
        <h1 className="text-center bavista2 mt-10 mb-10">Coming Soon</h1>
        <Image
          src="/resume-images/aiforus.png"
          alt="AiforUs"
          width={200}
          height={200}
          className="w-80 mx-auto mb-10"
        />
        <Image
          src="/resume-images/flashnito.png"
          alt="flashnito"
          width={200}
          height={200}
          className="w-80 mx-auto mb-20"
        />
      </div>
    </div>
  );
}
