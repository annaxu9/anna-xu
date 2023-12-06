import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-color4">
            <ul className=" flex justify-center">
                <li className=" mr-2 p-2 text-center hover:bg-color3">
                    <Link href="/" className="z-100">
                        home
                    </Link>
                </li>
                <li className="mr-2 p-2 text-center hover:bg-color3">
                    <Link href="/experience" className="z-100">
                        experience
                    </Link>
                </li>
                <li className="mr-2 p-2 text-center hover:bg-color3">
                    <Link href="/music" className="z-100">
                        music&rarr;color
                    </Link>
                </li>
                <li className="mr-2 p-2 text-center hover:bg-color3">
                    <Link href="/personal-statement" className="z-100">
                        personal statement
                    </Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    )
}