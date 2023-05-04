import CallToActionBtn from "../CallToActionBtn"
import ComparisonTable from "./ComparisonTable"

const ComparisonTableContainer = () => {
    return (
        <section className="flex flex-col gap-10 text-center text-graytext px-mobilex lg:px-normalx py-[5rem]">
            <div className="">
                <h1 className="font-bold text-4xl">
                    Get more with the Esqido Liner
                </h1>
            </div>
            <div className="">
                <h2 className="text-xl font-light">
                    Fair prices, made with integrity, happiness guaranteed.
                </h2>
            </div>
            <ComparisonTable />
            <div className="flex justify-center">
                <CallToActionBtn />
            </div>
        </section>
    )
}

export default ComparisonTableContainer