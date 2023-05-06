"use client"

import { MobileSideMenuType } from "@/app/(context)/MobileSideMenuContext"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { MobileSideMenuContext } from "./Navbar"
import SearchIcon from "../icons/SearchIcon"
import Link from "next/link"

const MobileNavLinks = () => {
    const { mobileSideMenu, setMobileSideMenu } = useContext(MobileSideMenuContext) as MobileSideMenuType

    return (
        <>
            <div className="flex gap-5 lg:hidden">
                <button onClick={() => setMobileSideMenu(!mobileSideMenu)}
                    className="flex hover:text-graytext">
                    <FontAwesomeIcon
                        className="w-[1.5rem] h-[1.5rem]"
                        icon={faBars} />
                </button>
                <Link href={'/'}
                    className="flex hover:text-graytext">
                    <SearchIcon className="" />
                </Link>
            </div>
        </>
    )
}

export default MobileNavLinks