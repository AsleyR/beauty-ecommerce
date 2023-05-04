"use client"

import SearchIcon from "../icons/SearchIcon"
import UserIcon from "../icons/UserIcon"
import CartIcon from "../icons/CartIcon"
import Logo from "./Logo"
import MobileNavLinks from "./MobileNavLinks"
import { createContext, useState } from "react"
import { MobileSideMenu, MobileSideMenuType } from "../../libs/context/MobileSideMenuContext"
import MobileNavSideMenu from "./MobileNavSideMenu"
import Link from "next/link"

const NavLinks = () => {
    return (
        <ul className="hidden lg:flex w-full justify-center text-center font-base text-sm gap-8 tracking-widest">
            <li className="hover:text-beige cursor-pointer">
                SHOP
            </li>
            <li className="hover:text-beige cursor-pointer">
                OUR STORY
            </li>
            <li className="hover:text-beige cursor-pointer">
                REVIEWS
            </li>
            <li className="hover:text-beige cursor-pointer">
                REWARDS
            </li>
        </ul>
    )
}

export const MobileSideMenuContext = createContext<MobileSideMenuType | null>(null)

const Navbar = () => {
    const [mobileSideMenu, setMobileSideMenu] = useState<MobileSideMenu['mobileSideMenu']>(false)



    return (
        <MobileSideMenuContext.Provider value={{ mobileSideMenu, setMobileSideMenu }}>
            <nav className="sticky top-0 z-10 bg-white drop-shadow-lg">
                <div className="grid grid-cols-3 lg:grid-cols-3 align-middle items-center px-2 lg:px-[40px] py-5">
                    <div className="order-2 lg:order-first flex justify-center lg:justify-start">
                        <Logo />
                    </div>
                    <MobileNavLinks />
                    <NavLinks />
                    <div className="order-last lg:order-none justify-self-end flex items-center align-middle gap-5">
                        <SearchIcon className="hidden lg:block hover:cursor-pointer hover:text-gray-500" />
                        <Link href={'/login'}>
                            <UserIcon className="hidden lg:block hover:cursor-pointer hover:text-gray-500" />
                        </Link>
                        <CartIcon className="hover:cursor-pointer hover:text-gray-500" />
                    </div>
                </div>
            </nav>
            <MobileNavSideMenu />
        </MobileSideMenuContext.Provider>
    )
}

export default Navbar