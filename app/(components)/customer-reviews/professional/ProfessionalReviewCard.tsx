import Image from "next/image"
import { ProfessionalReviewCardProps } from "./ProfessionalReviewCards"

const ProfessionalReviewCard = ({ data }: { data: ProfessionalReviewCardProps }) => {
    return (
        <div className="border-[3px] px-[1.5rem] py-10 border-black hover:scale-105 cursor-pointer transition-all duration-[300ms]">
            <div className="flex gap-5 items-center align-middle">
                <div className="rounded-full h-[4rem] w-[4rem]">
                    <Image className="w-full h-full object-cover rounded-full"
                        width={400} height={400} src={data.image} alt={`${data.name}-photo`} />
                </div>
                <div className="grid grid-cols-auto text-left">
                    <h1 className="font-bold text-black">{data.name}</h1>
                    <h2 className="font-medium text-sm -mt-1">{data.instagram}</h2>
                    <h3 className="font-bold text-sm text-black mt-2">{data.profession}</h3>
                </div>
            </div>
            <div className="text-left font-light mt-5">
                <p>{data.message}</p>
            </div>
        </div>
    )
}

export default ProfessionalReviewCard