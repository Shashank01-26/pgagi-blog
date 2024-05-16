// pages/project3.js
import '../src/app/globals.css';

import React from 'react';
import Image from 'next/image';

const Project3 = () => {
  return (
    <div className="bg-black h-20px">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-8 bg-black text-white mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="w-full md:w-1/2">
          <div className="bg-[linear-gradient(87.43deg,rgba(143,0,255,0)_0%,#560099_265.05%)] w-2 h-full mr-8"></div>
          <div className="text-left ml-8">
            <h2 className="text-4xl font-bold mb-4">VoiceShop Communicator</h2>
            <p >
            A voice-to-voice AI communication tool for Shopify stores, enabling real-time customer support and product inquiries through vocal interactions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/project3.png"
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

export default Project3;
