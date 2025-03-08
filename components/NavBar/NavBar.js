import Link from "next/link";
import { useRouter } from "next/router";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import DropdownButton from "./DropdownButton";

export default function NavBar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 pb-2">
      <nav className="w-11/12 sm:w-5/6 mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Left Side - Responsive Name */}
          <div className="flex-grow">
            <Link
              href="/"
              className={`text-lg ${
                currentPath === "/" ? "text-melrose" : "text-black"
              }`}
            >
              <span className="block sm:hidden">AX</span>{" "}
              {/* Show "AX" on mobile */}
              <span className="hidden sm:block">anna xu</span>{" "}
              {/* Show full name on larger screens */}
            </Link>
          </div>

          {/* Navigation Links & Icons */}
          <ul className="flex items-center space-x-3">
            <li className="hidden sm:block">
              <Link
                href="/vibe-check"
                className={
                  currentPath === "/vibe-check"
                    ? "text-melrose"
                    : "css-rainbow-text"
                }
              >
                vibe check
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anna-wenxin-xu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/annax.u/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/annaxu9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FaGithub size={22} />
              </a>
            </li>

            {/* Dropdown Menu */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-2 py-1 hover:bg-gray-200 rounded-md"
              >
                more
                <Image
                  src="/icons/arrow.png"
                  width={20}
                  height={20}
                  className={`ml-1 transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  alt="dropdown"
                />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-melrose w-28 py-2 pb-3 shadow-lg rounded-md text-white">
                  <DropdownButton path="about" path_name="about" />
                  <DropdownButton path="resume" path_name="resume" />
                  <DropdownButton path="skills" path_name="skills" />
                  <DropdownButton path="art-portfolio" path_name="art" />
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
