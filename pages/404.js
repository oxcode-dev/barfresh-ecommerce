import Link from "next/link"
import RootLayout from "../layout"

export default function NotFound() {
    return (
        <>
            <RootLayout>
                <main class="h-96 my-16 w-full flex flex-col justify-center items-center">
                    <div className="relative my-5">
                        <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
                        <div 
                            class="top-20 left-16 bg-green-700 text-white px-2 text-sm rounded rotate-12 absolute"
                        >
                            Page Not Found
                        </div>
                    </div>
                    <div class="mt-12">
                        <Link href='/' className="inline-flex justify-center items-center bg-green-700 h-12 sm:mx-2 w-full text-white rounded-lg px-4">
                            Go Home
                        </Link>
                    </div>
                    {/* <button class="mt-12">
                        <a
                            class="relative inline-block text-sm font-medium text-green-700 group active:text-green-500 focus:outline-none focus:ring"
                        >
                            <span
                                class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-700 group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                                <Link href="/">Go Home</Link>
                            </span>
                        </a>
                    </button> */}
                </main>
            </RootLayout>
        </>
    )
}