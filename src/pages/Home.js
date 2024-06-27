import React from 'react'
// import Slider from '../components/Slider'
import Slider from '../components/Slider'
import Section1 from '../components/HomeSections/Section1'

function Home() {
    const data = [
        {
            img: "https://picsum.photos/1920/1080?random"
        }, {
            img: "https://picsum.photos/1920/1080?random"
        }, {
            img: "https://picsum.photos/1920/1080?random"
        }, {
            img: "https://picsum.photos/1920/1080?random"
        }, {
            img: "https://picsum.photos/1920/1080?random"
        }
    ]

    return (
        <>
            {/* <div className='home' style={{ height: "100%" }}> */}
            {/* <Slider /> */}
            <Slider data={data} pages={1} />
            {/* </div> */}
            <Section1 />
        </>
    )
}

export default Home