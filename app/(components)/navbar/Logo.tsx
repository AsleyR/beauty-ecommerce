import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link className="flex w-auto h-auto" href={'/'}>
            <Image
                className="h-full w-full"
                width={800}
                height={800}
                src={'/images/esq-logo.webp'}
                alt="Esq Logo" />
        </Link>
    )
}

export default Logo