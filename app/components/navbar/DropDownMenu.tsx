import SignOutButton from "./SignOutButton";

const DropDownMenu = () => {
    return (
        <>
            <div className="absolute top-11 right-0 z-10 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:border-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DropDownMenu