import Link from "next/link";
import { useRouter } from 'next/router';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import DropdownButton from "./DropdownButton";

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const hovered = "css-rainbow-text"
    const nothovered = "text-white"

    const changeToHoverText = () => {

    }

    return (
        <div className="flex justify-center mb-3 fixed top-0 left-0 w-full bg-white z-50 pb-2">
            <nav className="w-full sm:w-5/6">
                <div className="flex justify-between items-center p-1 mt-5 rounded">
                    {/* Left Side */}
                    <div className="flex-grow pl-2">
                        <div>
                            {currentPath == "/" ?
                            <Link href="/" className="z-100 text-melrose">
                            anna xu
                            </Link>
                            :
                            <Link href="/" className="z-100 text-black">
                            anna xu
                            </Link>   
                            }
                        </div>
                    </div>

                    <ul className="flex justify-center items-center">
                        <li className="mr-1.5 sm:mr-2 text-center hover:bg-color4 ">
                            { currentPath === "/vibe-check" ? 
                                <Link href="/vibe-check" className="z-100 text-melrose">
                                    vibe check
                                </Link>
                                    :
                                <Link href="/vibe-check" className="z-100 css-rainbow-text">
                                    vibe check
                                </Link>   
                             
                            }
                        </li>
                        <li className="mr-1.5 p-1 text-center hover:bg-color4">
                            <a href="https://www.linkedin.com/in/anna-wenxin-xu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={22} />
                            </a>
                        </li>
                        <li className="mr-1.5 p-1 text-center hover:bg-color4">
                            <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={22} />
                            </a>                    
                        </li>
                        <li onClick={toggleDropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className=" p-1.5 text-center hover:bg-color4 relative">
                            <button  className="flex">
                                more 
                                <span className="hidden sm:block mt-1">
                                    <Image 
                                        src="/icons/arrow.png" 
                                        width={20} 
                                        height={20}
                                        className={dropdownOpen ? 'rotate-180' : ''} 
                                        alt="dropdown"
                                    />
                                </span>       
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute right-0 mt-1.5 bg-melrose w-24 h-[140px] pb-2 flex flex-col justify-center text-white shadow rounded">
                                    <DropdownButton path="about" path_name="about" />
                                    <DropdownButton path="art-portfolio" path_name="art" />
                                    <DropdownButton path="contact" path_name="contact" />
                                    <DropdownButton path="resume" path_name="resume" />
                                    <DropdownButton path="skills" path_name="skills" />
                                </ul>
                            )}
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
