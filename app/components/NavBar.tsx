import { auth, signOut } from "@/auth"
import Link from "next/link"
import { redirect } from "next/navigation";

const NavBar = async () => {
    const session = await auth();
    let firstName = session?.user?.name?.split(" ")[0];
    let lastName = session?.user?.name?.split(" ")[1];
    return (
        <nav className="flex items-center gap-2 p-2 w-full">
            <Link href="/" className="flex items-center gap-2 p-2">
                <img src="/AcaMedia-logo.png" alt="" className="h-10 w-10 border rounded-full" />
                <h1 className="text-2xl font-bold">AcaMedia</h1>
            </Link>
            {session ?
                <form className="ml-auto" action={
                    async () => {
                        "use server";
                        await signOut({
                            redirectTo: "/login"
                        });
                    }
                }>
                    <button type="submit" className=" flex items-center gap-2 cursor-pointer border border-neutral-200 rounded-full p-1 bg-neutral-100 dark:text-black hover:bg-neutral-300">
                        <img src={`https://ui-avatars.com/api/?name=${firstName}+${lastName || ""}`} alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    </button>
                </form> :
                <Link href="/login" className="ml-auto flex items-center gap-2 cursor-pointer border border-neutral-200 rounded-full p-1 bg-neutral-100 dark:text-black hover:bg-neutral-300" >
                    <img src="/github-svgrepo-com.svg" alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    Login
                </Link>
            }
        </nav>
    )
}

export default NavBar