import { FooterLinkComponentProps } from "@/app/(libs)/types/index.types"
import Link from "next/link"

const FooterLink = ({ text, link }: FooterLinkComponentProps) => {
    if (!link) {
        link = "/"
    }

    return (
        <Link className="hover:text-beige transition-all duration-75"
            href={link}>{text}
        </Link>
    )
}

export default FooterLink