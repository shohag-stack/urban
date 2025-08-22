import Image from "next/image"
import Link from "next/link";


export default function Navbar() {
    const logo = "/images/Urban.svg";
    return (
        <div className="container bg-gray-100/50 mx-auto top-5 left-0 right-0 z-40 backdrop-blur-md rounded-full fixed">
            <header>
                <nav className="w-full py-4 px-7">
                    <div className="grid grid-cols-3 gap-5 items-center">
                        <div>
                            <Link href={`/`} ><Image src={logo} width={80} height={70} alt="urbanLogo" /></Link>
                        </div>
                        <div className="text-center">
                            <ul className="flex justify-center space-x-8">
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/listings"}>Listings</Link>
                                </li>
                                <li>
                                    <Link href={"/about"}>About us</Link>
                                </li>
                                <li>
                                    <Link href={"/blog"}>Blog</Link>
                                </li>
                                <li>
                                    <Link href={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <button className="btn-secondary">Contact us</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}