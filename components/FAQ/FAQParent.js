import FaqItem from '../FAQ/FAQ';
import Link from 'next/link';
import {useState, useEffect} from 'react'

import style from './page.module.scss'

import { getProjectFAQ } from '@/sanity/sanity-utils';

import { Italiana, Lato, Prata, Raleway } from 'next/font/google'


export const italiana = Italiana({
  subsets: ['latin'],
  weight: '400'
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: '400'
})


const FAQ = () => {
  const [FAQ, setFAQ] = useState([])

  useEffect(()=>{
    (
      async () => {
        const FAQI = await getProjectFAQ();
        setFAQ(FAQI)
        console.log(FAQI)
      }
    )()
   },[])


  // const faqData = [
  //   {
  //     question: 'What is Tailwind CSS?',
  //     answer:
  //       'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //   },
  //   {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //     {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //     {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //   // Add more FAQ items
  // ];

  return (
    <div className="container flex flex-col md:flex md:flex-row md:flex-wrap mx-auto my-12 md:my-18 w-[95vw] lg:w-[90vw] p-[20px] lg:p-10" style={{background:'#fff', borderRadius:'12px',color:'#000'}}>
      <div className='w-full md:w-full mr-16'>
         <h1 className={`text-3xl md:text-6xl lg:text-8xl font-bold mb-2 lg:mb-12 ${italiana.className}`}><span>You have questions</span>
           <p className='flex items-center mt-3 text-[#777]'> <span>We have </span><img className='w-[30px] h-[30px]  md:w-[50px] md:h-[50px] mx-4' src = '/message.png'></img> <span>answers</span> </p>
         </h1>
      </div>
      <div className={`w-full  md:w-[65%] ${raleway.className}`}>
        {FAQ.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className={`w-full md:w-[30%] mt-6 flex flex-col items-end ${raleway.className}`}>
        <Link className='w-full md:w-3/4  lg:text-sm px-4 py-4 my-4 bg-white text-black text-center font-semibold rounded-lg border-solid border-2 border-black' href="./product-photography">
         Product photography
        </Link>
        <Link className='w-full md:w-3/4 lg:text-sm px-4 py-4 bg-white my-4 text-black text-center font-semibold rounded-lg border-solid border-2 border-black' href="./Interior-photography">
          Interior photography
        </Link>
        {/* <Link className='w-full md:w-3/4 px-4 py-4 bg-white my-4 text-black text-center font-semibold rounded-lg border-solid border-2 border-black' href="./Interior-photography">
          Interior
        </Link> */}
        
        <span className='text-center block w-full md:w-3/4 text-[#777] my-4'>----- OR -----</span>

        <Link className='w-full md:w-3/4 px-4 py-4 lg:text-sm bg-black my-4 text-white text-center font-semibold rounded-lg' href="./Quote">
          Get a quote
        </Link>
        
      </div>
      <div className='w-full mt-6 lg:mt-10'>
        <div className={`flex flex-col md:flex-row justify-between items-center ${style.ContactFormContainer} ${raleway.className}`}>
          <div className='flex flex-col items-start'>
            <h3 className={`text-center ${style.ContactFormTitle} lg:text-md`}>Still have questions?</h3>
            <p className={`${style.contactFormText} lg:text-sm`}>Can't find the answer you are looking for? Feel free to ask it directly from us.</p>
          </div>
          <button className='bg-black text-white px-4 py-3 rounded-xl mt-2 font-semibold w-full md:w-[200px] lg:text-sm'>
            <Link href="#"> Ask a Question </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
