import Link from "next/link";

export default function NavBar() {
    return (
        <nav class="bg-color3">
            <ul>
                <li>
                    <Link href="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link href="/experience">
                        experience
                    </Link>
                </li>
                <li>
                    <Link href="/personal-statement">
                        personal statement
                    </Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    )
}