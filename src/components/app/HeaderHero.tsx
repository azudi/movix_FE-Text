import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiLogOutCircle, BiSearch } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import { AiFillPlayCircle } from "react-icons/ai";
import { IMAGE_BASE_URL } from "config";
import MenuIcon from "assets/images/svg/MenuIcon";
import useLogOut from "services/app-hook/useLogOut";
import { useInfoGetter } from "services/app-hook/getters/userInfoGetter";
import Logo from "assets/images/svg/Logo";




interface Props {
  movieData: Array<any>;
}

const HeaderHero: React.FC<Props> = (props: Props) => {
  const { movieData } = props;
  const { logout } = useLogOut()
  const { user } = useInfoGetter()

 const [topNavDp, setTopNavDP] = useState(false);
 

 useEffect(()=>{
     const doc = document.querySelectorAll(".headerSwiper>.swiper-pagination-vertical>span")
     Array.from(doc).forEach((element, index) => {
        element.innerHTML = (index + 1) as unknown as string
     });
 }, [movieData])

  return (
    <div className="w-full dm-san">
      <div className="absolute top-0 left-0 z-10 w-full flex items-center justify-center pt-5">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="md:w-4/12 w-5/12">
          <div className="flex items-center border-[1px] border-white py-1 rounded-lg">
            <input
              placeholder="What do you want to watch?"
              className="search-input"
            />
            <BiSearch color="white" className="mx-2" />
          </div>
        </div>
        <div className="w-3/12  md:w-3/12 flex justify-end items-center">
          <span className="text-white mr-2 font-[500] capitalize hidden sm:inline-block">
            { user?.displayName }</span>
          <span className="relative outline-none cursor-pointer">
            <i onClick={() => setTopNavDP(!topNavDp)}>
              <MenuIcon />
            </i>
            {topNavDp ? (
              <div className="absolute bg-white w-auto right-[calc(100%-36px)] top-[calc(100%+10px)] rounded-md">
                <button
                  onClick={()=>logout()}
                  contentEditable={false}
                  className="text-sm whitespace-nowrap px-2 py-2 pr-4 flex items-center hover:bg-gray-200"
                >
                  <BiLogOutCircle color="red" className="mr-2" />
                  Log out
                </button>
              </div>
            ) : null}
          </span>
        </div>
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="headerSwiper h-[100vh] w-full"
      >
        {movieData.slice(0, 10).map((item, index) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
                  IMAGE_BASE_URL + item.poster_path
                })`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex items-center h-full flex-wrap justify-center w-full text-white">
                <div className="sm:w-9/12 md:w-7/12 lg:w-6/12 w-11/12">
                  <h2 className="font-bold md:text-[40px] text-[35px]">
                    {item?.original_title || item?.original_name}
                  </h2>
                  <article className="py-3">{item?.overview}</article>
                  <div className="flex items-center mr-1">
                    <div className="flex items-center text-[13px] py-1">
                    <img src={require('../../assets/images/svg/imbdLogo.svg').default} className="mr-2"/> {" "}
                      {item?.vote_average} / 10
                    </div>
                    <span className="inline-flex items-center text-[12px] ml-12">
                    <img src={require('../../assets/images/svg/appleIcon.svg').default} className="mr-1"/>{" "}
                      {item?.vote_count}
                    </span>
                  </div>

                  <button className=" px-4 py-2 bg-red-600 my-4 text-white flex items-center text-[13px] rounded">
                    <AiFillPlayCircle className="mr-2" />
                    Watch trailer
                  </button>
                </div>
                <div className="w-5/12 sm:w-1/12 md:w-3/12 lg:w-5/1"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeaderHero;
