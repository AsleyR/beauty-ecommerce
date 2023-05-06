import ProfessionalReview from '../../../../json-data/ProfessionalReview.json' assert { type: "json" }
import ProfessionalReviewCards, { ProfessionalReviewCardProps } from "./ProfessionalReviewCards"

const cardInfo: any = JSON.parse(JSON.stringify(ProfessionalReview))

const ProfessionalReviewContainer = () => {
    return (
        <div className="flex flex-col gap-10 text-center text-graytext py-[5rem] px-mobilex lg:px-normalx">
            <h1 className="font-bold text-4xl">Trusted by the Pros</h1>
            <p className="text-xl font-light">See why makeup artists around the world are raving about us.</p>
            <ProfessionalReviewCards data={cardInfo} />
        </div>
    )
}

export default ProfessionalReviewContainer