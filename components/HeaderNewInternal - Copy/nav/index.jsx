'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

import HomeImg from '@/public/header/home.png'

const links = [
  {
    title: "Home",
    href: "/",
    src: HomeImg
  },
  {
    title: "Product",
    href: "/product-photography",
    src: "product.png"
  },
  {
    title: "Interior",
    href: "/Interior-photography",
    src: "Interior.png"
  },
  {
    title: "Contact",
    href: "/contact-us",
    src: "contact.png"
  },
  {
    title: "Book",
    href: "/Quote",
    src: "contact.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        {/* <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/> */}
      </div>
    </motion.div>
  )
}