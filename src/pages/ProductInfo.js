// import React from 'react'
// import { useLocation } from 'react-router-dom';

// function ProductInfo() {
//     const props = useLocation();
//     const { title, description } = props.state || {};
//     console.log(title)
//     return (
//         <>
//             <div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//             </div>
//         </>
//     )
// }

// export default ProductInfo


// ProductInfo.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductInfo() {
    const location = useLocation();
    console.log(JSON.stringify(location))
    const { title, description } = location.state || {};

    return (
        <div className='section' style={{
            padding: '50px'
        }}>
            <h3 className='heading' style={{
                fontSize: '50px'
            }}>{title || 'No Title Provided'}</h3>
            <p className='subheading'>{description || 'No Description Provided'}</p>
        </div>
    );
}

export default ProductInfo;
