import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { ReactComponent as Applelogo } from "../../assets/images/svg/appleIcon.svg";
import { ReactComponent as IMDBLogo } from "../../assets/images/svg/imbdLogo.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IMAGE_BASE_URL } from "config";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";

interface Props {
  header: string;
  extractedTopRatedData: Array<any>;
}

const VideoHero: React.FC<Props> = (props: Props) => {
  const { header, extractedTopRatedData } = props;

  return (
    <div className="mb-16">
      <div className="flex items-center px-3 md:px-5">
        <h2 className="flex py-4 text-[20px] w-full font-semibold">{header}</h2>
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
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {(extractedTopRatedData || []).map((item, index) => {
          return (
            <SwiperSlide key={item.id} className="px-3 md:px-5">
              <div className="dm-san relative overflow-hidden">
                <img
                  src={`${IMAGE_BASE_URL + item?.poster_path}`}
                  className="w-full object-cover rounded-lg"
                ></img>
                <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-black/20">
                  <button
                    className="play-button"
                    style={{ translate: "-50% -50%" }}
                  >
                    <AiOutlinePlayCircle size={35} />
                  </button>
                </div>
              </div>
              <title className="block w-full text-[14px] font-[600] mt-1">
               { item?.original_title}
              </title>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoHero;
