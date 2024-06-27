// import React from 'react'
// import { Link } from 'react-router-dom'
// import img1 from '../assets/Project/CRM Application.png'
// import img2 from '../assets/Project/E-Commerce App.png'
// import img3 from '../assets/Project/ERP.png'
// import img4 from '../assets/Project/Education and Institutional.png'
// import img5 from '../assets/Project/HRMS.png'
// import img6 from '../assets/Project/Hospital Management.png'
// import img7 from '../assets/Project/Loan & Finance Management App.png'
// import img8 from '../assets/Project/Pharmacy Management.png'
// import img9 from '../assets/Project/Real Estate Management.png'
// import img10 from '../assets/Project/Taxi Booking.png'

// function Products() {

//     const data = [
//         {
//             title: 'CRM Application',
//             description: 'eligendi adipisci corrupti ut quia rerum.Neque sequi consequatur molestias!'
//         },
//         {
//             title: 'E-Commerce App',
//             description: ''
//         },
//         {
//             title: 'ERP',
//             description: ''
//         },
//         {
//             title: 'Education and Institutional',
//             description: ''
//         },
//         {
//             title: 'HRMS',
//             description: ''
//         },
//         {
//             title: 'Hospital Management',
//             description: ''
//         },
//         {
//             title: 'Loan & Finance Management App',
//             description: ''
//         },
//         {
//             title: 'Pharmacy Management',
//             description: ''
//         },
//         {
//             title: 'Real Estate Management',
//             description: ''
//         },
//         {
//             title: 'Taxi Booking',
//             description: ''
//         },
//     ]

//     // console.log(data[0].title)
//     return (
//         <>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-evenly',
//                 alignItems: 'center',
//                 flexDirection: 'column',
//             }}>
//                 <h3 className="heading">Offering The Latest Software To Our Customers!</h3>

//                 <div style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     flexWrap: 'wrap',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                     // marginBottom: 5em,
//                 }}>

//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[0].title,
//                                     description: data[0].description
//                                 }
//                             }}
//                         >
//                             <img src={img1} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[1].title,
//                                     description: data[1].description
//                                 }
//                             }}>
//                             <img src={img2} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[2].title,
//                                     description: data[2].description
//                                 }
//                             }}>
//                             <img src={img3} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[3].title,
//                                     description: data[3].description
//                                 }
//                             }}>
//                             <img src={img4} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[4].title,
//                                     description: data[4].description
//                                 }

//                             }}>
//                             <img src={img5} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[5].title,
//                                     description: data[5].description
//                                 }
//                             }}>
//                             <img src={img6} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[6].title,
//                                     description: data[6].description
//                                 }
//                             }}>
//                             <img src={img7} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[7].title,
//                                     description: data[7].description
//                                 }
//                             }}>
//                             <img src={img8} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[8].title,
//                                     description: data[8].description
//                                 }
//                             }}>
//                             <img src={img9} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                     <div style={{
//                         padding: '10px',
//                         borderRadius: '20px'
//                     }}>
//                         <Link
//                             to={{
//                                 pathname: '/productInfo',
//                                 state: {
//                                     title: data[9].title,
//                                     description: data[9].description
//                                 }
//                             }}>
//                             <img src={img10} alt="" style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
//                         </Link>
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default Products


// Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Project/CRM Application.png';
import img2 from '../assets/Project/E-Commerce App.png';
import img3 from '../assets/Project/ERP.png';
import img4 from '../assets/Project/Education and Institutional.png';
import img5 from '../assets/Project/HRMS.png';
import img6 from '../assets/Project/Hospital Management.png';
import img7 from '../assets/Project/Loan & Finance Management App.png';
import img8 from '../assets/Project/Pharmacy Management.png';
import img9 from '../assets/Project/Real Estate Management.png';
import img10 from '../assets/Project/Taxi Booking.png';

function Products() {
    const data = [
        {
            title: 'CRM Application',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt fuga, harum illo quos quam itaque hic officia nihil, alias deleniti optio architecto! Mollitia eos assumenda sit, eius eaque in?Ratione aspernatur, porro ex voluptatem libero commodi exercitationem, illum, quod minus omnis animi ea atque iusto accusamus molestias itaque ipsam deserunt. Incidunt tenetur pariatur quod nam voluptate consequatur, assumenda ad.Explicabo quisquam numquam suscipit tempora, ipsum dolorem sapiente eaque provident assumenda ea cumque impedit vitae velit mollitia unde doloribus hic voluptatem ipsa praesentium repellat cum tenetur qui recusandae dolor! Iusto!Voluptatum non eius sapiente, corporis incidunt commodi dignissimos a, nihil explicabo molestiae repudiandae veniam necessitatibus. Repellat, voluptas ad! Nisi ullam voluptates quis vitae quaerat repellat illo assumenda fuga expedita aperiam?Quam ex eligendi laborum? Eum, suscipit mollitia accusantium neque excepturi similique placeat, odio dolorem illo cupiditate voluptates repellendus aperiam pariatur ex corporis eos modi? Porro at impedit eos optio veniam?'
        },
        {
            title: 'E-Commerce App',
            description: 'A description for E-Commerce App.'
        },
        {
            title: 'ERP',
            description: 'A description for ERP.'
        },
        {
            title: 'Education and Institutional',
            description: 'A description for Education and Institutional.'
        },
        {
            title: 'HRMS',
            description: 'A description for HRMS.'
        },
        {
            title: 'Hospital Management',
            description: 'A description for Hospital Management.'
        },
        {
            title: 'Loan & Finance Management App',
            description: 'A description for Loan & Finance Management App.'
        },
        {
            title: 'Pharmacy Management',
            description: 'A description for Pharmacy Management.'
        },
        {
            title: 'Real Estate Management',
            description: 'A description for Real Estate Management.'
        },
        {
            title: 'Taxi Booking',
            description: 'A description for Taxi Booking.'
        },
    ];

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 className="heading">Offering The Latest Software To Our Customers!</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {data.map((product, index) => (
                    <div key={index} style={{ padding: '10px', borderRadius: '20px' }}>
                        <Link
                            to={{
                                pathname: '/productInfo',
                            }}

                            state={{
                                title: product.title,
                                description: product.description
                            }}
                        >
                            <img src={images[index]} alt={product.title} style={{ width: '250px', borderRadius: '10px', boxShadow: '#cccccc 10px 10px 8px' }} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
