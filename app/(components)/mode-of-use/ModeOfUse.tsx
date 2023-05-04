import Image from "next/image"

interface ModeOfUseProps {
    image: string;
    content: {
        section: string;
        title: string;
        description: string;
    }
    imgDirection?: "left" | "right"
}

const ModeOfUse = ({ image, content, imgDirection }: ModeOfUseProps) => {
    if (!imgDirection) {
        imgDirection = "left"
    }

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 py-5 px-mobilex lg:px-normalx ${imgDirection === "left" ? "bg-inherit" : "bg-bggray1"}`}>
            <div className={`${imgDirection === "left" ? "order-last lg:order-first" : "order-last"}`}>
                <Image className="w-full h-full"
                    width={200} height={200} src={image} alt={`${content.section}-gif`} />
            </div>
            <div className="text-graytext flex flex-col gap-5 justify-center">
                <span className="font-bold text-sm tracking-[0.1rem]">
                    {content.section}
                </span>
                <h1 className="font-bold text-4xl tracking-wide">
                    {content.title}
                </h1>
                <p className="font-light text-xl tracking-wide">
                    {content.description}
                </p>
            </div>
        </div>
    )
}

export default ModeOfUse