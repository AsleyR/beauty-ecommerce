import { CustomerReview } from "@/app/libs/types/Review.types"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ReviewStars = ({ ammount }: { ammount: number }) => {
    if (ammount >= 5) {
        ammount = 5
    }

    const jsxArray = []
    for (let i: number = 0; i < 5; i++) {
        jsxArray.push(
            <FontAwesomeIcon
                className="text-[#C2A284]"
                icon={faStar}
            />
        )
    }

    return (
        <div className="flex w-min mx-auto">
            {
                jsxArray.map((star) => star)
            }
        </div>
    )
}

const HappyCustomerCard = ({ review }: { review: CustomerReview }) => {
    return (
        <div className="h-[20rem] py-[3rem] text-base relative">
            <div className="flex flex-col align-middle items-center">
                <ReviewStars ammount={review.rating} />
                <h1 className="font-bold py-1">{review.title}</h1>
            </div>
            <div className="h-min flex justify-center text-center">
                <p className="line-clamp-6 text-ellipsis font-light">{review.description}</p>
            </div>
            <p className="absolute bottom-[2rem] inset-x-0 text-gray-400 font-light">{review.author}</p>
        </div>
    )
}

export default HappyCustomerCard
