import React from 'react'
// import '../../css/HomeSections/Section1.css'
import phone from '../../assets/phone.jpeg'
import img from '../../assets/logo.png'
import logo1 from '../../assets/fourways2.png'
import logo2 from '../../assets/nativeChefs2.jpg'
import logo3 from '../../assets/parijatak2.jpg'
import logo4 from '../../assets/sathe.jpg'
import logo5 from '../../assets/indiaOpd.jpg'

import Slider from '../Slider'
import ReviewSlider from '../ReviewSlider'

function Section1() {
    const data1 = [
        {
            img: logo1
        },
        {
            img: logo2
        },
        {
            img: logo3
        },
        {
            img: logo4
        },
        {
            img: logo5,
        }
    ]

    const data2 = [
        {
            review: "Team members &amp; all management team working together for company growth, staff is very nice and supportive. Building good family culture in work place its help me to learn lot of new things and growing my knowledge every day.",
            by: "Paras"
        },
        {
            review: "I have worked with the PROBUZ team on a number of projects now and they are first class. Their communication is excellent, and their charges very reasonable. Excellent development skills.",
            by: "Trushant"
        },
        {
            review: "I am a client of Probuz Technologies Pvt. Ltd. and have taken web services from this company. I would like to recommend this service to my friends as they provide very quick support for any query. Happy with the services and product.",
            by: "Tavrez"
        },
        {
            review: "Team members &amp; all management team working together for company growth, staff is very nice and supportive. Building good family culture in work place its help me to learn lot of new things and growing my knowledge every day.",
            by: "Paras"
        },
        {
            review: "I have worked with the PROBUZ team on a number of projects now and they are first class. Their communication is excellent, and their charges very reasonable. Excellent development skills.",
            by: "Trushant"
        },
        {
            review: "I am a client of Probuz Technologies Pvt. Ltd. and have taken web services from this company. I would like to recommend this service to my friends as they provide very quick support for any query. Happy with the services and product.",
            by: "Tavrez"
        },

    ]
    return (
        <>
            <div className='section'>
                <div className='badge'>Services</div>
                <h3 className='heading'>What We Do</h3>
                <p className='subHeading'>Best Professional Website Design Software Development Company</p>
                <p className='subHeading'>The fastest way to grow your business with the leader in <b>Technology</b> </p>
                <p className='subHeading'>Check out our <a href='www.'>products</a> </p>
            </div >


            {/* mobile section */}

            <div className='phoneSection'>
                <div className='cards'>
                    <div className='card1'>
                        <div>
                            <h3 className='desc-heading'>Web Design</h3>
                            <p className='desc'>
                                We are website designing and Development Company. We are more familiar
                                with website design and development etc. So we are expert in advance
                                Website Designing along with graphics.
                            </p>
                        </div>
                        <div>
                            {/* <a href="#"> */}
                            <img
                                src={img}
                                alt=''
                            />
                            {/* </a> */}
                        </div>
                    </div>
                    <div className='card1'>
                        <div>
                            <h3 className='desc-heading'>Cloud Telephony</h3>
                            <p className='desc'>
                                Unleash Your Business Potential With Best Cloud Telephony Services At
                                Zero Setup Cost. Move Your Business On The Cloud With Live Call
                                Tracking, Number Masking And SMS Alerts. Call Forwarding. Agent
                                Scheduling. Call Routing. SMS Alert.
                            </p>
                        </div>
                        <div>
                            {/* <a href="#"> */}
                            <img
                                src={img}
                                alt=''
                            />
                            {/* </a> */}
                        </div>
                    </div>
                </div>
                <img className="phone" src={phone} alt="phone.jpg" style={{}} />
                <div className='cards'>
                    <div className='card1'>
                        <div>
                            {/* <a href="#"> */}
                            <img
                                src={img}
                                alt=''
                            />
                            {/* </a> */}
                        </div>
                        <div>
                            <h3 className='desc-heading'>Cloud Telephony</h3>
                            <p className='desc'>
                                Unleash Your Business Potential With Best Cloud Telephony Services At
                                Zero Setup Cost. Move Your Business On The Cloud With Live Call
                                Tracking, Number Masking And SMS Alerts. Call Forwarding. Agent
                                Scheduling. Call Routing. SMS Alert.
                            </p>
                        </div>
                    </div>
                    <div className='card1'>
                        <div>
                            {/* <a href="#"> */}
                            <img
                                src={img}
                                alt=''
                            />
                            {/* </a> */}
                        </div>
                        <div>
                            <h3 className='desc-heading'>Cloud Telephony</h3>
                            <p className='desc'>
                                Unleash Your Business Potential With Best Cloud Telephony Services At
                                Zero Setup Cost. Move Your Business On The Cloud With Live Call
                                Tracking, Number Masking And SMS Alerts. Call Forwarding. Agent
                                Scheduling. Call Routing. SMS Alert.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='section' style={{ alignItems: 'flex-start' }}>
                <div className="badge">Who We Are</div>
                <h2 className='heading'>We Run All Kinds Of IT Services.</h2>
                <p className='subHeading' style={{ lineHeight: '25px' }}>At Probuz Technologies Pvt.Ltd. we believe that customers should always get easy-to-use, best in the kind and fast services. Probuz Technologies Pvt.Ltd. has achieved standards which helps customer to achieve satisfaction and realize value for their hard earned money.</p>
                <a href="www.">Read More</a>
            </div>


            <div className='section' style={{ alignItems: 'flex-end' }}>
                <div class="badge">Our Best Plans</div>
                <h3 className='heading'>Choose Your Best Plan.</h3>
                <p className='subHeading' style={{ textAlign: 'right', lineHeight: '25px' }}>Our clients know they can trust us. Not only do we have the experience and expertise to deliver exactly what our clients are looking for, but we work with the purpose of expanding your business.</p>
            </div>


            <div className='section' style={{ alignItems: 'flex-start' }}>
                <h3 className='heading'>Get your free Quote today</h3>
                <p className='subHeading' style={{ lineHeight: '25px' }}>PROBUZ TECHNOLOGIES PVT. LTD has been helping organizations throughout the World to manage their IT with our unique approach to technology management and consultancy solutions. Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.

                    As one of the world's largest ITService Providers, our deep pool of certified engineers and IT staff are ready to help you to keep your IT business safe &amp; ensure high availability. </p>
            </div>

            <div className='section' style={{ margin: 0 }}>
                <div className="badge">Testimonials</div>
                <h3 className='heading'>What Clients Say</h3>
            </div>
            <ReviewSlider data={data2} />

            <div className='section'>
                <div className="badge">Customers</div>
                <h3 className='heading'>Our Happy Customers</h3>
            </div>
            <div style={{ marginBottom: "65px" }}>
                <Slider data={data1} pages={3} spaceBetween={10} style />
            </div>
        </>
    )
}

export default Section1