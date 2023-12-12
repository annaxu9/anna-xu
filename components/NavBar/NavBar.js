import Link from "next/link";
import { useRouter } from 'next/router';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    const router = useRouter();
    const currentPath = router.pathname;


    return (
        <div className="flex justify-center items-center">
            <nav className="p-1 border-solid border border-2 border-melrose mt-5 w-4/5 rounded">
                <div className="flex justify-center items-center">
                    <div className="flex-grow pl-2"> 
                        <Link href="/" className="z-100 bg-melrose text-white p-2 rounded">
                            anna xu
                        </Link>
                    </div>
                    <ul className="flex justify-center items-center">
                        <li className="mr-2 p-2 text-center hover:bg-color4">
                            { currentPath === "/colorfy" ? 
                                <Link href="/colorfy" className="z-100 no-rainbow-text p-1.5 rounded">
                                    colorfy
                                </Link>
                                :
                                <Link href="/colorfy" className="z-100 css-rainbow-text p-1.5 rounded">
                                    colorfy
                                </Link>                                  
                            }

                        </li>
                        <li className="mr-2 p-2 text-center hover:bg-color4">
                            <Link href="/about" className="z-100 bg-melrose text-white p-2 rounded">
                                about
                            </Link>
                        </li>
                        <li className="mr-2 p-2 text-center hover:bg-color4">
                            <a href="https://www.linkedin.com/in/anna-xu-354271192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="mr-2 p-2 text-center hover:bg-color4">
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