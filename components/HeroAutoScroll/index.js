import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'
import { Italiana, Lato, Prata } from 'next/font/google'

export const italiana = Italiana({
  subsets: ['latin'],
  weight: '400'
})

export const lato = Lato ({
    subsets:[],
    weight:'300'
})


import Header from '@/components/HeaderInternal/Index'

import Image1 from '../../public/Home/Beauty product shoot1778.jpg'
import Image2 from '../../public/Home/Beauty product shoot1818.jpg'
import Image3 from '../../public/Home/Product shoot2643.jpg'
import Image4 from '../../public/Home/product.jpg'
import Image5 from '../../public/Home/Video.jpg'
import Image6 from '../../public/Home/Product shoot4698.jpg'
import Image7 from '../../public/Home/Product shoots7119-Edit.jpg'
import Image8 from '../../public/Home/Interior.jpg'
import Image9 from '../../public/Home/Interior.jpg'
import Image10 from '../../public/Home/product shoot7240.jpg'
import Image11 from '../../public/Home/product shoot7240.jpg'
import Image12 from '../../public/Home/Product III.jpg'


// import autoScrollImageI from '../../public/Home/AutoscrollLanding/img1.jpeg'

const images = [
    'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1636743790301-daf4fc1ce968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    'https://plus.unsplash.com/premium_photo-1675896084251-9f6b085deed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=635&q=80',
    'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    'https://images.unsplash.com/photo-1615900119829-2158e385f448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    // Add more image paths here
  ];

