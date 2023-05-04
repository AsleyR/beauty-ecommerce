import Image from "next/image"

const BrandLogo = ({ image }: { image: string }) => {
    return (
        <Image className="w-full h-full"
            width={500} height={500} src={image} alt="brand-logo" />
    )
}

const Brands = () => {
    return (
        <section className="bg-bggray1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 aling-middle items-center justify-center gap-10 px-mobilex lg:px-normalx py-[1.5rem]">
            <BrandLogo image="/images/brands/refinery29.png" />
            <BrandLogo image="/images/brands/elle.png" />
            <BrandLogo image="/images/brands/marie-claire.png" />
            <BrandLogo image="/images/brands/fashion.png" />
            <BrandLogo image="/images/brands/huffpost.png" />
            <BrandLogo image="/images/brands/flare.webp" />
        </section>
    )
}

export default Brands