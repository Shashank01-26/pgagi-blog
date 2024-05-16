// import React from 'react';
// import '../src/app/globals.css';

// import Navbar from '../src/app/components/navbar';
// import Partner from '../src/app/components/partner';

// const ContactUs = () => {
//     return (
//         <div className='bg-[#F0F8FF] justify-center'>
//             <Navbar />
//             <div className="container flex flex-wrap mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-28 py-8">
//                 <div className="w-full lg:w-1/2 mx-auto mb-8">
//                     <h1 className="text-5xl font-bold mb-6 py-8 text-[#14213D] text-center">
//                         Get in touch to skyrocket your metrics
//                     </h1>
//                     <div className="pb-10">
//                         <ul className="max-w-md space-y-3 text-gray-700 list-inside text-left text-xl">
//                             <li className="flex items-center py-4">
//                                 <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                                 </svg>
//                                 Want to improve usability in your product?
//                             </li>
//                             <li className="flex items-center py-4">
//                                 <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                                 </svg>
//                                 Want to engage users at a higher level and outperform your competition?
//                             </li>
//                             <li className="flex items-center py-4">
//                                 <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                                 </svg>
//                                 Want to reduce the onboarding time and improve sales?
//                             </li>
//                         </ul>
//                     </div>

//                     <p className="mb-4 text-center">You can also reach us via:</p>
//                     <p className="mb-4 text-center">contact@adamfard.com</p>
//                     <p className="mb-8 text-center">Note: We do not accept unsolicited guest posts</p>

//                     <p className="mb-4 text-center">Top Mobile App Design Company</p>
//                     <p className="mb-4 text-center">Top UX Agency - Clutch</p>

//                     <div className="grid grid-cols-1 gap-4 mb-8">
//                         <div>
//                             <p>USA</p>
//                             <p>307 W 38th St</p>
//                             <p>16th Floor 302</p>
//                             <p>New York, NY 10018</p>
//                         </div>
//                         <div>
//                             <p>Germany</p>
//                             <p>Neue Schönhauser Straße 3</p>
//                             <p>Berlin, BE 10178</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='max-w-lg py-8 mx-auto w-full lg:w-1/2'>
//                     <form className="bg-white p-6 rounded-xl h-full">
//                         <label className="block mb-2 text-lg">
//                             First Name*
//                             <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
//                         </label>
//                         <label className="block mb-2 text-lg">
//                             Email*
//                             <input type="email" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
//                         </label>
//                         <label className="block mb-2 text-lg">
//                             Company Name*
//                             <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
//                         </label>
//                         <label className="block mb-2 text-lg">
//                             Company Website
//                             <input type="url" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" />
//                         </label>
//                         <label className="block mb-2 text-lg">
//                             How can we help you?*
//                             <textarea className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" rows="4" required></textarea>
//                         </label>
//                         <label className="block mb-2 text-lg">
//                             How did you hear about us?*
//                             <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
//                         </label>

//                         <button type="submit" className="w-full bg-[#14213D] text-white py-2 px-4 rounded-md">Send Your Request</button>
//                     </form>
//                 </div>
//             </div>

//             <div className="container mx-auto p-8 content-center">
//                 <div className="flex justify-center space-x-4">
//                     <Partner />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactUs;


import React from 'react';
import '../src/app/globals.css';
import Image from 'next/image';

import Navbar from '../src/app/components/navbar';

const companyLogos = [
    // "/images/hounddog.png", // Replace with actual path to Samsung logo
    "/images/hx.png", // Replace with actual path to T-Mobile logo
    "/images/social27.png", // Replace with actual path to Kinteract logo
    // "/images/pgagi.png", // Replace with actual path to Thinkpricing logo
  ];

