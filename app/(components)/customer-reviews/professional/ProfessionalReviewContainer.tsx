import ProfessionalReviewCards, { ProfessionalReviewCardProps } from "./ProfessionalReviewCards"

const cardInfo: ProfessionalReviewCardProps[] = [
    {
        image: "/images/pro-photos/saralaw.webp",
        name: "Sara Law",
        instagram: "@saralawmua",
        profession: "Pro Makeup Artist",
        message: "The product is very lovely. Glide on smoothly, very good working time, you can use a dome shape eyeliner brush to smudge it out to create a nice base for Smokey eyes or just made it softer; or if you use it directly, the color pay off is unreal. The pigment is true to color and it definitely delivers. It is long lasting and I dare say it is sweat proof."
    },
    {
        image: "/images/pro-photos/nicollete.webp",
        name: "Nicolette Afable",
        instagram: "@nicolettemua",
        profession: "Pro Makeup Artist",
        message: "I was so amazed at the staying power of the pencil eyeliner! I've tried it on myself and even products that claim to be waterproof tend to smudge on me at the end of the day, but not the Esqido Pencil Eyeliner. It stayed put for more than 12 hours! I've also tried it on my bridal clients and they've told me that they cried on their wedding day and there was no smudging or smearing at all!"
    },
    {
        image: "/images/pro-photos/joan.webp",
        name: "Joan Huang",
        instagram: "@aglowbyjoan",
        profession: "Pro Makeup Artist",
        message: "Love the liners! They are long lasting, smooth and easy to use, I love how they don't need to be sharpened and also the tip sharpener at the end! I highly recommend this to everyone, especially the girls with Asian eyes where most liners smudge on!"
    },
    {
        image: "/images/pro-photos/nattiventi.webp",
        name: "Natalie Ventola",
        instagram: "@nattiventi",
        profession: "Pro Makeup Artist",
        message: "The eyeliner glides on smooth! I thought the longevity was great! Even in the water line. I wish they were a tad more pigmented, but overall a fantastic product!"
    },
    {
        image: "/images/pro-photos/markjordy.webp",
        name: "Mark Jordy Gonzales",
        instagram: "@beautymmmark",
        profession: "Pro Makeup Artist",
        message: "I love how the product is smudge proof once dried on to the skin. And also extra soft when applied which is important for a creamy pencil for the water line."
    },
]

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