// pages/project3.js
import '../src/app/globals.css';

import React from 'react';
import Image from 'next/image';

const Project6 = () => {
  return (
    <div className="bg-black h-50px">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-8 bg-black text-white mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="w-full md:w-1/2">
          <div className="bg-[linear-gradient(87.43deg,rgba(143,0,255,0)_0%,#560099_265.05%)] w-2 h-full mr-8"></div>
          <div className="text-left ml-8">
            <h2 className="text-6xl font-bold mb-4">MetaMarket AI</h2>
            <p>
            A metaverse-specific AI model that provides marketing and e-commerce strategies, helping businesses to understand and scale their operations in virtual environments.

            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/project6.png"
            alt="TalentHarbor AI"
            width={200}
            height={200}
            className="rounded-lg ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Project6;
