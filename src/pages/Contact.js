import '../css/Contact.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [complexity, setComplexity] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    async function submitForm(e) {
        e.preventDefault(); // Prevent page refresh
        const response = await fetch('http://localhost:1605/route/addContact', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, complexity, message }),
        });

        const result = await response.json();
        console.log(result);

        console.log(JSON.stringify({ name, email, complexity, phone, message }))

        // Clear form fields after submission
        setName('');
        setEmail('');
        setComplexity('');
        setPhone('');
        setMessage('');
    }

    return (
        <>
            <div className='contact-info'>
                <div className='contact-card'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                    </div>
                    <div className='contact-details'>
                        <div className='heading'>Phone Number</div>
                        <div className='subHeading'>(+91) 92255 00055</div>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    </div>
                    <div className='contact-details'>
                        <div className='heading'>Email Address</div>
                        <div className='subHeading'>info@rainbowsofwaresolutions.com</div>
                        <div className='subHeading'>sales@rainbowsoftwaresoutions.com</div>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    </div>
                    <div className='contact-details'>
                        <div className='heading'>Office Address</div>
                        <div className='subHeading'>Rainbow Services Pratap Nagar Ring road, Nagpur, Maharashtra</div>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    </div>
                    <div className='contact-details'>
                        <div className='heading'>Branch Office Address</div>
                        <div className='subHeading'>Rainbow Services 54, Rotherglen, Brampton, Ontario, CANADA - L6X2S1</div>
                    </div>
                </div>
                <div className='contact-card'>
                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faPhone} className='icon' />
                    </div>
                    <div className='contact-details'>
                        <div className='heading'>Sales Team (Yash)</div>
                        <div className='subHeading'>(+91) 9822255235</div>
                    </div>
                </div>
            </div>

            <div className='contact-form'>
                <div className='flex'>

                    <div className='form-header'>
                        <h2 style={{ fontSize: '40px' }}>We'd love to hear from you.</h2>
                        <p className='subHeading'>
                            At our IT solution company, we are committed to providing exceptional customer service and support. If you are experiencing technical difficulties or need assistance with one of our services,
                        </p>
                        <h2>Your benefits:</h2>
                        <ul className='benefits-list'>
                            <li>Client-oriented</li>
                            <li>Independent</li>
                            <li>Competent</li>
                            <li>Results-driven</li>
                            <li>Problem-solving</li>
                            <li>Transparent</li>
                        </ul>
                    </div>

                    <div style={{ width: '50%' }}>
                        <form onSubmit={submitForm}>
                            <div className='flex' style={{}}>
                                <div className='input-group' style={{ width: '100%' }}>
                                    <TextField
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div className='input-group' style={{ width: '100%' }}>
                                    <TextField
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        label="Phone No."
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className='input-group' style={{}}>
                                <TextField
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <div className='input-group'>
                                <Select
                                    value={complexity}
                                    onChange={(e) => setComplexity(e.target.value)}
                                    displayEmpty
                                    fullWidth
                                >
                                    <MenuItem value="" disabled>
                                        Select Complexcity
                                    </MenuItem>
                                    <MenuItem value="Low">Low</MenuItem>
                                    <MenuItem value="Medium">Medium</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                </Select>
                            </div>
                            <div className='input-group'>
                                <TextField
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </div>
                            <div className="input-group">
                                <Button type='submit' variant="contained" color="primary" className="input-group" style={{ width: '100%' }}>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
