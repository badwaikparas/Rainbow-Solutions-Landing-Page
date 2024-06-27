import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../css/Slider.css'

function Slider(props) {
    return (
        <div style={{ height: "calc(100% - 132px)", margin: "0 0 30px" }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={props.spaceBetween}
                slidesPerView={props.pages}
                // navigation
                loop={true}
                // pagination={{ clickable: false }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2500,
                    disableOnIteraction: false,
                }}
            >
                {props.data.map((item, index) => (
                    <SwiperSlide key={index} style={{ boxShadow: 'none' }}>
                        <div className="slide-content" style={{}}>
                            <img src={item.img} alt={`slide-${index}`} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div >
    );
};

export default Slider;
