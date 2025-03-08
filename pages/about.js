import Image from "next/image";
import Head from "next/head";
import { FaEnvelope } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center">
      <Head>
        <title>About & Contact | Anna Xu</title>
      </Head>

      {/* Header */}
      <h1 className="text-3xl font-bold mt-6">About Anna</h1>

      {/* Image Container */}
      <div className="m-4 p-3 max-w-[400px] border-2 border-melrose rounded-lg shadow-md">
        <div className="p-2 border-2 border-pink border-double rounded-md">
          <div className="p-2 border-2 border-yale border-dashed rounded-sm">
            <Image
              src="/about-images/hawaii.jpeg"
              width={150}
              height={150}
              layout="intrinsic"
              alt="Anna in Hawaii"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <p className="text-lg text-gray-700 text-center max-w-lg">
        I’m passionate about technology, design, and the intricate systems that
        shape our world. As a Computer Science student at Yale University, I’ve
        explored everything from web development and UI/UX to software
        engineering and computer systems. I thrive at the intersection of
        creativity and engineering, where human-centered design meets innovative
        problem-solving.
        <br />
        <br />
        Beyond coding, I have a strong foundation in art and design, having
        taken multiple studio art courses and worked on projects involving
        painting, printmaking, and set design. My artistic background enhances
        my ability to craft intuitive and visually compelling digital
        experiences.
        <br />
        <br />
        When I’m not building, designing, or learning, you’ll most likely find
        me outdoors and/or reading a book.{" "}
      </p>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mt-10">Get in Touch</h2>

      <div className="flex flex-col items-center mt-4 space-y-4">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-blue-600" size={24} />
          <a
            href="mailto:annawenxin@gmail.com"
            target="_blank"
            className="text-blue-600 hover:underline text-lg"
          >
            annawenxin@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
