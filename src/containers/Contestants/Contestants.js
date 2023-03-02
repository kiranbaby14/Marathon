import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Contestants.css"
import Team from '../../components/Team/Team';

const Teams = () => {
    return (
        <>
            <div id="contestants">
                <h3 id='contestants_heading'>Contestants</h3>
                <h1 ></h1>
                <Swiper className='swiper_container'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide className='swiper_slide'><Team teamName="St Andrews" /></SwiperSlide>
                    <SwiperSlide className='swiper_slide'><Team teamName="Cambridge" /></SwiperSlide>
                    <SwiperSlide className='swiper_slide'><Team teamName="Oxbridge" /></SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Teams