const ContactUs = () => {


    const PaperPlaneIcon = () => (
        <svg fill="#f9db9a" width="40px" height="40px" viewBox="-10.88 -10.88 53.76 53.76" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#f9db9a" stroke-width="0.00032">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>paper-plane-top</title>
            <path d="M31.083 16.589c0.105-0.167 0.167-0.371 0.167-0.589s-0.062-0.421-0.17-0.593l0.003 0.005c-0.030-0.051-0.059-0.094-0.091-0.135l0.002 0.003c-0.1-0.137-0.223-0.251-0.366-0.336l-0.006-0.003c-0.025-0.015-0.037-0.045-0.064-0.058l-28-14c-0.163-0.083-0.355-0.132-0.558-0.132-0.691 0-1.25 0.56-1.25 1.25 0 0.178 0.037 0.347 0.104 0.5l-0.003-0.008 5.789 13.508-5.789 13.508c-0.064 0.145-0.101 0.314-0.101 0.492 0 0.69 0.56 1.25 1.25 1.25 0 0 0 0 0.001 0h-0c0.001 0 0.002 0 0.003 0 0.203 0 0.394-0.049 0.563-0.136l-0.007 0.003 28-13.999c0.027-0.013 0.038-0.043 0.064-0.058 0.148-0.088 0.272-0.202 0.369-0.336l0.002-0.004c0.030-0.038 0.060-0.082 0.086-0.127l0.003-0.006zM4.493 4.645l20.212 10.105h-15.88zM8.825 17.25h15.88l-20.212 10.105z"></path>
          </g>
        </svg>
      );

      const LocationIcon = () => (
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 6 7 13 7 13s7-7 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      );

    return (
        <>
         <Navbar />
        <div className='bg-[#F0F8FF] flex flex-col items-center'>
            
            <div className="container flex flex-wrap mx-auto px-0 md:px-8 lg:px-16 xl:px-20 2xl:px-28 mt-8">
                <div className=" lg:w-1/2  mb-8  lg:px-0 "> 
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 py-8 text-[#14213D]">
                        Get in touch to skyrocket your metrics
                    </h1>
                    <div className="pb-10 mx-12">
                        <ul className="max-w-md space-y-3 text-gray-700 list-inside text-left text-lg md:text-xl">
                            <li className="flex items-center py-4">
                                <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Want to improve usability in your product?
                            </li>
                            <li className="flex items-center py-4">
                                <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Want to engage users at a higher level and outperform your competition?
                            </li>
                            <li className="flex items-center py-4">
                                <svg className="w-7 h-7 me-2 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Want to reduce the onboarding time and improve sales?
                            </li>
                        </ul>
                    </div>

                    <p className="mb-4 text-left text-2xl">You can also reach us via:</p>
                    <div className='flex flex-wrap items-center mt-6'>
          {/* Paper Plane Icon */}
          <PaperPlaneIcon />
          {/* Text */}
          <p className="mb-4 font-bold text-[#14213D] text-left flex-grow text-3xl mt-2 ml-2">contact@adamfard.com</p>
        </div>
                    

                    

                    <div className="grid grid-cols-1 gap-4 mb-8 py-6 text-xl">
                        <div>
                        <div className="flex items-center">
    <LocationIcon />
    <p className="ml-2 font-bold text-xl">USA</p>
  </div>
                           <div className='px-6'>
                           <p>307 W 38th St</p>
                            <p>16th Floor 302</p>
                            <p>New York, NY 10018</p>
                           </div>
                        </div>
                        <div>
                        <div className="flex items-center">
    <LocationIcon />
    <p className="ml-2 font-bold text-xl ">Germany</p>
  </div>
                            <div className='px-6'>
                            <p>Neue Schönhauser Straße 3</p>
                            <p>Berlin, BE 10178</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-lg py-8 mx-auto lg:w-1/2  lg:px-0'> {/* Add padding for small screens */}
                    <form className="bg-white p-6 rounded-xl ">
                        <label className="block mb-2 text-lg">
                            First Name*
                            <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
                        </label>
                        <label className="block mb-2 text-lg">
                            Email*
                            <input type="email" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
                        </label>
                        <label className="block mb-2 text-lg">
                            Company Name*
                            <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
                        </label>
                        <label className="block mb-2 text-lg">
                            Company Website
                            <input type="url" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" />
                        </label>
                        <label className="block mb-2 text-lg">
                            How can we help you?*
                            <textarea className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" rows="4" required></textarea>
                        </label>
                        <label className="block mb-2 text-lg">
                            How did you hear about us?*
                            <input type="text" className="form-input mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
                        </label>

                       <div className='py-8'>
                       <button type="submit" className="w-full bg-[#14213D] text-xl text-white py-4 px-4 rounded-md shadow-lg">Send Your Request</button>
                       </div>
                    </form>
                </div>
            </div>

            <div className="container mx-auto p-2 content-center">
                <p className='text-center text-sm font-bold text-gray-700 tracking-wider mb-8'>TRUSTED BY COMPANIES LIKE</p>
                <div className="flex justify-center items-center space-x-20 mt-4">
            {companyLogos.map((logo, index) => (
              <Image key={index} src={logo} alt="Company logo" width={64} height={64} className="h-16 object-contain " />

            ))}
          </div>
              
            </div>
        </div>
        </>
    );
};

export default ContactUs;
