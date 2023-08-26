import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../images/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10 pt-5 cursor-pointer ">
                <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex px-5 items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className="text-2xl">
                                    <Image src={logo} alt="logo" width={40} height={40} />
                                </h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none
                                     focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <AiOutlineClose size={30} />
                                    ) : (
                                        <AiOutlineMenu
                                            className="focus:border-none active:border-none"
                                            size={30} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-accent  border-accent  md:hover:text-accent  
                                md:hover:bg-transparent">

                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-accent  border-accent  md:hover:text-accent  
                                md:hover:bg-transparent">

                                    <Link href="/about " onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center 
                                 border-b-2 md:border-b-0 
                                 hover:bg-accent  border-accent 
                                  md:hover:text-accent 
                                  md:hover:bg-transparent">
                                    <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 
                                md:border-b-0  hover:bg-accent   border-accent   md:hover:text-accent 
                                 md:hover:bg-transparent">
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 
                                 hover:bg-accent   border-accent  md:hover:text-accent  md:hover:bg-transparent">
                                    <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;