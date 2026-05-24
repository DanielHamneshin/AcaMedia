import Image from "next/image"
import { logout } from "./actions"

const SignOutButton = () => {
    return (
        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full">
            <form action={logout} className="cursor-pointer w-full">
                <button type="submit" className="cursor-pointer flex items-center gap-2 w-full">
                    <span>
                        <Image height={4} width={4} src="/logout.svg" alt="" className="w-4 h-4 rounded-full transform rotate-180" />
                    </span>
                    <span>Logout</span>
                </button>
            </form>

        </div>
    )
}

export default SignOutButton