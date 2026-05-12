import Link from "next/link"
import AuthButton from "./AuthButton"
import { Italianno } from "next/font/google"
const italiannoFont = Italianno({ weight: "400", subsets: ["latin"] });

const NavBar = async () => {
    return (
        <nav className="flex items-center gap-2 p-2 w-full border-b border-neutral-200 fixed top-0">
            <Link href="/" className="flex items-center gap-2 p-2">
                <img src="/AcaMedia-logo.png" alt="" className="h-10 w-10 border rounded-full" />
                <h1 className={` font-bold ${italiannoFont.className} bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-amber-400 text-5xl`}>AcaMedia</h1>
            </Link>
            <AuthButton />
        </nav>
    )
}

export default NavBar