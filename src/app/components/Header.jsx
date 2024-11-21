import React from 'react'
import { useState } from 'react';
import svg from '../../../public/magnifying-glass-10-svgrepo-com.svg'
import Image from "next/image"

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
        <div className="flex justify-between items-center p-4 fixed background w-full headerBorder">
            <div className="text-lg font-bold">How's it gonna be?</div>
            <div
                className={`hamburger md:hidden cursor-pointer transform transition-transform duration-300 ${isOpen && 'rotate-90'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div>
                    <div>
                        <Image onClick={searchOpen} className='mobileSearch' src={svg} alt="My SVG Image"
                            width="20"
                            height="20" />
                        <form>
                            <input className={`rounded primaryBorder searchInput  ${searchActive ? 'flex' : 'hidden'}`} type='text' name="search" />
                        </form>
                    </div>
                    <ul className="flex flex-col items-center bg-transparent backdrop-blur-md text-white space-y-10 absolute top-14 left-0 w-full p-2">
                        <li>Feed</li>
                        <li>Profile</li>
                        <li>News</li>
                        <li>Friends</li>
                    </ul>
                </div>

            )}
            {/* Full Menu */}
            <div className='hidden gap-8  md:flex'>
                <Image onClick={searchOpen} className='search' src={svg} alt="My SVG Image"
                    width="20"
                    height="20" />
                <form>
                    <input className={`rounded primaryBorder searchInput  ${searchActive ? 'flex' : 'hidden'}`} type='text' name="search" />
                </form>
                <ul className="hidden md:flex space-x-4 ">
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