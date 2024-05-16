// pages/gallery.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../src/app/globals.css';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

const images = [
  {
    src: '/images/frame1.png',
    link: '/project1',
  },
  {
    src: '/images/frame2.png',
    link: '/project2',
  },
  {
    src: '/images/frame3.png',
    link: '/project3',
  },
  {
    src: '/images/frame4.png',
    link: '/project4',
  },
  {
    src: '/images/frame6.png',
    link: '/project5',
  },
  {
    src: '/images/frame5.png',
    link: '/project6',
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#14213D] text-white text-center py-20">
        <h2 className="text-3xl font-bold">Discover our work</h2>
        <p className="text-sm mt-2">Elevate your success with tailored solutions crafted to exceed expectations.</p>
      </div>
      <div className="min-h-screen bg-white flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 w-3/5">
          {images.map((image, index) => (
            <Link key={index} href={image.link}>
              <div className="overflow-hidden rounded-lg shadow-lg w-full h-100 cursor-pointer">
                <Image
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  width={150}
                  height={150}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
