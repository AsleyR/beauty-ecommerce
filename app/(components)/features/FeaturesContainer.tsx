import Feature from "./Feature"

const FeaturesContainer = () => {
    return (
        <div className="flex flex-col gap-12 px-mobilex md:px-normalx py-[3.5rem]">
            <div className="text-[#58595B]">
                <h1 className="font-bold text-3xl text-center">We created Esqido to be a new class of beauty.</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature
                    image="/images/features/price-percent.avif"
                    content={{
                        title: "FAIR PRICES",
                        description: "By selling directly to you from our factories, you get a high-end product at a great price."
                    }}
                />
                <Feature
                    image="/images/features/lab-bottle.webp"
                    content={{
                        title: "MADE WITH INTEGRITY",
                        description: "We didn't want to make anything we wouldn't put on our own skin, that's why our eyeliners are free of any parabens."
                    }}
                />
                <Feature
                    image="/images/features/prize.webp"
                    content={{
                        title: "HAPPINESS GUARANTEED",
                        description: "We give you a full 60 days to make sure you absolutely love your Esqido eyeliner, guaranteed."
                    }}
                />
            </div>
        </div>
    )
}

export default FeaturesContainer