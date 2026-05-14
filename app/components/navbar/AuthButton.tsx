import { auth, signOut } from "@/auth";
import Link from "next/link";


// TODO: style with dark mode and add dropdown menu
const AuthButton = async () => {
    const session = await auth();
    const firstName = session?.user?.name?.split(" ")[0];
    const lastName = session?.user?.name?.split(" ")[1];
    return (
        <div className="ml-auto flex items-center gap-2">
            {session ?
                <form action={
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
                <Link href="/login" className="flex items-center gap-2 cursor-pointer border border-neutral-200 rounded-full p-1 bg-neutral-100 dark:text-black hover:bg-neutral-300" >
                    <img src="/github-svgrepo-com.svg" alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    Login
                </Link>}
        </div>
    )
}

export default AuthButton