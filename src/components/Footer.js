import React from 'react'
import logo from '../assets/rainbow services logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import { Facebook, LinkedIn, Twitter, Instagram } from '@mui/icons-material';


function Footer() {
    return (
        <>
            <div className='flex' style={{ justifyContent: 'center', marginTop: '50px' }}>
                <div className='flex' style={{ maxWidth: '1320px' }}>
                    <div>
                        <div className='flex' style={{ borderBottom: '1px solid #efefef', paddingBottom: '25px' }}>
                            <img src={logo} alt="" height={72} style={{ paddingRight: '10px', borderRight: '#efefef solid 1px' }} />
                            <div style={{ lineHeight: '25px', paddingLeft: '10px' }}>
                                Rainbow Services is a Tech Startup with a team of professionals who believe in Innovation, Commitment & Delivery on time.
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', padding: '25px 0px' }}>
                            <ul className='flex list' style={{ flexDirection: 'column', gap: '10px' }}>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Career</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                            <ul className='flex list' style={{ flexDirection: 'column', gap: '10px' }}>
                                <li><a href="">Terms and Condition</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ borderLeft: '#efefef 1px solid', padding: '0 7px' }}>
                        <div>
                            <div className='flex' style={{ padding: '10px' }}>
                                <FontAwesomeIcon icon={faPhone} style={{ padding: '0 5px' }} />
                                <div>Call Us:</div>
                            </div>
                            <div style={{ padding: '10px' }}><a href="tel:9225500055">(+91) 9225500055</a></div>
                        </div>
                        <div>
                            <div className='flex' style={{ padding: '10px' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ padding: '0 5px' }} />
                                <div>Email Us:</div>
                            </div>
                            <div style={{ padding: '10px' }}><a href="mailto:sales@rainbowsoftwaresolutions.com">sales@rainbowsoftwaresolutions.com</a></div>
                        </div>
                        <div>
                            <a href=""><IconButton><Facebook /></IconButton></a>
                            <a href=""><IconButton><Twitter /></IconButton></a>
                            <a href=""><IconButton><LinkedIn /></IconButton></a>
                            <a href=""><IconButton><Instagram /></IconButton></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer