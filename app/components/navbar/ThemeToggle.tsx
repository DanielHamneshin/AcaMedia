"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {

    // TODO: get theme from localstorage or cookies
    // ! const savedTheme = localStorage.getItem("theme") as "light" | "dark";

    const [toggle, setToggle] = useState<"light" | "dark">("light");


    useEffect(() => {

        if (toggle === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", toggle);
    }, [toggle]);

    const handleToggle = () => {
        setToggle(toggle === "light" ? "dark" : "light");
    };


    return (
        <div className="flex flex-wrap items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                <input
                    onChange={handleToggle}
                    checked={toggle === "light"}
                    type="checkbox"
                    className="sr-only peer"
                />

                <div className="w-16 h-8 bg-blue-800 rounded-full peer peer-checked:bg-slate-400 transition-colors duration-200"></div>

                <span className="p-1 dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-8">
                    <Image
                        width={"20"}
                        height={"20"}
                        src={
                            toggle === "light"
                                ? "/sun-yellow.svg"
                                : "/moon-black.svg"
                        }
                        alt=""
                    />
                </span>
            </label>
        </div>
    );
};

export default ThemeToggle;