import Image from "next/image"
import CallToActionBtn from "./CallToActionBtn"

const BottomCallToAction = () => {
    return (
        <div className="bg-[#D9DFD3] w-full flex flex-col gap-10 text-center text-graytext pt-[5rem] px-[1.5rem] lg:px-normalx">
            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-4xl">Get the smooth and precise look, all day long.</h1>
                <div className="">
                    <CallToActionBtn />
                </div>
            </div>
            <div className="">
                <Image className="w-full h-full"
                    width={1000} height={1000} src={'/images/women.webp'} alt="women-photo" />
            </div>
        </div>
    )
}

export default BottomCallToAction