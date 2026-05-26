import Link from "next/link"
import AuthButton from "./AuthButton"
import { Italianno } from "next/font/google"
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import SearchBar from "./SearchBar";
const italiannoFont = Italianno({ weight: "400", subsets: ["latin"] });

// TODO: allign items to the right ratio

const NavBar = async () => {
    return (
        <nav className=" z-10 flex items-center justify-between gap-2 p-2 w-full border-b border-neutral-800 dark:border-neutral-200 fixed top-0">
            <Link href="/" className="flex items-center gap-2 p-2">
                <Image height={"10"} width={"10"} src="/AcaMedia-logo.png" alt="" className="h-10 w-10 border rounded-full" />
                <h1 className={` font-bold ${italiannoFont.className} bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-amber-400 to-blue-500 text-5xl`}>AcaMedia</h1>
            </Link>
            <SearchBar />
            <ThemeToggle />
            <AuthButton />
        </nav>
    )
}

export default NavBar