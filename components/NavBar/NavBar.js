import Link from "next/link";
import { useRouter } from 'next/router';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <div className="flex justify-center mb-4">
            <nav className="w-5/6">
                {/* Mobile NavBar */}
                <div className="md:hidden mt-4 flex flex-grow flex-row justify-between">
                        { currentPath == "/" ?
                            <Link href="/" className="z-100 text-melrose ">
                                ANNA XU
                            </Link>
                                :
                            <Link href="/" className="z-100 text-black ">
                                ANNA XU
                            </Link>   
                        }
                        <ul className="flex justify-center items-center">
                            <li className="mr-2 text-center">
                                { currentPath === "/colorfy" ? 
                                    <Link href="/colorfy" className="z-100 text-melrose  ">
                                        colorfy
                                    </Link>
                                        :
                                    <Link href="/colorfy" className="z-100 css-rainbow-text  ">
                                        colorfy
                                    </Link>   
                                }
                            </li>
                            <li className="mr-2 text-center">
                                { currentPath === "/about" ? 
                                    <Link href="/about" className="z-100 text-melrose  ">
                                        about
                                    </Link>
                                    :
                                    <Link href="/about" className="z-100 text-black ">
                                        about
                                    </Link>                                  
                                }
                            </li>
                            <li className="mr-2 text-center">
                                <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin size={20} />
                                </a>
                            </li>
                            <li className="mr-2 text-center"> 
                                <a href="https://www.instagram.com/annax.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram size={20} />
                                </a> 
                            </li>
                        </ul>

                </div>



                {/* Desktop NavBar */}
                <div className="hidden md:flex justify-between items-center p-1 mt-5 rounded">
                    {/* Desktop NavBar Content: Similar to your original NavBar */}
                    <div className="flex-grow pl-2">
                        { currentPath == "/" ?
                            <Link href="/" className="z-100 text-melrose p-2 rounded">
                                ☺️ ANNA XU ☺️
                            </Link>
                                :
                            <Link href="/" className="z-100 text-black p-2 rounded">
                                ☺️ ANNA XU ☺️
                            </Link>   
                        }
                    </div>
                    <ul className="flex justify-center items-center">
                        <li className="mr-2 text-center hover:bg-color4 ">
                            { currentPath === "/colorfy" ? 
                                <Link href="/colorfy" className="z-100 text-melrose  rounded">
                                    colorfy
                                </Link>
                                    :
                                <Link href="/colorfy" className="z-100 css-rainbow-text rounded">
                                    colorfy
                                </Link>   
                             
                            }
                        </li>
                        <li className="mr-2 p-1.5 text-center hover:bg-color4">
                            { currentPath === "/about" ? 
                                <Link href="/about" className="z-100 text-melrose p-1 rounded">
                                    about
                                </Link>
                                :
                                <Link href="/about" className="z-100 text-black p-1 rounded">
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