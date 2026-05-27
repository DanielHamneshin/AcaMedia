"use client";

import { useRef, useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="relative w-full max-w-sm">
            {/* Icon Container */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* Input Field */}
            <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
            />

            {search && (
                <button
                    onClick={() => {
                        setSearch("");
                        inputRef.current?.focus();
                    }}
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full cursor-pointer rounded-r-full"
                >
                    <svg className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default SearchBar