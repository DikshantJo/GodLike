"use client"
import React from 'react'
// import { useEffect, useState } from 'react'
// import { AnimatePresence } from 'framer-motion';
const { useEffect, useState } = require('react');
import { AnimatePresence } from 'framer-motion';


//components
import FloaterBar from '@/components/Floater/FloaterBar';
import ImagesProduct from '@/components/GallaryProduct/Gallary'
// import ImagesInterior from '@/components/GallaryInterior/Gallary'
import GallaryVideo from '@/components/GalleryVideo/Gallary';   
import Preloader from '../components/Preloader/Preloader'
import HeaderNew from '@/components/HeaderInternal/Index'
import Header from '@/components/HeaderInternal/Index'
import Footer from '@/components/FooterInternal/FooterInternal'

// import Landing from '@/components/LandingScroll/landing'
import Landing from '@/components/HeroAutoScroll/index'

import SlidingImages from '@/components/SlidingImages/SlidingImages';
import FAQ from '@/components/FAQ/FAQParent'
import Contact from '@/components/Contact/Contact';
import { background } from '@/components/HeaderInternal/anim';

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingAssist, setLoadingAssist] = useState(true);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      const isFirstVisit = localStorage.getItem('isFirstVisit');
      if (!isFirstVisit) {
        const visitTimestamp = new Date().getTime();
        localStorage.setItem('isFirstVisit', visitTimestamp.toString());
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 4000);
        setTimeout (()=>{
          setLoadingAssist(false)
        },7000)
      } else {
        const visitTimestamp = parseInt(isFirstVisit, 10);
        const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds

        if (new Date().getTime() - visitTimestamp > thirtyMinutes) {
          // If more than 30 minutes have passed, clear localStorage
          localStorage.clear();
        }

        // Don't show the preloader on subsequent visits
        setLoadingAssist(false)
        setIsLoading(false);
      }
    })();
  }, []);


  return (
    <div style={{background:'#1a1a1a'}}>
      {/* <Header /> */}
      <HeaderNew />
      <div className="tab-content pt-32 lg:pt-40" style={{background:'#1a1a1a'}}>
        <ImagesProduct />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default page