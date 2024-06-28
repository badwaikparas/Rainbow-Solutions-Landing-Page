import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import img from '../assets/people.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../css/Slider.css';

function ReviewSlider(props) {
    return (
        <div style={{

        }}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                // navigation
                loop={true}
                showsPagination={false}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className='flex'
                style={{
                    height: '450px',
                }}
            >
                {props.data.map((item, index) => (
                    <SwiperSlide key={index} style={{
                        background: '#ffffff',
                        boxShadow: 'none',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                // maxWidth: '200px',
                                height: 'auto',
                                gap: '20px',
                                padding: '20px',
                                borderRadius: '25px',
                                background: '#efefef',
                                position: 'relative',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-25px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <img src={img} style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        border: '2px dashed black',
                                        background: 'white',
                                        padding: '5px',
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    }} alt="Profile" />
                                </div>
                                <div style={{ marginTop: '35px', textAlign: 'center' }}>
                                    <p>{item.review}</p>
                                    <h4 style={{ marginTop: '10px' }}>{item.by}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}

export default ReviewSlider;
