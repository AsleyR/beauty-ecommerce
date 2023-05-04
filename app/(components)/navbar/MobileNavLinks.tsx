"use client"

import { MobileSideMenuType } from "@/app/(libs)/context/MobileSideMenuContext"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { MobileSideMenuContext } from "./Navbar"

const MobileNavLinks = () => {
    const { mobileSideMenu, setMobileSideMenu } = useContext(MobileSideMenuContext) as MobileSideMenuType

    return (
        <>
            <div className="flex lg:hidden">
                <button onClick={() => setMobileSideMenu(!mobileSideMenu)}
                    className="flex hover:text-graytext">
                    <FontAwesomeIcon
                        className="w-[1.5rem] h-[1.5rem]"
                        icon={faBars} />
                </button>
            </div>
        </>
    )
}

export default MobileNavLinks