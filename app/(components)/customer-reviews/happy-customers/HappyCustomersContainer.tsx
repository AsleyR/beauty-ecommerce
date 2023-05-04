import HappyCustomer from '../../../HappyCustomer.json' assert { type: "json" }
import CustomerReviewCarousel from "../../carousel/CustomerReviewCarousel"

// Import reviews - TODO: upload data to a db.
const reviews = JSON.parse(JSON.stringify(HappyCustomer))

const HappyConstumersContainer = () => {
    return (
        <div className="bg-[#FBFAFF] w-full flex flex-col gap-10 text-center text-graytext py-[5rem] px-mobilex lg:px-normalx">
            <h1 className="font-bold text-4xl">Thousands of happy customers</h1>
            <p className="text-xl font-light">Over 250,000+ happy customers!</p>
            <div className=" hidden lg:flex">
                <CustomerReviewCarousel
                    reviews={reviews}
                    slidesPerView={3}
                    navigation={true}
                />
            </div>
            <div className="block lg:hidden">
                <CustomerReviewCarousel
                    reviews={reviews}
                    slidesPerView={1}
                    navigation={false}
                />
            </div>
        </div>
    )
}

export default HappyConstumersContainer