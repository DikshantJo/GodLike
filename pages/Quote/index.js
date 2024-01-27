'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Hero from '@/components/HeroAutoScroll/index';
import HeaderNew from '@/components/HeaderNewInternal/Index';
// import Header from '@/components/HeaderInternal/Index';
import Footer from '@/components/FooterInternal/FooterInternal';
import FAQ from '@/components/FAQ/FAQParent';
import circle from '@/public/contact/circle.svg';
import facebook from '@/public/contact/facebook.svg';
import Insta from '@/public/contact/Insta.svg';
import linkedIn from '@/public/contact/linkedin.svg';
// import Header from '@/components/HeaderQuote/index'

const ContactForm = () => {

  return (
    <div className="relative bg-white text-black w-full h-[100vh] flex flex-col justify-between items-center">
      <HeaderNew />
      <div className='w-full mb-10 justify-center items-center h-full flex flex-col' style={{}}>
        <h1 className='text-center mb-0 relative md:px-20 text-[32px] md:text-[45px] lg:text-[80px] text-black leading-normal' style={{ fontWeight:'bold',color:'#000'}}>
          {/* <span className='absolute' style={{fontSize:'14px'}}>Portfolio</span> */}
            Quotation 
            <span style={{color:'#777', marginLeft:'16px'}}>Inquiry</span>
            </h1>
          <span className='block w-full text-center text-sm lg:text-lg text-black'>Need a price estimate? Provide us with the necessary information, and we'll promptly send you a customized quotation.</span>
          <div className='w-full flex justify-center items-center mt-8'>
            <Link href='./Quote/productPhotography' className='w-[150px] lg:w-[250px] h-[45px] lg:h-[55px] flex justify-center items-center mr-1 lg:mr-4 text-sm' style={{background:'#000',color:'#fff', borderRadius:'12px'}}>Product photography</Link>
            <Link href='./Quote/InteriorPhotography' className='w-[150px] lg:w-[250px] h-[45px] lg:h-[55px] flex justify-center items-center ml-1 lg:ml-4 text-sm' style={{background:'#fff',color:'#000', border:'1px solid black', borderRadius:'12px'}}>Interior photography</Link>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;

