'use client'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Hero from '@/components/HeroAutoScroll/index';
import Header from '@/components/HeaderInternal/Index'
// import Header from '@/components/HeaderInternal/Index';
import Footer from '@/components/FooterInternal/FooterInternal';
import Preloader from '../components/Preloader/Preloader'
import FAQ from '@/components/FAQ/FAQParent';
import circle from '@/public/contact/circle.svg';
import facebook from '@/public/contact/facebook.svg';
import Insta from '@/public/contact/Insta.svg';
import linkedIn from '@/public/contact/linkedin.svg';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingAssist, setLoadingAssist] = useState(true);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

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


  const options = [
    'Still life product photography',
    'General videography',
    'Lifestyle location shoot',
    'Model Studio Shoot',
    'Music videos',
    'Wedding films',
  ];

  const handleCheckboxChange = (option) => {
    if (selectedCheckboxes.includes(option)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== option));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, option]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitted) {
      return;
    }

    setSubmitted(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          website,
          message,
          selectedCheckboxes,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // You can perform any additional actions after successful submission
      } else {
        console.error('Error sending email');
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle the error as needed
    }
  };



  return (
    <div className="relative text-black w-full" style={{background:'#1a1a1a'}} >
      <Header />
      {/* <HeaderNew /> */}
      {loadingAssist ? 
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
          {/* <Preloader /> */}
        </AnimatePresence> : null }
      <div className='w-full mb-10 flex flex-col justify-center items-center' style={{paddingTop:'15vh'}}>
        <h1 className='text-3xl lg:text-6xl text-primary font-bold mb-4 lg:mb-4' style={{ fontWeight:'bold',color:'#fff'}}>
          {/* <span className='absolute' style={{fontSize:'14px'}}>Portfolio</span> */}
           Contact
            <span style={{color:'#777', marginLeft:'16px'}}>us</span>
            </h1>
          <span className='block w-full text-center size-[14px] text-gray-500'>Any question or remarks? Just write us a message!</span>
      </div>
      <div className='w-[90%] m-auto flex flex-col-reverse justify-center items-center lg:flex-row mb-24 p-4 lg:p-8 lg:h-[85vh] 2xl:w-[1300px]'  style={{borderRadius:'10px',background: '#FFF',boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)', borderRadius: '24px', padding:'20px'}} >
        <div className='sm:w-full md:w-full mt-4 lg:mt-0 w-full lg:w-[40%] flex flex-col items-start justify-between relative h-full' style={{background:'#011C2A',borderRadius: '24px'}}>
           <div className='flex flex-col justify-start items-start p-6 lg:p-14'>
              <h2 className='text-white text-[32px] lg:text-6xl mb-6'>Contact Information</h2>
              <span className='text-white text-[18px]'>Email: hello@godlikestudio.com</span>
              <span className='text-white text-[18px] mt-6'>If you’re after a general price range, you can use the contact form here (please note we will require more information to refine your quote).</span>
              <Image src={circle} alt='circle' style={{position:'absolute',bottom:'45px', right:'45px'}} />
           </div>
           <div className='flex justify-center items-center p-6 lg:p-14'>
            <Image src={facebook} href='facebook' style={{margin: '0 10px'}} />
            <Image src ={Insta} href= 'Insta' style={{margin: '0 10px'}} />
            <Image src ={linkedIn} href= 'LinkedIn' style={{margin: '0 10px'}} />
           </div>
        </div>
        <div className="sm:w-full md:w-full w-full lg:w-[60%] flex items-center justify-center">
          <form
        className="w-[95%] lg:w-[90%] flex flex-col justify-center "
        onSubmit={handleSubmit}
      >
            <div className="flex flex-col w-full gap-4">
              <h3 className='text-[32px] font-bold'>let&apos;s connect!</h3>
              <div className='flex flex-wrap w-full gap-4'>
                <div className="flex flex-col gap-4 w-[100%] lg:w-[48%]">
                  <label htmlFor="name">Name</label>
                  <input 
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="border-[1px] border-gray-300 rounded-lg h-[50px] mr-2 p-3"
                  />
                </div> 
                <div className="flex flex-col gap-4 w-[100%] lg:w-[48%]">
                  <label htmlFor="email">Email</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    name="email"
                    id="email"
                    required
                    className="border-[1px] border-gray-300 rounded-lg h-[50px] mr-2 p-3"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[100%]">
                  <label htmlFor="url">Website or Instagram URL</label>
                  <input
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                    type="text"
                    name="url"
                    id="URL"
                    required
                    className="border-[1px] border-gray-300 rounded-lg h-[50px] mr-2 p-3"
                  />
                </div>
              </div> 
              {/* <div className="flex flex-col gap-4">
                <h2>Type of Services</h2>
                <label><input type="checkbox" value = "Still life product photography" onChange={handleCheckboxChange} /> Still life product photography </label> 
                <label><input type="checkbox"/> General videography </label> 
                <label><input type="checkbox"/> Lifestyle location shoot </label> 
                <label><input type="checkbox"/> Model Studio Shoot </label> 
                <label><input type="checkbox"/> Music videos </label> 
                <label><input type="checkbox"/>Wedding films</label> 
              </div> */}
              <div className='flex flex-wrap gap-4 my-4'>
                  {options.map((option) => (
                    <label key={option}  className = 'w-[100%] lg:w-[48%]'>
                      <input className='mr-2'
                        type="checkbox"
                        checked={selectedCheckboxes.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                      />
                      {option}
                    </label>
                  ))}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  id="message"
                  required
                  className="border-[1px] border-gray-300 rounded-xl p-5"
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className={
                     "bg-blue-500 text-white rounded-xl p-5"
                  }
                  style={{background:'#011C2A'}}
                > Submit
                </button>
                <div
                  type="submit"
                  className={
                    submitted
                      ? "bg-green-200 rounded-xl p-2 flex items-center justify-center gap-4 text-green-600"
                      : "hidden"
                  }
                >
                  {/* {submitted && <h1>Submitted</h1>} */}
                  {submitted ? "Successfully Submitted" : "Submit"}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ContactForm;
