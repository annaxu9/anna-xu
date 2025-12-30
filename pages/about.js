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
        I’m creative, curious, and a hobbyist at heart, with a lot of interests
        and a love for learning. I enjoy technology and design, and I like
        building things that make complicated systems feel simpler and more
        human.
        <br />
        <br />
        I studied Computer Science at Yale and also have a background in art,
        which shapes how I think about visuals and creativity. I love working
        with people, value my friends and family deeply, and try to bring care
        into most things I do. Ultimately, I hope my work helps people live
        happier and more aware of the world around them.
        <br />
        <br />
        When I’m not building or learning, you’ll usually find me outdoors,
        crafting, or consuming media.

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
