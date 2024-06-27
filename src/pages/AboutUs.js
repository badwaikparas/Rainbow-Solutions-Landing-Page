import React from 'react'
import '../css/AboutUs.css'
import img from '../assets/logo.png'

function AboutUs() {
    return (
        // <div>
        //     <a href="tel:7378897718">Phone</a>
        //     <a href="mailto:badwaikparas@gmail.com">Mail</a>
        //     <a href="https://wa.me/8767261962">
        //             <p>WhatsApp 8767261962<i class="fab fa-whatsapp"></i> </p>
        //     </a>
        // </div>

        <>
            <div>

                <div className='flex' style={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <div className="section" style={{ alignItems: 'flex-start', marginLeft: '50px' }}>
                            <div className="badge">Core values</div>
                            <h3 className="heading">Mission, Vision & Values</h3>
                            <div>
                                <p className='subheading'>We connect with our clients, our communities, and our company.</p>
                                <p className='subheading' style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>It makes us different. It makes us better.</p>
                            </div>
                        </div>
                        <div style={{ marginLeft: '100px' }}>
                            <div className="flex" style={{ alignItems: "center", background: '#dbe8ffd1', padding: '5px', margin: '30px', minHeight: '210px', maxWidth: '500px', }}>
                                <div style={{
                                    position: 'absolute',
                                    // left: '-1%'
                                    transform: 'translate(-50%)'
                                }}>

                                    <img src={img} alt="Vision" style={{
                                        display: 'block',
                                        width: '153px',
                                        // height: '50px',
                                        border: '2px dashed black',
                                        background: 'white',
                                        padding: '5px',
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    }} />
                                </div>
                                <div className="textContainer" style={{
                                    marginLeft: '100px'
                                }}>
                                    <h2>Vision</h2>
                                    <p>Our vision is to be universally recognized as one of the <span className="highlight">Best IT company</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ marginLeft: '100px' }}>
                            <div className="flex" style={{ alignItems: "center", background: '#dbe8ffd1', padding: '5px', margin: '30px', minHeight: '210px', maxWidth: '500px', }}>
                                <div style={{
                                    position: 'absolute',
                                    // left: '-1%'
                                    transform: 'translate(-50%)'
                                }}>

                                    <img src={img} alt="Vision" style={{
                                        display: 'block',
                                        width: '153px',
                                        // height: '50px',
                                        border: '2px dashed black',
                                        background: 'white',
                                        padding: '5px',
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    }} />
                                </div>
                                <div className="textContainer" style={{
                                    marginLeft: '100px'
                                }}>
                                    <h2>Vision</h2>
                                    <p>Our vision is to be universally recognized as one of the <span className="highlight">Best IT company</span></p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: '100px' }}>
                            <div className="flex" style={{ alignItems: "center", background: '#dbe8ffd1', padding: '5px', margin: '30px', minHeight: '210px', maxWidth: '500px', }}>
                                <div style={{
                                    position: 'absolute',
                                    // left: '-1%'
                                    transform: 'translate(-50%)'
                                }}>

                                    <img src={img} alt="Vision" style={{
                                        display: 'block',
                                        width: '153px',
                                        // height: '50px',
                                        border: '2px dashed black',
                                        background: 'white',
                                        padding: '5px',
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    }} />
                                </div>
                                <div className="textContainer" style={{
                                    marginLeft: '100px'
                                }}>
                                    <h2>Vision</h2>
                                    <p>Our vision is to be universally recognized as one of the <span className="highlight">Best IT company</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{
                maxWidth: '1200px',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    height: '700px',
                    marginBottom: '100px'
                }}>
                    <div className='flex' style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                        maxHeight: '480px',
                        marginTop: '100px'
                    }}>
                        <div className="section" style={{
                            alignItems: 'flex-start'
                        }}>
                            <div className="badge">Services</div>
                            <h3>Our Expertise In Business Includes:</h3>
                        </div>

                        <div className='flex' style={{ flexDirection: 'column', gap: '10px', width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', background: '#dbe8ffd1', borderRadius: '20px', padding: '5px' }}>
                            <img src={img} alt="" style={{ width: '50px', display: 'block' }} />
                            <h4 style={{ textAlign: 'center', padding: '0 15px' }}>Software Development</h4>
                        </div>
                    </div>
                    <div className='flex' style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                        maxHeight: '480px',
                        marginTop: '170px'
                    }}>
                        <div className='flex' style={{ flexDirection: 'column', gap: '10px', width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', background: '#dbe8ffd1', borderRadius: '20px', padding: '5px' }}>
                            <img src={img} alt="" style={{ width: '50px', display: 'block' }} />
                            <h4 style={{ textAlign: 'center', padding: '0 15px' }}>Business Process Outsourcing</h4>
                        </div>
                        <div className='flex' style={{ flexDirection: 'column', gap: '10px', width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', background: '#dbe8ffd1', borderRadius: '20px', padding: '5px' }}>
                            <img src={img} alt="" style={{ width: '50px', display: 'block' }} />
                            <h4 style={{ textAlign: 'center', padding: '0 15px' }}>Mobile Apps Development</h4>
                        </div>
                    </div>
                    <div className='flex' style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px',
                        maxHeight: '480px',
                        marginTop: '70px'
                    }}>
                        <div className='flex' style={{ flexDirection: 'column', gap: '10px', width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', background: '#dbe8ffd1', borderRadius: '20px', padding: '5px' }}>
                            <img src={img} alt="" style={{ width: '50px', display: 'block' }} />
                            <h4 style={{ textAlign: 'center', padding: '0 15px' }}>Staff Augmentation & IT Staffing</h4>
                        </div>
                        <div className='flex' style={{ flexDirection: 'column', gap: '10px', width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center', background: '#dbe8ffd1', borderRadius: '20px', padding: '5px' }}>
                            <img src={img} alt="" style={{ width: '50px', display: 'block' }} />
                            <h4 style={{ textAlign: 'center', padding: '0 15px' }}>Data Visualization & Analytics</h4>
                        </div>
                    </div>
                </div>
            </div >

            <div className='section' style={{ padding: ' 0 50px', marginBottom: '100px' }}>
                <div className="badge">Why Us</div>
                <h3 className="heading">Excellence</h3>
                <ul>
                    <li className='flex' style={{ gap: '10px', marginBottom: '20px' }}><p>✔ </p><p className='subHeading'>Rainbow Solutions Pvt.Ltd. is all about Delivering High Quality web design and development services, Cost effective and reliable solutions.</p></li>
                    <li className='flex' style={{ gap: '10px', marginBottom: '20px' }}><p>✔ </p><p className='subHeading'>At Probuz Technologies Pvt.Ltd. we believe that customers should always get easy-to-use, best in the kind and fast services. Probuz Technologies Pvt.Ltd. has achieved standards which helps customer to achieve satisfaction and realize value for their hard earned money.</p></li>
                    <li className='flex' style={{ gap: '10px', marginBottom: '20px' }}><p>✔ </p><p className='subHeading'>Let us take care of your Business needs.</p></li>
                    <li className='flex' style={{ gap: '10px', marginBottom: '20px' }}><p>✔ </p><p className='subHeading'>Probuz Technologies Pvt.Ltd. is a service provider company that will take care of all your technical related needs pertaining to Business. We are experts in providing services to clients who want to implement, enhance, upgrade and support their Business systems. We have expert staff who can make this happen and deliver High Quality end to end solution to the clients.</p></li>
                    <li className='flex' style={{ gap: '10px', marginBottom: '20px' }}><p>✔ </p><p className='subHeading'>We help to fulfill the requirements of small and midsize businesses. We have helped our clients to achieve their business needs by providing expert technology and domain expertise. At Probuz Technologies Pvt.Ltd. we follow latest and best industry practices. Key to our success lies in our approach to constantly enrich our knowledge base with latest technical as well as functional methodologies of Business.</p></li>
                </ul>
            </div>
        </>
    )
}

export default AboutUs