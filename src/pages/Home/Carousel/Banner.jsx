import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";


export default function Banner () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/k6z85Px9/cyber-monday-event-sale-elements.jpg"
            text="Discover the Future of Shopping: Where Quality Meets Convenience!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/Jj5t0sHY/top-view-desk-with-black-friday-gifts.jpg"
            text="Shop Smarter, Not Harder: Explore the Best Deals Today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/Q7w2c2RM/small-grocery-cart-with-gift-boxes-laptop.jpg"
            text="Unlock Exclusive Offers: Your One-Stop Shopping Destination!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/VWY3Ywgg/smiling-fashionable-woman-sitting-home-with-shopping-bags-laptop-smartphone.jpg"
            text="Experience Shopping Like Never Before: Affordable, Convenient, Fast!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/g1jvLQK/front-view-woman-with-shopping-bags-ordering-items-sale-using-tablet.jpg"
            text="Empowering Your Shopping Journey: Quality Products, Unbeatable Prices!"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

