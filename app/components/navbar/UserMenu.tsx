'use client';

import type { UserMenuProps } from "@/interfaces/IUserMenu";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const UserMenu = ({ name, image }: UserMenuProps) => {
    const [firstName = "", lastName = ""] = name?.split(" ") || [];
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className=" flex items-center gap-2 cursor-pointer border border-neutral-700 rounded-full p-1 bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 hover:bg-neutral-400">
                <img src={`${image || "/profile-user.svg"}`} alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                <span>{firstName || ""} {lastName || ""}</span>
            </button>
            {isOpen && <DropDownMenu />}
        </div>
    )
}

export default UserMenu