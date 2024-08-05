import Link from "next/link";

export default function DropdownButton({path, path_name}) {

    return (
        <li className="flex items-center justify-center hover-effect">
            <Link href={"/" + path} className="transition-all duration-400 relative h-[23px] z-100 p-1 rounded text-white text-center" >
                {path_name}
            </Link>
        </li>
    )
}