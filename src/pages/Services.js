import React from 'react'
import card from '../assets/card.jpg'

function Services() {
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)'
            }}>
                <div className="flex" style={{
                    maxWidth: '500px',
                    padding: '50px 20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#efefef',
                    borderRadius: '50px',
                    margin: '40px auto'
                }}>
                    <img src={card} alt="" style={{
                        width: '350px',
                        borderRadius: '15px',
                    }} />
                    <h3 className="heading">Mobile Application</h3>
                    <p style={{ padding: '0 70px', textAlign: 'center' }} className="subHeading">Stay ahead in the digital era with cutting-edge mobile applications. From intuitive user interfaces to robust functionality, our app development services are crafted to enhance user experience and drive business growth.</p>
                </div>
                <div className="flex" style={{
                    maxWidth: '500px',
                    padding: '50px 20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#efefef',
                    borderRadius: '50px',
                    margin: '40px auto'
                }}>
                    <img src={card} alt="" style={{
                        width: '350px', borderRadius: '15px'
                    }} />
                    <h3 className="heading">Data Managment</h3>
                    <p style={{ padding: '0 70px', textAlign: 'center' }} className="subHeading">Data management is the practice of collecting, organising, and accessing data to support productivity, efficiency, and decision-making.</p>
                </div>
                <div className="flex" style={{
                    maxWidth: '500px',
                    padding: '50px 20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#efefef',
                    borderRadius: '50px',
                    margin: '40px auto'
                }}>
                    <img src={card} alt="" style={{
                        width: '350px',
                        borderRadius: '15px'
                    }} />
                    <h3 className="heading">Data and information visualization</h3>
                    <p style={{ padding: '0 70px', textAlign: 'center' }} className="subHeading">We can create personalized dashboards according to client's Requirements</p>
                </div>
                <div className="flex" style={{
                    maxWidth: '500px',
                    padding: '50px 20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#efefef',
                    borderRadius: '50px',
                    margin: '40px auto'
                }}>
                    <img src={card} alt="" style={{
                        width: '350px',
                        borderRadius: '15px'
                    }} />
                    <h3 className="heading">Software Development</h3>
                    <p style={{ padding: '0 70px', textAlign: 'center' }} className="subHeading">Harness the power of custom software tailored to your unique needs. Our expert team of developers at Rainbow Software Solutions creates scalable and efficient solutions, ensuring your technology aligns seamlessly with your business objectives</p>
                </div>
            </div>
        </>
    )
}

export default Services