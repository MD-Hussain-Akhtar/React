import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative mx-2 sm:mx-16 sm:py-16 rounded-lg overflow-hidden text-black">
                <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 sm:py-24 pt-10 pb-20 max-w-screen-xl">
                    <div className="space-y-8 mt-80 sm:mt-1 sm:ml-auto max-w-xl text-center sm:text-right">
                        <h2 className="font-bold text-4xl sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex items-center bg-orange-700 hover:opacity-75 px-6 py-3 rounded-lg font-medium text-white"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 sm:my-20 pt-12 sm:pt-1 w-full h-full">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="place-items-center grid sm:mt-20">
                <img className="w-48 sm:w-96" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="py-10 font-medium text-2xl sm:text-5xl text-center">Lorem Ipsum Yojo</h1>
        </div>
    )
}

export default Home