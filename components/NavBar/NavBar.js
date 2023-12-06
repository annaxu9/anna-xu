import Link from "next/link";
import Name from "../Name/Name";

export default function NavBar() {
    return (
        <nav className="bg-color3">
            <div className="flex justify-center items-center">
                <div className="flex-grow pl-2"> 
                    <Link href="/" className="z-100">
                        <Name />
                    </Link>
                </div>
                <ul className="flex justify-center items-center">
                    <li className="mr-2 p-2 text-center hover:bg-color4">
                        <Link href="/experience" className="z-100">
                            experience
                        </Link>
                    </li>
                    <li className="mr-2 p-2 text-center hover:bg-color4">
                        <Link href="/music" className="z-100">
                            music&rarr;color
                        </Link>
                    </li>
                    <li className="mr-2 p-2 text-center hover:bg-color4">
                        <Link href="/personal-statement" className="z-100">
                            personal statement
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>


        </nav>
    )
}