import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-20 p-4 fixed z-[100] font-neue">
      <div className="flex items-center justify-between w-full h-full px-2 text-2xl">
        <span className="ml-20">@Nelson</span>
        <div>
            <ul className="hidden md:flex">
                <Link href="/">
                    <li className="ml-10 text-2xl uppercase hover:border-t hover:border-[#FF5733] cursor-pointer">
                        Home
                    </li>
                </Link>

                <Link href="/about">
                    <li className="ml-10 text-2xl uppercase hover:border-b hover:border-[#FF5733] cursor-pointer">
                        About
                    </li>
                </Link>

                <Link href="/skill">
                    <li className="ml-10 text-2xl uppercase hover:border-t hover:border-[#FF5733] cursor-pointer">
                        Skill
                    </li>
                </Link>

                <Link href="/project">
                    <li className="ml-10 text-2xl uppercase hover:border-b hover:border-[#FF5733] cursor-pointer">
                        Projects
                    </li>
                </Link>

                <Link href="/contact">
                    <li className="ml-10 text-2xl uppercase hover:border-t hover:border-[#FF5733] cursor-pointer">
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
