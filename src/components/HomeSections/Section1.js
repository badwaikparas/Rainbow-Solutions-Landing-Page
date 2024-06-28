import React from 'react'
// import '../../css/HomeSections/Section1.css'
import phone from '../../assets/iPhone.png'
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
            img: logo5
        }
    ]

    const data2 = [
        {
            review: "Rainbow Services have transformed our IT landscape. Their robust platform and seamless integrations have elevated our operations to a whole new level. The team's dedication to our success is evident in the outstanding support and regular updates.",
            by: "Shantanu Mithal"
        },
        {
            review: "Choosing Rainbow Services was one of the best decisions we made for our financial operations. Their tailored solutions saved us both time and money, allowing us to focus on growing our business. The ROI from their software is simply outstanding.",
            by: "Kunal Manjrekar"
        },
        {
            review: "The marketing tools provided by Rainbow Services have given our campaigns apowerful edge. Their intuitive interface and data-driven insights have allowed us totarget our audience more effectively. The increase in conversions speaks volumesabout the quality of their products.",
            by: "Arnab Das"
        },
        {
            review: "Working with Rainbow Serviceshas been a game-changer for our organization.Their innovative solutions streamlined our processes and significantly improved ourbottom line. The team's expertise and responsiveness have exceeded ourexpectations.",
            by: "Sharad Pimplakar"
        },
        {
            review: "Rainbow Services products have revolutionized our IT infrastructure. Their cutting-edge solutions not only increased efficiency but also enhanced our security measures.The support and training provided were exceptional, ensuring a smooth transition forour team.",
            by: "Sanjay Jog"
        }
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
                            <h3 className='desc-heading'>Data Visualization</h3>
                            <p className='desc'>
                                We can create personalized dashboards according to client's Requirements
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
                            <h3 className='desc-heading'>Software Developement</h3>
                            <p className='desc'>
                                We develop software as per client requirement.
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
                            <h3 className='desc-heading'>Mobile Application</h3>
                            <p className='desc'>
                                We design IOS and Android application as per client requirement.
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
                            <h3 className='desc-heading'>Data Management & Data Security</h3>
                            <p className='desc'>
                                End-to-End expertise for data conversion
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