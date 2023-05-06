import Link from "next/link"
import EmailForm from "./FooterEmailForm"
import AmericanExpressIcon from "../icons/payment/AmericanExpress"
import ApplePayIcon from "../icons/payment/ApplePayIcon"
import DinerClubIcon from "../icons/payment/DinerClubIcon"
import DiscoverIcon from "../icons/payment/DiscoverIcon"
import GooglePayIcon from "../icons/payment/GooglePayIcon"
import MasterCardIcon from "../icons/payment/MasterCardIcon"
import PayPalIcon from "../icons/payment/PayPalIcon"
import ShopPayIcon from "../icons/payment/ShopPayIcon"
import VisaIcon from "../icons/payment/VisaIcon"
import FooterSocials from "./FooterSocials"
import FooterLink from "./FooterLink"
import FooterTitle from "./FooterTitle"

const Footer = () => {
    return (
        <footer className="flex flex-col gap-[6rem] px-[2.5rem] pt-[3rem] pb-[1rem] bg-[#F2F2F2] text-graytext">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div className="flex flex-col gap-2 text-sm lg:text-base tracking-wide font-light">
                    <h1 className="font-medium text-black text-base tracking-widest">ABOUT ESQUIDO</h1>
                    <p>
                        {/* This is because lint is telling me that the character ' can be escaped or something */}
                        {`Esqido is a direct to consumer beauty brand, offering performance cosmetics that's made with integrity`}
                    </p>
                    <p>Questions? <span className="underline hover:text-beige transition-all cursor-pointer">support@esqido.com</span></p>
                </div>
                <div className="flex flex-col gap-2">
                    <FooterTitle text="SHOP" className="" />
                    <div className="flex flex-col gap-1 tracking-wide font-light">
                        <FooterLink text="Smudge Free Eyeliner" />
                        <FooterLink text="Companion Lash Glue" />
                        <FooterLink text="False Eyelashes" />
                        <FooterLink text="Accessories" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <FooterTitle text="HELP" className="" />
                    <div className="flex flex-col gap-1 tracking-wide font-light">
                        <FooterLink text="Shipping" />
                        <FooterLink text="Return Policy" />
                        <FooterLink text="FAQ" />
                        <FooterLink text="Contact Us" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <FooterTitle text="FOLLOW US" />
                    <FooterSocials />
                </div>
                <div className="flex flex-col gap-2">
                    <FooterTitle text="STAY IN THE LOOP" />
                    <div className="flex flex-col text-base tracking-wide font-light">
                        <p>Be the first to know about special offers and new products</p>
                    </div>
                    <div className="flex flex-col mt-3">
                        <EmailForm />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 text-sm font-light">
                <div className="">
                    <p className="">Copyright © 2023 ESQIDO.</p>
                    <ul className="flex gap-4">
                        <Link className="hover:text-beige duration-150"
                            href={'/'}>Terms of Service</Link>
                        <Link className="hover:text-beige duration-150"
                            href={'/'}>Privacy Policy</Link>
                    </ul>
                </div>
                <div className="order-first lg:order-last">
                    <div className="flex gap-2 justify-start lg:justify-end">
                        <AmericanExpressIcon />
                        <ApplePayIcon />
                        <DinerClubIcon />
                        <DiscoverIcon />
                        <GooglePayIcon />
                        <MasterCardIcon />
                        <PayPalIcon />
                        <ShopPayIcon />
                        <VisaIcon />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer