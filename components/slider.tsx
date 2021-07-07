import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-7 lg:my-16">
      <Swiper
        breakpoints={{
          // window width >= 1000
          850: {
            slidesPerView: 3,
          },
          // window width >= 450
          450: {
            slidesPerView: 2,
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
