import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";


const AuthButton = async () => {
    const session = await auth();

    return (
        <div className="ml-auto flex items-center gap-2">
            {session ?
                <div>
                    <UserMenu name={session.user?.name} image={session.user?.image} />
                </div>
                :
                <Link href="/login" className="flex items-center gap-2 cursor-pointer border border-neutral-700 rounded-full p-1 bg-neutral-200 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-600 hover:bg-neutral-300" >
                    <Image height={"8"} width={"8"} src="/login.svg" alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    Login
                </Link>}
        </div>
    )
}

export default AuthButton