import React from 'react'
import { useState } from 'react';
import svg from '../../../public/magnifying-glass-10-svgrepo-com.svg'
import Image from "next/image"
import logo from '../icon.ico'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false)

    const searchOpen = () => {
        if (searchActive == false) {
            setSearchActive(true)
        } else {
            setSearchActive(false)
        }
    }
    return (
        <div className="relative w-full">
            {/* Top fixed header */}
            <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 background w-full headerBorder">
                <Image src={logo} width={30} height={30} alt="logo" />

                {/* Search Icon and Input centered at the top */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                    <Image
                        onClick={searchOpen}
                        className="cursor-pointer"
                        src={svg}
                        alt="Search Icon"
                        width={20}
                        height={20}
                    />
                    {/* Toggle search input when the icon is clicked */}
                    {searchActive && (
                        <form className="ml-2">
                            <input
                                className="rounded primaryBorder searchInput"
                                type="text"
                                name="search"
                                placeholder="Search..."
                            />
                        </form>
                    )}
                </div>

                <div
                    className={`hamburger md:hidden cursor-pointer transform transition-transform duration-300 ${isOpen && 'rotate-90'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="burger burger1"></div>
                    <div className="burger burger2"></div>
                    <div className="burger burger3"></div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-14 left-0 right-0 bg-transparent backdrop-blur-md">
                    <ul className="flex flex-col items-center text-white space-y-20 mt-4">
                        <li>Feed</li>
                        <li>Profile</li>
                        <li>News</li>
                        <li>Friends</li>
                    </ul>
                </div>
            )}

            {/* Full Menu for desktop */}
            <div className="hidden md:flex gap-8 justify-center mt-16">
                {/* Full Menu Links */}
                <ul className="flex space-x-4 cursor-pointer">
                    <li>Feed</li>
                    <li>Profile</li>
                    <li>News</li>
                    <li>Friends</li>
                </ul>
            </div>
        </div>



    )
}

export default Header