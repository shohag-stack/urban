'use client'
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logo = "/images/Urban.svg";
    
    return (
        <div className="container bg-gray-100/50 mx-auto top-0 md:top-5 md:left-0 md:right-0 z-40 backdrop-blur-md md:rounded-full fixed max-w-full">
            <header>
                <nav className="w-full py-4 px-4 md:px-7">
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-5 lg:items-center">
                        <div>
                            <Link href={`/`}>
                                <Image src={logo} width={80} height={70} alt="urbanLogo" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <ul className="flex justify-center space-x-8">
                                <li>
                                    <Link href={"/"} className="hover:text-gray-600 transition-colors">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/listings"} className="hover:text-gray-600 transition-colors">Listings</Link>
                                </li>
                                <li>
                                    <Link href={"/about"} className="hover:text-gray-600 transition-colors">About us</Link>
                                </li>
                                <li>
                                    <Link href={"/blog"} className="hover:text-gray-600 transition-colors">Blog</Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className="hover:text-gray-600 transition-colors">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <button className="btn-secondary">Contact us</button>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div>
                                <Link href={`/`}>
                                    <Image src={logo} width={60} height={50} alt="urbanLogo" />
                                </Link>
                            </div>
                            
                            {/* Mobile menu button */}
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-md hover:bg-gray-200/50 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    {isMenuOpen ? (
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M6 18L18 6M6 6l12 12" 
                                        />
                                    ) : (
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M4 6h16M4 12h16M4 18h16" 
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="mt-4 pb-2">
                                <ul className="flex flex-col space-y-3">
                                    <li>
                                        <Link 
                                            href={"/"} 
                                            className="block py-2 px-3 hover:bg-gray-200/50 transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href={"/listings"} 
                                            className="block py-2 px-3 hover:bg-gray-200/50 rounded-md transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Listings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href={"/about"} 
                                            className="block py-2 px-3 hover:bg-gray-200/50 rounded-md transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href={"/blog"} 
                                            className="block py-2 px-3 hover:bg-gray-200/50 rounded-md transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href={"/contact"} 
                                            className="block py-2 px-3 hover:bg-gray-200/50 rounded-md transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mt-4 px-3">
                                    <button className="btn-secondary w-full">Contact us</button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    )
}