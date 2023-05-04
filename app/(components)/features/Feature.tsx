import Image from "next/image"

const Feature = ({ image, content }: { image: string, content: { title: string, description: string } }) => {
    return (
        <div className="flex flex-col gap-5 text-center">
            <div className="flex justify-center">
                <Image className="w-[3rem] h-[3rem]"
                    width={400} height={400} src={image} alt={`${content.title}-icon`} />
            </div>
            <h1 className="font-bold text-[#58595B]">
                {content.title}
            </h1>
            <p className="font-light text-[#575757] text-base">
                {content.description}
            </p>
        </div>
    )
}

export default Feature