import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="top-0 z-50 sticky shadow">
            <nav className="bg-white px-4 lg:px-6 py-2.5 border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="hover:bg-gray-50 mr-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-gray-800 text-sm"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="bg-orange-700 hover:bg-orange-800 mr-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium text-white text-sm"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden lg:flex justify-between items-center lg:order-1 w-full lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="flex lg:flex-row flex-col lg:space-x-8 mt-4 lg:mt-0 font-medium">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}