import ModeOfUse from "./ModeOfUse"

const ModeOfUseContainer = () => {
    return (
        <div className="bg-bgray1 grid grid-rows-2 gap-5">
            <ModeOfUse
                image="/images/apply/easy-apply.webp"
                imgDirection={'right'}
                content={{
                    section: "EASY APPLICATION",
                    title: "Oh so smooth.",
                    description: "The Liner features a soft gel formula that glides effortlessly and evenly onto skin. This means no more tugging or pulling on the delicate eye area."
                }}
            />
            <ModeOfUse
                image="/images/apply/apply2.webp"
                imgDirection={'left'}
                content={{
                    section: "WEAR IT UP TO 24 HOUR",
                    title: "Long-wearing formula.",
                    description: "Ever wish your eyeliner stayed on longer? Ours provide up to 24 hours of color, thanks to its long-wearing formula. The formula combats smudging and fading to ensure your line stays put all day without losing intensity."
                }}
            />
            <ModeOfUse
                image="/images/apply/pencils.webp"
                imgDirection={'right'}
                content={{
                    section: "GREAT ON SENSITIVE SKIN",
                    title: "Gentle and non-irritating.",
                    description: "Free from unwanted additives such as paraben and formaldehyde, this liner is designed and formulated to leave you with beautiful eyes without irritation."
                }}
            />
        </div>
    )
}

export default ModeOfUseContainer