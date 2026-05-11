import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const loginPage = async () => {
    const session = await auth();
    if (session) return redirect("/");
    return (
        <>
            <form className="flex flex-col items-center justify-around gap-2 m-auto w-90 h-80 mt-50 border border-white" action={async (formData: FormData) => {
                "use server";
                const provider = formData.get("provider") as string;
                await signIn(provider, {
                    redirectTo: "/"
                });
            }}>
                <button name="provider" value="github" type="submit" className="flex items-center gap-2 cursor-pointer border border-neutral-200 rounded-full p-1 bg-neutral-100 dark:text-black hover:bg-neutral-300">
                    <img src="/github-svgrepo-com.svg" alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    Continue with GitHub
                </button>
                <button name="provider" value="google" type="submit" className="flex items-center gap-2 cursor-pointer border border-neutral-200 rounded-full p-1 bg-neutral-100 dark:text-black hover:bg-neutral-300">
                    <img src="/google-icon-logo-svgrepo-com.svg" alt="" className="w-8 h-8 bg-white border border-gray-200 rounded-full" />
                    Continue with Google
                </button>
            </form>
        </>
    )
}

export default loginPage
