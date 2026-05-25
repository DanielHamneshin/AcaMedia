import { headers } from "next/headers";
import Link from "next/link";
const NotFound = async () => {
    const headersList = await headers();
    const referer = headersList.get("referer");

    const backUrl = referer || "/";
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-6 py-12 transition-colors duration-200">
            <div className="text-center max-w-md w-full">

                {/* Styled 404 Number Layer */}
                <div className="relative mb-8">
                    <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800 select-none tracking-widest">
                        404
                    </h1>
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-900 px-4 whitespace-nowrap">
                        Page Not Found
                    </p>
                </div>

                {/* Messaging */}
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mb-4">
                    Looks like you&#39;re lost. {/* The &#39; character is a single quote, did it due to lint error */}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                        Go back home
                    </Link>
                    <Link
                        href={backUrl}
                        className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                        Previous page
                    </Link>
                </div>
            </div>

            {/* Footer / Support Link */}
            <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
                Need help?{' '}
                <Link
                    href="/support"
                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 underline decoration-2 underline-offset-4"
                >
                    Contact Support
                </Link>
            </div>
        </div>
    )
}

export default NotFound