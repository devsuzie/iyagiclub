import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  return (
    <div className="justify-content flex mx-auto my-10 lg:my-16">
      <Swiper
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        style={{ padding: "0 24px" }}
      >
        <SwiperSlide>
          <img src="/assets/card/card_1.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/card/card_2.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/card/card_3.svg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
