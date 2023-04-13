import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import ChevronIcon from "../icons/chevronIcon.js";
import "swiper/css";
import resultInfo from "../../store/result.js";
import preloader from "../../assets/img/preloader__header.svg";
import { observer } from "mobx-react-lite";

const CarouselResult = (props) => {
  const info = new resultInfo();
  const [result, getResult] = useState();

  const loadInfo = async () => {
    await info.getHistogram(getResult, props.sum);
  };
  useEffect(() => {
    loadInfo();
  }, []);
  return (
    <div className="flex flex-col md:flex-row z-20 relative mx-auto mt-[27px] mb-[107px] items-center ">
      <div className="swiper-button-prev left-[-10px] top-2/3 md:top-1/2 ">
        <ChevronIcon />
      </div>
      <div className="bg-[#029491] rounded-t-[10px] md:rounded-r-[0] md:rounded-l-[10px] border-[#029491]  border-[1px] md:ml-[35px] relative z-30">
        <ul className="flex items-center text-base md:block text-white text-center w-[298px] md:w-[131px] py-[24px] px-[15px]  md:py-[20px] md:px-[27px]">
          <li>Период</li>
          <li className="md:my-[26px]  md:ml-0 mx-auto md:mr-0">Всего</li>
          <li>Риски</li>
        </ul>
      </div>
      {!result && (
        <div className="border-[#029491] rounded-r-[10px]  border-[1px] w-[85%] hidden md:block  ">
          <div className="flex flex-col justify-center items-center w-full  h-[158px]">
            <img className="spinner" src={preloader} alt="preloader" />
            <p>Загружаем данные </p>
          </div>
        </div>
      )}
      {result && (
        <div className="border-[#029491] rounded-r-[10px]  border-[1px] w-[85%] hidden md:block">
          <Swiper
            className=" swiper"
            slidesPerView={8}
            spaceBetween={0}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
          >
            {result.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center">
                  <ul className="text-center w-[131px] py-[17px] px-[27px]">
                    <li>{item.period}</li>
                    <li className="my-[26px]">{item.total}</li>
                    <li>{item.risks}</li>
                  </ul>
                  {result.length !== index + 1 && (
                    <hr className=" bg-[#949494] opacity-40 w-[2px] h-[124px]" />
                  )}
                </div>
              </SwiperSlide>
            ))}

            <style>
              {`
          .swiper-button-prev, .swiper-button-next {
            position: absolute;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            z-index: 1000;
            cursor: pointer;
            user-select:none;
          }
          .swiper {
            margin: 0!important;
          }
        `}
            </style>
          </Swiper>
        </div>
      )}
      {!result && (
        <div className="border-[#029491] rounded-b-[10px]  border-[1px] w-[298px] md:hidden block">
          <div className="flex justify-center items-center w-full h-[72px]">
            <img className="spinner" src={preloader} alt="preloader" />
          </div>
        </div>
      )}
      {result && (
        <div className="border-[#029491] rounded-b-[10px]  border-[1px] w-[298px] md:hidden block">
          <Swiper
            className=" swiper"
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
          >
            {result.map((item, index) => (
              <SwiperSlide key={index}>
                <ul className="flex text-center justify-between w-full md:w-[131px] py-[24px] px-[15px]">
                  <li>{item.period}</li>
                  <li className="w-[60px]">{item.total}</li>
                  <li className="w-[60px]">{item.risks}</li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="swiper-button-next right-[5px] top-2/3 md:top-1/2">
        <ChevronIcon side="right" />
      </div>
    </div>
  );
};

export default observer(CarouselResult);
