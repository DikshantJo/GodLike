// import React, { useState, useEffect } from 'react';
"use client"
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import style from './style.module.css'
import { Italiana, Lato, Prata, Raleway } from 'next/font/google'


export const italiana = Italiana({
  subsets: ['latin'],
  weight: '400'
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: '400'
})




// Import from sanity
import { getProjects } from '@/sanity/sanity-utils';

const Gallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [ project, setProject] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Card = useRef(null);


  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (showModal) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      console.log(deltaX)
      if (deltaX > 1500) {
        navigateImages(-1); // Swipe right
      } else if (deltaX < -50) {
        navigateImages(1); // Swipe left
      }
    }
  };



  // useLayoutEffect( () => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.to(Card.current, {
  //       scrollTrigger: {
  //           trigger: document.documentElement,
  //           start: 100,
  //           end: window.innerHeight,
  //           onLeave: () => {gsap.to(Card.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
  //           onEnterBack: () => {gsap.to(Card.current, {scale: 1, duration: 0.25, ease: "power1.out"})}
  //       }
  //   })
  // }, [])


  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (showModal) {
        if (e.key === 'ArrowLeft') {
          navigateImages(-1);
        } else if (e.key === 'ArrowRight') {
          navigateImages(1);
        }
      }
    };

    document.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, [showModal]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
  };

  const closeModal = () => {
    setShowModal(false);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
  };

  const navigateImages = (offset) => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + offset + project.length) % project.length
    );
  };


  useEffect(()=>{
    (
      async () => {
        const project = await getProjects();
        setProject(project)
        console.log(project)
      }
    )()
   },[])

  return (
    <>
        <div className='lg:pt-0'>
            <h1 className={`text-center mb-0 relative md:px-20 text-[32px] md:text-[45px] lg:text-[80px] text-white leading-normal ${italiana.className}`} style={{ fontWeight:'bold',color:'#fff'}}>
              {/* <span className='absolute' style={{fontSize:'14px'}}>Portfolio</span> */}
                Product 
                <span style={{color:'#777', marginLeft:'16px'}}>Photography</span>
               </h1>
              <span className='block w-full text-center size-[14px] text-grey'>Scroll down</span>
        </div>
        <div className="flex justify-center items-center flex-wrap p-2 lg:p-8 pt-6 lg:pt-10 lg:pb-28">
          {/* {images.map((image, index) => (
            <div ref={Card} key={index} className="relative cursor-zoom-in" style={{ height: '60vh' }} onClick={() => openModal(index)}>
              <Image src={image} alt={`Image ${index}`} className="w-full h-full object-cover rounded-lg" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))} */}

          {project.map((pro, index) => (
            <div ref={Card} key={index} className={`${style.card} relative cursor-zoom-in h-[42vw] w-[42vw]  md:h-[30vw] md:w-[30vw] lg:h-[30vw] lg:w-[30vw]`} style={{ margin:"6px", borderRadius:'0px' }} onClick={() => openModal(index)}>
              <Image src={pro.image } alt={`Image ${index}`} className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{borderRadius:'0px'}} />
              <div className={style.plusIcon}>+</div>
            </div>
          ))}

            {/* Modal */}
          {showModal && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
              onClick={closeModal} style={{zIndex:'999'}}
            >
              <div className="modal-content" style={{width:'100%',height:'100%'}}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setTouchStartX(0)}>
                <span
                  className="absolute top-0 right-0 m-4 text-white text-2xl cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <Image
                  // fill={true}
                  src={project[currentImageIndex].image}
                  alt={`Modal Image`}
                  width={100}
                  height={100}
                  // className="w-full h-auto"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  style={{width:'100%',height:'100%', objectFit:'contain'}}
                />
              </div>
            </div>
          )}
        </div>
        {/* <div className="grid gap-1 p-6 lg:p-14 pt-6 lg:pt-10" style={{gridTemplateColumns:'repeat(autofit, minmax(250px, 1fr))', gridAutoRows:'200px', gridAutoFlow:'dense'}}>
          {project.map((pro, index) => (
            <div ref={Card} key={index} className="relative cursor-zoom-in flex justify-center items-center" onClick={() => openModal(index)}>
              <Image src={pro.image } alt={`Image ${index}`} className="max-w-full w-full h-full align-middle inline-block object-cover" fill />
            </div>
          ))}
        </div> */}
    </>
  );
};

export default Gallery;
