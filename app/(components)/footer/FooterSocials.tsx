import Link from "next/link"
import EmailIcon from "../icons/EmailIcon"
import FacebookIcon from "../icons/socials/FacebookIcon"
import InstagramIcon from "../icons/socials/InstagramIcon"
import PinterestIcon from "../icons/socials/PinterestIcon"
import TwitterIcon from "../icons/socials/TwitterIcon"
import { FooterSocialLinkComponentProps } from "@/app/(libs)/types/index.types"

const FooterSocialLink = ({ link, className, children }: FooterSocialLinkComponentProps) => {
    return (
        <Link href={link}
            className={`w-8 h-8 bg-black/80 rounded-full p-[0.4rem] hover:bg-beige transition-all duration-300 ${className || ""}`}
        >
            {children}
        </Link>
    )
}

const FooterSocials = () => {
    return (
        <div className="flex gap-2">
            <FooterSocialLink className="" link="/">
                <FacebookIcon className="hover:bg-beige transition-all duration-300" />
            </FooterSocialLink>
            <FooterSocialLink link="/">
                <TwitterIcon className="hover:bg-beige transition-all duration-300" />
            </FooterSocialLink>
            <FooterSocialLink link="/">
                <PinterestIcon className="hover:bg-beige transition-all duration-300" />
            </FooterSocialLink>
            <FooterSocialLink link="/">
                <InstagramIcon className="hover:bg-beige transition-all duration-300" />
            </FooterSocialLink>
            <FooterSocialLink link="/">
                <EmailIcon className="hover:bg-beige transition-all duration-300" />
            </FooterSocialLink>
        </div>
    )
}

export default FooterSocials
