
'useClient'
import React, { Children } from 'react'
import {useState, useEffect} from 'react'
import { PortableText } from '@portabletext/react';
import { getPolcies } from '@/sanity/sanity-utils';
import styles from './styles.module.css'

import HeaderNew from '@/components/HeaderInternal/Index'
import Footer from '@/components/FooterInternal/FooterInternal'


const Page = ({ currentRoute, query }) => {
  const [Policies, setPolicies] = useState();
  const [Invalid, setinvalid] = useState(false);
  const [PageTitle, setPageTitle] = useState();


  useEffect(()=>{
    (
      async () => {
        const policies = await getPolcies();
        if(query.page == 'cookie-policy') {
          setPolicies(policies[0].content)
          setPageTitle('Cookie policy')
        }
        else if (query.page == 'terms-and-conditions'){
          setPolicies(policies[1].content)
          setPageTitle('Terms and conditions')
        }
        else if (query.page == 'privacy-policy') {
          setPolicies(policies[2].content)
          setPageTitle('Privacy policy')
        }
        else {
          setinvalid(true)
        }
        console.log(policies[1].content)
        console.log(Policies)
        console.log(Policies)
      }
    )()
   },[])

  //  const LoopForContent = (blockI) => {
  //     // console.log(blockI.content)
  //     const contentI = blockI.content;
  //     contentI.map((con, i) => {
  //       switch (con.style) {
  //         case 'h2':
  //           // For heading elements
  //           // console.log(con.children[0].text)
  //           return <h1 key={i}>{con.children[0].text}</h1>;
  
  //         case 'paragraph':
  //           // For paragraph elements
  //           // return <p key={index}>{block.content}</p>;
  
  //         case 'list':
  //           // For list elements
  //           // return (
  //           //   <ul key={index}>
  //           //     {block.content.map((item, itemIndex) => (
  //           //       <li key={itemIndex}>{item}</li>
  //           //     ))}
  //           //   </ul>
  //           // );
  
  //         // Add more cases for other HTML elements as needed
  
  //         default:
  //           return null; // Handle unrecognized block types or skip them
  //       }
  //     }) 
  //  }

  //  const renderedContent = Policies.map((block, index) => {
  //   console.log(block)
  //     if(block.slug.current === query.page){
  //        LoopForContent(block);
  //     }
  //  });

  

  return (
    // <div>{{renderedContent}}</div>
    <div className={`w-full h-full flex flex-col justify-center items-center pt-24 policiesPages ${styles.main}`} style={{background:'#fff'}}>
        <HeaderNew />
        <h1 className='text-center text-black mb-6'>{PageTitle}</h1>
        <div className={`w-[85%] lg:w-3/4 h-full mb-24 text-black ${ Invalid === true ? 'hidden': 'block'}`} >
          <PortableText value={Policies} />
        </div>
        <div className={` ${Invalid === true ? 'block': 'hidden'}`} >
          <h1>Invalid</h1>
        </div>
        <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;
  const currentRoute = context.resolvedUrl;
  return {
    props: {
      currentRoute,
      query,
    },
  };
}

export default Page