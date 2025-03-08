import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white  border-t py-4 mt-6">
      <div className="w-5/6 mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side - Text */}
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Anna Xu. All rights reserved.
        </p>

        {/* Right Side - Social Media Links */}
        <ul className="flex space-x-4 mt-3 sm:mt-0">
          <li className="p-2 text-center hover:bg-gray-200 rounded-lg transition">
            <a
              href="https://www.linkedin.com/in/anna-wenxin-xu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={24}
                className="text-gray-600  hover:text-blue-500 transition"
              />
            </a>
          </li>
          <li className="p-2 text-center hover:bg-gray-200 rounded-lg transition">
            <a
              href="https://www.instagram.com/annax.u/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={24}
                className="text-gray-600  hover:text-pink-500 transition"
              />
            </a>
          </li>
          <li className="p-2 text-center hover:bg-gray-200 rounded-lg transition">
            <a
              href="https://github.com/annaxu9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub
                size={24}
                className="text-gray-600 hover:text-black transition"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
