"use client"

import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CustomerReview } from "@/app/libs/types/Review.types";
import HappyCustomerCard from "../customer-reviews/happy-customers/HappyCustomerCard";
import { NavigationOptions, SwiperModule } from "swiper/types";

interface CustomerReviewCarouselProps {
    reviews: CustomerReview[],
    slidesPerView?: number,
    navigation?: boolean
}

const CustomerReviewCarousel = ({ reviews, slidesPerView, navigation }: CustomerReviewCarouselProps) => {
    // const modulesProps: SwiperModule[] = navigation === true && navigation !== undefined ? [Pagination, Navigation] : [Pagination]
    console.log(navigation)
    const navigationProps: NavigationOptions = navigation ? { "enabled": true } : { "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev" }
    console.log(navigationProps)

    return (
        <Swiper
            slidesPerView={slidesPerView || 3}
            spaceBetween={20}
            navigation={navigationProps}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            autoplay={{
                "delay": 1000,
            }}
            modules={[Pagination, Navigation]}
            className=""
            loop={true}
        >
            {
                reviews.map((review) => {
                    return (
                        <SwiperSlide key={`${review.author}-review-slide`}>
                            <HappyCustomerCard key={`${review.author}-review-card`} review={review} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default CustomerReviewCarousel
