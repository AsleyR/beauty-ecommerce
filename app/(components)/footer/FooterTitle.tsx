import { FoorterTitleComponentProps } from "@/app/(libs)/types/index.types"

const FooterTitle = ({ text, className }: FoorterTitleComponentProps) => {
    return (
        <h1 className={`font-medium text-black text-base tracking-wides ${className}`}>{text}</h1>
    )
}

export default FooterTitle