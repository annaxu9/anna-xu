import Link from "next/link";
import { useRouter } from 'next/router';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <div className="flex justify-center">
            <nav className="w-11/12">
                {/* Mobile NavBar */}
                <div className="md:hidden p-1 border-solid border-2 border-melrose mt-5 rounded">
                    {/* Main Link */}
                    <Link href="/" className="block z-100 bg-melrose text-white py-3 w-full text-center">
                        anna xu
                    </Link>
                    
                    {/* Navigation Links */}
                    <div className="border-t border-melrose">
                        {currentPath === "/colorfy" ? 
                            <Link href="/colorfy" className="block z-100 no-rainbow-text py-3 w-full text-center">
                                colorfy
                            </Link>
                            :
                            <Link href="/colorfy" className="block z-100 css-rainbow-text py-3 rounded w-full text-center">
                                colorfy
                            </Link>                                  
                        }
                        <Link href="/about" className="block z-100 bg-melrose text-white py-3 w-full text-center">
                            about
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 py-3">
                        <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center">
                            <FaLinkedin size={30} className="mr-2" /> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center">
                            <FaInstagram size={30} className="mr-2" /> Instagram
                        </a>
                    </div>
                </div>



                {/* Desktop NavBar */}
                <div className="hidden md:flex justify-between items-center p-1 mt-5 rounded">
                    {/* Desktop NavBar Content: Similar to your original NavBar */}
                    <div className="flex-grow pl-2">
                        <Link href="/" className="z-100 text-pinknew p-2 rounded">
                           • ANNA XU • 
                        </Link>
                    </div>
                    <ul className="flex justify-center items-center rounded bg-gradient-to-r from-pink-200 to-melrose">
                        <li className="mr-2 p-1.5 text-center hover:bg-color4 ">
                            { currentPath === "/colorfy" ? 
                                <Link href="/colorfy" className="z-100 bg-white text-melrose p-1 rounded">
                                    colorfy
                                </Link>
                                    :
                                <Link href="/colorfy" className="z-100 css-rainbow-text p-1 rounded">
                                    colorfy
                                </Link>   
                             
                            }
                        </li>
                        <li className="mr-2 p-1.5 text-center hover:bg-color4">
                            { currentPath === "/about" ? 
                                <Link href="/about" className="z-100 bg-white text-melrose p-1 rounded">
                                    about
                                </Link>
                                :
                                <Link href="/about" className="z-100 text-white p-1 rounded">
                                    about
                                </Link>                                  
                            }
                        </li>
                        <li className="mr-2 p-1.5 text-center hover:bg-color4">
                            <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="mr-2 p-1.5 text-center hover:bg-color4">
                            <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={30} />
                            </a>                    
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}