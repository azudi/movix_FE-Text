import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { ReactComponent as Applelogo } from "../../assets/images/svg/appleIcon.svg";
import { ReactComponent as IMDBLogo } from "../../assets/images/svg/imbdLogo.svg";
import {SlArrowRight} from "react-icons/sl"



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "config";

interface Props {
  header: string;
  extractedTopRatedData: Array<any>;
}

const CastHero: React.FC<Props> = (props: Props) => {
  const { header, extractedTopRatedData } = props;

  return (
    <div className="mb-16">
      <div className="flex items-center px-3 md:px-5">
        <h2 className="flex py-4 text-[20px] w-full font-semibold">
          {header}
        </h2>
        <button className="see-more-button">See more <SlArrowRight color="red" size={12} className="ml-1"/></button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        //@ts-ignore
        spaceBetween={20}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {(extractedTopRatedData || []).map((item, index) => {
          return (
            <SwiperSlide key={item.id} className="px-3 md:px-5">
              <div className="dm-san">
                <img
                  src={`${IMAGE_BASE_URL+item.profile_path}`}
                  className="w-full object-cover rounded-lg"
                ></img>

                <title className="block w-full text-[14px] font-[600] mt-1">
                  {item?.name || item?.original_name}
                </title>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CastHero;
