'use client';
import QuestionBox from './assets/Frame 1000002294.png';
import Image from "next/image";
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import RectangleImage from "./assets/RectangleImage.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  // State to track active tab and uploaded images
  const [activeTab, setActiveTab] = useState('about');
  const [uploadedImages, setUploadedImages] = useState([RectangleImage.src, RectangleImage.src, RectangleImage.src, RectangleImage.src]);


  // Swiper ref
  const swiperRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, imageUrl]); // Add the new image to the array
    }
  };

  // Slide to the next image
  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Slide to the previous image
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <div className='w-[100%] h-[100vh] mx-auto grid gap-10 px-5 py-12 lg:grid-cols-[1fr_1.5fr] grid-cols-1 xl:grid-cols-2 justify-between items-start rounded-3xl'>

        {/* Left div */}
        <div className='bg-[#616161D1] h-[100%] w-[100%] rounded-3xl flex justify-center items-center text-3xl font-medium'>Thanks For Giving Me This Opportunity</div>

        {/* Right divs */}
        <div className='gap-5 flex flex-col justify-between items-center'>

          {/* Right top div */}
          <div className="bg-[#363C43] rounded-3xl p-4 flex items-start shadow-2xl justify-start w-[100%] h-[40vh] righttopdiv">
            <div className='w-fit'>
              <Image src={QuestionBox} alt='QuestionBox' priority />
            </div>

            <div className='w-[90%] mx-auto'>
              {/* Buttons */}
              <div className='w-[95%] bg-[#171717] text-[18px] p-2 rounded-[23px] grid grid-cols-3 gap-2 justify-between items-center'>
                <button
                  className={`buttonstyle ${activeTab === 'about' ? 'bg-[#28292F] text-white drop-shadow-2xl buttonsboxshadow' : 'text-[#A3ADB2]'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About Me
                </button>
                <button
                  className={`buttonstyle ${activeTab === 'experience' ? 'bg-[#28292F] text-white shadow-2xl buttonsboxshadow' : 'text-[#A3ADB2]'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experiences
                </button>
                <button
                  className={`buttonstyle ${activeTab === 'recommended' ? 'bg-[#28292F] text-white shadow-2xl buttonsboxshadow' : 'text-[#A3ADB2]'}`}
                  onClick={() => setActiveTab('recommended')}
                >
                  Recommended
                </button>
              </div>

              {/* Content based on active tab */}
              <div className='mt-6 text-[#969696] text-[18px] contentdiv h-[25vh]'>

              {activeTab === 'about' && (
                <div className='w-[90%]'>
                   <p className='mb-5'>Hello! I’m Mohammed Zaheer, Iam a Frontend Developer with 3 months of Internship Experience at Comma Technologies as a Frontend Developer.</p>
                   <p className='mb-5'>I was born in Nalgonda Telangana, and done my studies till 12th in Nalgonda</p>
                   <p className='mb-5'>And when it comes to my studies i have Graduated from Kakatiya University Of Warangal.</p>
               </div>
              )}

              {activeTab === 'experience' && (
                <div className='w-[90%]'>
                   <p className='mb-5'>My Experience it was a Remote Internship and during my internship is to develop the UI from given Figma and make it fully responsive and user friendly. And in my Internship i have leveled up my skills and also learned Next.js and Basics of GSAP and many more</p>

                  <p className='mb-5'>My Skills: HTML, CSS, Javascript, React.js, Next.js, Tailwind CSS, API, Axios, Swiper.js, GSAP (Basics), </p>
               </div>
              )}

              {activeTab === 'recommended' && (
                <div className='w-[90%] flex flex-col justify-start items-start'>
                   <p className='mb-5'>I Would like to recommend you to look into my projects below that i created </p>

                   <button><a href="https://beauty-salon-website.vercel.app/" className='underline' target='_blank'>Beauty Salon Site</a></button>
                   <button><a href="https://urbangrove-website-by-zaheer.netlify.app" className='underline' target='_blank'>Unbangrove Ecommerce Site</a></button>
                   <button><a href="https://traveling-website-phi.vercel.app/" className='underline' target='_blank'>Travlog (Traveling) Site</a></button>
               </div>
              )}
            </div>


            </div>
          </div>

          {/* Horizontal Line */}
          <p className='hrline h-[5px] rounded-lg w-[80%]'></p>

          {/* Right Bottom div */}
          <div className="bg-[#363C43] rounded-3xl p-4 flex items-start shadow-2xl justify-start w-[100%] h-[40vh]">

          <div className='w-fit'>
              <Image src={QuestionBox} alt='QuestionBox' priority />
            </div>

            <div className='w-[90%] mx-auto'>

              <div className='flex justify-between items-center'>
                <button className='bg-[#171717] text-white py-3 px-10 font-medium text-[20px] gallerybutton'>Gallery</button>

                <div className='flex justify-between items-center gap-10'>
                  <button>
                    <label htmlFor="input-file" className='rounded-full text-white bg-[#363C43] py-3 px-5 font-bold addimagebutton'>
                      + ADD IMAGE
                    </label>
                    <input type="file" id="input-file" accept='image/*' className='hidden' onChange={handleImageUpload} />
                  </button>

                  <div className='flex justify-between items-center gap-10'>
                    <FaArrowLeft className='arrows' onClick={handlePrevSlide} />
                    <FaArrowRight className='arrows' onClick={handleNextSlide} />
                  </div>
                </div>
              </div>

              <div className='w-[100%] my-5'>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
                  className="mySwiper grid grid-cols-3 items-center justify-between"
                >
                  {uploadedImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt={`Uploaded Image ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

            {/* Horizontal Line */}
          <p className='hrline h-[5px] rounded-lg w-[80%]'></p>

        </div>
      </div>
    </>
  );
}
