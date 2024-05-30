'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="container mx-auto flex flex-wrap justify-center pt-8 md:flex-row items-center">
            <nav className="bg-blue shadow-xl px-5 py-2 text-white rounded-full">
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded"
                    >
                        <svg
                            className={`fill-white h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-white h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>

                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                    <div className="md:ml-auto text-xl text-white md:mr-auto flex flex-wrap justify-center space-x-8">
                        <Link href="/">
                            <div className="hover:underline active:font-bold">home</div>
                        </Link>
                        <Link href="/about">
                            <div className="hover:underline">meet</div>
                        </Link>
                        <Link href="/services">
                            <div className="hover:underline">uses</div>
                        </Link>
                        <Link href="/contact">
                            <div className="hover:underline ">resume</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar