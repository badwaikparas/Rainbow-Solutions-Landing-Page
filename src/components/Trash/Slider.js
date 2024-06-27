import React from 'react'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.gif'
import img3 from '../assets/3.gif'
import '../css/Slider.css'

function Slider() {
    return (
        <section className='container'>
            <div className="slider-wrapper">
                <div className="slider">
                    <img id="slider-1" src={img1} alt="" />
                    <img id="slider-2" src={img2} alt="" />
                    <img id="slider-3" src={img3} alt="" />
                </div>
                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div>
            </div>
        </section>
    )
}

export default Slider