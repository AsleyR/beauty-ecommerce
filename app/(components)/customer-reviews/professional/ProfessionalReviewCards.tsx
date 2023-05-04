import ProfessionalReviewCard from "./ProfessionalReviewCard";


export interface ProfessionalReviewCardProps {
    image: string;
    name: string;
    instagram: string;
    profession: string;
    message: string;
}

const ProfessionalReviewCards = ({ data }: { data: ProfessionalReviewCardProps[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((card) => {
                return <ProfessionalReviewCard key={`${card.name}-review-card`} data={card} />
            })}
        </div>
    )
}

export default ProfessionalReviewCards