import Image from "next/image";
import Brands from "./(components)/Brands";
import FeaturesContainer from "./(components)/features/FeaturesContainer";
import ModeOfUseContainer from "./(components)/mode-of-use/ModeOfUseContainer";
import ComparisonTableContainer from "./(components)/comparison-table/ComparisonTableContainer";
import BottomCallToAction from "./(components)/BottomCallToAction";
import Footer from "./(components)/footer/Footer";
import ProfessionalReviewContainer from "./(components)/customer-reviews/professional/ProfessionalReviewContainer";
import HappyConstumersContainer from "./(components)/customer-reviews/happy-customers/HappyCustomersContainer";

const HeroImage = () => {
  return (
    <div className="h-full">
      <Image
        className="hidden md:block w-full h-full"
        width={1000} height={1000}
        src={'/images/hero-bg.webp'} alt="" />
      <Image
        className="block md:hidden w-full h-full"
        width={500} height={500}
        src={'/images/hero-bg-mobile.webp'} alt="" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="">
      <HeroImage />
      <Brands />
      <FeaturesContainer />
      <ModeOfUseContainer />
      <ComparisonTableContainer />
      <ProfessionalReviewContainer />
      <HappyConstumersContainer />
      <BottomCallToAction />
      <Footer />
    </main>
  )
}
