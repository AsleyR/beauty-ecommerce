"use client"

import { useContext } from "react"
import { MobileSideMenuContext } from "./Navbar"
import { MobileSideMenuType } from "@/app/libs/context/MobileSideMenuContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import XMarkIcon from "../icons/XMarkIcon"
import Link from "next/link"
import UserIcon from "../icons/UserIcon"

const MobileNavSideMenuLink = ({ title, link }: { title: string, link?: string }) => {
    const { mobileSideMenu, setMobileSideMenu } = useContext(MobileSideMenuContext) as MobileSideMenuType

    if (!link) {
        link = "/"
    }

    return (
        <Link href={link} className="text-sm font-medium tracking-widest" onClick={() => setMobileSideMenu(false)}>
            {title}
        </Link>
    )
}

const MobileNavSideMenu = () => {
    const { mobileSideMenu, setMobileSideMenu } = useContext(MobileSideMenuContext) as MobileSideMenuType

    return (
        <>
            <div className={`
            absolute lg:hidden top-0 bottom-0 px-5
            ${mobileSideMenu ? "left-0" : "-left-[30rem]"} 
            w-[20rem] z-20 bg-white drop-shadow-md transition-all
            duration-[300ms]
            `}>
                <div className="sticky inset-y-0 py-5">
                    <div className="grid grid-cols-2 items-center align-middle">
                        <Link href={'/login'} onClick={() => setMobileSideMenu(false)}
                            className="flex gap-3 items-center align-middle hover:text-gray-400 duration-300">
                            <UserIcon className="" />
                            <h1 className="text-sm">LOG IN</h1>
                        </Link>
                        <button onClick={() => setMobileSideMenu(!mobileSideMenu)}
                            className="justify-self-end border-l border-gray-400 pl-5 h-full">
                            <XMarkIcon className={"text-3xl hover:text-gray-500 duration-300"} />
                        </button>
                    </div>
                    <div className="grid grid-cols-auto gap-6 my-8">
                        <MobileNavSideMenuLink title="SHOP" />
                        <MobileNavSideMenuLink title="OUR STORY" />
                        <MobileNavSideMenuLink title="REVIEWS" />
                        <MobileNavSideMenuLink title="REWARDS" />
                    </div>
                    <div className="grid grid-cols-auto gap-6 py-8 border-t">
                        <MobileNavSideMenuLink title="Shipping" />
                        <MobileNavSideMenuLink title="Return Policy" />
                        <MobileNavSideMenuLink title="FAQ" />
                        <MobileNavSideMenuLink title="Contact Us" />
                    </div>
                </div>
            </div>
            <div onClick={() => setMobileSideMenu(false)}
                className={`absolute lg:hidden inset-0 ${mobileSideMenu ? "block" : "hidden"} bg-black/40 z-10`}></div>
        </>
    )
}

export default MobileNavSideMenu