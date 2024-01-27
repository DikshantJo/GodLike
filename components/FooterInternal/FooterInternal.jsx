import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

const FooterInternal = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[18vh] flex flex-col items-center justify-center'>
                <div className='flex justify-between items-center w-[90%]'>
                    <div className='z-10 -mr-[10%]'><span className={`text-white mx-2 text-sm ${style.copyRight}`} >God like studio | All rights reserved </span></div>
                    {/* <div className='flex justify-between items-center'> 
                        <Link className='mx-2' href='./privacy'>Privacy Policy</Link>
                        <Link className='mx-2' href='./Terms'>Terms & Conditions</Link>
                        <Link className='mx-2' href='./Cookie'>Cookie policy</Link>
                    </div> */}
                    <div><Link target='_blank' href='https://instagram.com/godlikestudio_sashanks_f?igshid=MmVlMjlkMTBhMg==' className={`text-white mx-2 ${style.socialLinks}`} >Instagram</Link></div>
                </div>
                <div className='w-[90%] h-[1px] bg-white rounded-md z-10 my-4'></div>
                <div className='flex justify-between items-center w-[90%]'>
                    <div className='flex'>
                        <div className='flex flex-col items-baseline justify-center z-10'>
                            <span className='text-white mx-2 text-xs'>
                                version 
                            </span>
                            <span className='text-white mx-2 text-xs sm:text-sm'>
                                2023 © Edition
                            </span>
                        </div>
                    </div>
                    
                    <div className='flex justify-between items-center  z-10'>
                        {/* <Link className={`text-black mx-2 ${style.socialLinks}`} href="/">Facebook</Link> */}

                        {/* <Link className={`text-black mx-2 ${style.socialLinks}`} href="/">Linkedin</Link> */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FooterInternal