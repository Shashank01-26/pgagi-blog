// pages/project3.js
import '../src/app/globals.css';

import React from 'react';
import Image from 'next/image';

const Project1 = () => {
  return (
    <div className="bg-black h-20px">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-8  text-white mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="w-full md:w-1/2">
          <div className="bg-[linear-gradient(87.43deg,rgba(143,0,255,0)_0%,#560099_265.05%)] w-2 h-full mr-8"></div>
          <div className="text-left ml-8">
            <h2 className="text-6xl font-bold mb-4">TalentHarbor AI</h2>
            <p >
              An AI-driven recruitment platform that automates the entire hiring
              process, from sourcing to initial screenings, making recruitment
              efficient and user-friendly.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 ml-20">
          <Image
            src="/images/project1.png"
            alt="TalentHarbor AI"
            width={150}
            height={150}
            className="rounded-lg ml-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;
