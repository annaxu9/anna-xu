import Link from "next/link";
import { useRouter } from 'next/router';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="flex justify-center mb-4 fixed top-0 left-0 w-full bg-white z-50 pb-5">
            <nav className="w-11/12 sm:w-5/6">
                <div className="flex justify-between items-center p-1 mt-5 rounded">
                    {/* Left Side */}
                    <div className="flex-grow pl-2">
                        {/* This will be visible on small screens and hidden on medium screens and larger */}
                        <div className="sm:hidden">
                            {currentPath == "/" ?
                            <Link href="/" >
                                ANNA XU
                            </Link>
                            :
                            <Link href="/" className="z-100 text-black p-2 rounded">
                                ANNA XU
                            </Link>   
                            }
                        </div>
                        
                        {/* This will be hidden on small screens and visible on medium screens and larger */}
                        <div className="hidden sm:block">
                            {currentPath == "/" ?
                            <Link href="/" className="z-100 text-melrose p-2 rounded">
                                ☺️ ANNA XU ☺️
                            </Link>
                            :
                            <Link href="/" className="z-100 text-black p-2 rounded">
                                ☺️ ANNA XU ☺️
                            </Link>   
                            }
                        </div>
                    </div>


                    <ul className="flex justify-center items-center">
                        <li className="mr-2 text-center hover:bg-color4 ">
                            { currentPath === "/vibe-check" ? 
                                <Link href="/vibe-check" className="z-100 text-melrose  rounded">
                                    vibe check
                                </Link>
                                    :
                                <Link href="/vibe-check" className="z-100 css-rainbow-text rounded">
                                    vibe check
                                </Link>   
                             
                            }
                        </li>
                        <li className="mr-2 p-1 text-center hover:bg-color4">
                            <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={23} />
                            </a>
                        </li>
                        <li className="mr-2 p-1 text-center hover:bg-color4">
                            <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={23} />
                            </a>                    
                        </li>
                        <li className=" p-1.5 text-center hover:bg-color4 relative">
                            <button onClick={toggleDropdown} className="flex">
                                more 
                                <span className="hidden sm:block mt-1">
                                    <Image 
                                        src="/icons/arrow.png" 
                                        width={20} 
                                        height={20}
                                        className={dropdownOpen ? 'rotate-180' : ''} 
                                    />
                                </span>       
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute right-0 mt-1.5 bg-melrose p-2 text-white shadow rounded">
                                    <li>
                                        <Link href="/skills" className="z-100 p-1 rounded" onClick={toggleDropdown}>
                                            skills
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resume" className="z-100 p-1 rounded" onClick={toggleDropdown}>
                                            resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="z-100 p-1 rounded" onClick={toggleDropdown}>
                                            about
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