const index = () => {
  return (
    <div className={`flex justify-between items-center w-full h-full`}>
        <div className='flex justify-between items-center w-full h-full bg-black'>
            <div className={`${style.sliderI}`}>
                <div className={`${style.slidetrack} `}>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src ={'https://cdn.sanity.io/images/nahm0f1b/production/7c18bead9072c83c0a5c83d9e641314035e6e4c0-2842x4263.jpg'}></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/1b8191504b3d2df11f5a656e5fe3625560724b3b-2822x4226.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/27f06dd80d40a02304356a57e6597e8d978e87f7-2617x3272.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/44e2f43975fe0d35802691d94fa38b19976a075d-2831x4246.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/21e3c123c1d7e19fc0d196e7a09afaed24b44a3f-2840x3550.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/a7a4467a4162f79877e5dde7a48d191179372943-2701x3601.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/5b2eeeb8bf4c4504f49a791664a04ea89419e273-2840x4260.jpg'></img>
                    </div>
                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/2b5907581b6d608b361ad6ee180f807d6b0e199d-2840x3550.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/44ff0e917d261a169e558700d8939828c9ce36eb-2553x2553.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/bee165e89cca3bf293f8c5fdad285e2d99192ff9-2791x4187.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/cb6349c4ff6ac8b45a9f69ef8b422c7a4dc1d875-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/c677f3508b67893d5a9e955829a163d6001c9522-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/b2c2e6405719694123640d9ad45aa81b61fdb1e5-2846x4269.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/4559cbc3517b73bbf1e0d2c6fcf1a10e0cc7b103-4260x2840.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/0f5cc081ad30a402406126ff237357ccaf29a604-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/a4a655acd4e5a69b7c2d6253616e398a9c9cbdf0-2533x3378.jpg'></img>
                    </div>
                </div>
            </div>
            <div className={`${style.sliderII}`}>
                <div className={`${style.slidetrack} ${style.slidetrackII}`}>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/b0ce6da3009009eaa6c219a12ec3ac377d4bfb6b-2819x4234.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/765a182957b871eb6439284184ffc8c298822594-2632x3290.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/96df0353c884f438b7307cbe227ee2cb56dbf2df-2843x4212.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/c897772eaf49ffc06be9e0cd6bbc5f7ab8620c3d-2841x4262.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/84a329fa9d3fd76898f9786a632a2608a01b5b6b-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/e30f68b2b936877c00aaf2d13983a0a150e18328-2796x3495.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/b2faac6b80406b5d3a7843113d7ade7b0d1b28a3-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/1b59c93499326836e502a772602bf1d041d411e2-2693x2693.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/303365b140fc3fe5991f19d3364b5d3e9df8175d-2840x4260.jpg'></img>
                    </div>

                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/67ec3f4f4ef9eadf3d0e367dc4175ff962d567c4-3660x2440.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/4b3c5b41b87871a83acc135d222b2cde58954d9b-2826x2430.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/b399097b74cccf40452a846d9595090585ad210a-3660x2440.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/0283dc30a0631d22874175fe98cbcbff438bc2fe-3660x2440.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/e698e0c0c4f2833b7fdf595d38d88da3ec99bb09-3660x2437.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/0308323edf2d2439ebfde28179f90b1d166b375c-3660x2440.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/9627a8210d715235b20f7f52f7459621e109e6f5-3660x2440.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/0f43a4da74d6bd9914950bdf1b3f426b06ab4a00-2440x3660.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/2e1b16dd967087005734702c2c988802e6d95d55-3645x2430.jpg'></img>
                    </div>
                </div>
            </div>
            <div className={`${style.sliderIII}`}>
                <div className={`${style.slidetrack} ${style.slidetrackI}`}>
                <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/2b5907581b6d608b361ad6ee180f807d6b0e199d-2840x3550.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/44ff0e917d261a169e558700d8939828c9ce36eb-2553x2553.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/bee165e89cca3bf293f8c5fdad285e2d99192ff9-2791x4187.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/cb6349c4ff6ac8b45a9f69ef8b422c7a4dc1d875-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/c677f3508b67893d5a9e955829a163d6001c9522-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/b2c2e6405719694123640d9ad45aa81b61fdb1e5-2846x4269.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/4559cbc3517b73bbf1e0d2c6fcf1a10e0cc7b103-4260x2840.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/0f5cc081ad30a402406126ff237357ccaf29a604-2840x4260.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/a4a655acd4e5a69b7c2d6253616e398a9c9cbdf0-2533x3378.jpg'></img>
                    </div>

                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src ={'https://cdn.sanity.io/images/nahm0f1b/production/7c18bead9072c83c0a5c83d9e641314035e6e4c0-2842x4263.jpg'}></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/1b8191504b3d2df11f5a656e5fe3625560724b3b-2822x4226.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/27f06dd80d40a02304356a57e6597e8d978e87f7-2617x3272.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/44e2f43975fe0d35802691d94fa38b19976a075d-2831x4246.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/21e3c123c1d7e19fc0d196e7a09afaed24b44a3f-2840x3550.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/a7a4467a4162f79877e5dde7a48d191179372943-2701x3601.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://cdn.sanity.io/images/nahm0f1b/production/5b2eeeb8bf4c4504f49a791664a04ea89419e273-2840x4260.jpg'></img>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0' style={{ backgroundColor: "rgba(0, 0, 0, 0.60)"}}>
            <div className='w-[80vw] md:w-[75%] lg:w-[50vw] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {/* <img className='m-auto' src="./LogoI.png" width={200} height={200} alt="" /> */}
                <span className={`block text-lg sm:text-xl text-white text-center font-light ${lato.className}`}>Your Products, Our Photography Magic</span>
                <h1 className={`sm:text-xl md:text-4xl lg:text-6xl text-white ${style.title} ${italiana.className}`}>Elevate Your Brand with Stunning Product Shots</h1>
                {/* <Link className='text-center m-auto flex text-white text-lg w-[125px] h-[50px] font-normal bg-black rounded-full justify-center 
                items-center mt-4' href="/">Work</Link> */}
                {/* <div className='mt-10 h-[10vh]'>
                     <Header />
                </div> */}
            </div>
            <div className='w-full h-[18vh] absolute bottom-0 left-0 flex flex-col items-center justify-center'>
                <div className='flex justify-between items-center w-[95%]'>
                    <div className='z-10 -mr-[10%]'><span className={`text-white mx-2 text-sm ${style.copyRight}`} >God like studio | All rights reserved </span></div>
                    <div className='z-10 -ml-[10%]'><Link className={`text-white mx-2 ${style.socialLinks}`} target='_blank' href="https://instagram.com/godlikestudio_sashanks_f?igshid=MmVlMjlkMTBhMg==">Instagram</Link></div>
                </div>
                <div className='w-[95%] h-[1px] bg-white rounded-md z-10 my-4'></div>
                <div className='flex justify-between items-end w-[95%]'>
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
                    
                    <div className='flex justify-between items-center z-10'>
                        {/* <Link className={`text-white mx-2 ${style.socialLinks}`} href="/">Facebook</Link> */}
                        <span className=' text-white mx-2 text-xs sm:text-sm'> Designed & developed by Dikshant Joshi</span>
                        {/* <Link className={`text-white mx-2 ${style.socialLinks}`} href="/">Linkedin</Link> */}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-[20vh] w-full" style={{backgroundImage: "linear-gradient(#000 12%,transparent)"}}></div>
            <div className="absolute bottom-0 left-0 h-[20vh] w-full" style={{backgroundImage:"linear-gradient(transparent,#000)"}}></div>
        </div>
    </div>
  )
}

export default index