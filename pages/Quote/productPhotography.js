import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from '@/pages/Quote/styles.module.css'
import HeaderNew from '@/components/HeaderInternal/Index'
import Image from "next/image";
import Footer from '@/components/FooterInternal/FooterInternal';

import Quote from '@/public/contact/Quote.png'
import circle from '@/public/contact/circle.svg';
import facebook from '@/public/contact/facebook.svg';
import Insta from '@/public/contact/Insta.svg';
import linkedIn from '@/public/contact/linkedin.svg';

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

   // Define options for the dropdowns
   const dropdownOptions1 = ["Still-Life in Studio", "In studio with a model (plain backdrop)", "On location (e.g. bathroom, kitchen, bedroom, pool)"];
   const dropdownOptions2 = ["Yes, I’d like you to source a model for me", "I will source my own model"];


  async function onSubmitForm(data) {
    const formdata = new FormData();
    // console.log(data)
    Object.entries(data).forEach(([key, value]) => {
      if (key === "References") {
        formdata.set(key, value[0]);
      } else {
        formdata.set(key, value);
      }
    });

    // Add an additional key-value pair
    formdata.set('Page', 'Product photography');

    let config = {
      method: "POST",
      url: "/api/Book",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const res = await axios(config);
      if (res.status === 200) {
        // reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className={`pt-24 ${styles.main}`}>
      <HeaderNew />
      <div>
      <div className="text-center mb-0 lg:mb-8 mt-6 lg:mt-12">
        <h2 className="text-3xl lg:text-6xl text-white font-bold mb-4 lg:mb-8">
          <span className="mb-4 block" style={{color:'#777'}}>Quote for <br></br></span> Product photography
        </h2>
        <p className="text-gray-400 px-4 lg:w-[65vw] m-auto mt-2 lg:text-[20px]leading-relaxed">
          As each project is different, we find there&apos;s no one price fits all.So we can provide you with an accurate quote, please take a few minutes to fill out the creative brief below.If you&apos;re not sure on something that&apos;s totally ok! We&apos;re here to help provide creative direction and offer ideas as well.
        </p>
      </div>

      <div className=" flex flex-col lg:flex-row 2xl:w-[1300px] mx-auto" style={{background:'#fbfbfb',borderRadius:'24px',boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)',padding:'0 24px'}}>
        <div className="w-full lg:w-[45%] h-[60vh] lg:h-full mt-8">
           <div className='sm:w-full md:w-full mt-4 lg:mt-0 w-full lg:w-[95%]  flex flex-col items-start justify-between relative h-full lg:h-[100vh]' style={{background:'#011C2A',borderRadius: '24px'}}>
              <div className='flex flex-col justify-start items-start p-6 lg:p-14'>
                  <h2 className='text-white text-[32px] mb-6'>Contact Information</h2>
                  <span className='text-white text-[18px]'>Email: reachgodlikestudio@gmail.com</span>
                  {/* <span className='text-white text-[18px] mt-6'>If you’re after a general price range, you can use the contact form here (please note we will require more information to refine your quote).</span> */}
                  <h3 className="text-white text-[18px] mt-6">Please provide as much information as you can to generate an accurate quote</h3>
                  <Image src={circle} alt='circle' style={{position:'absolute',bottom:'45px', right:'45px'}} />
              </div>
              <div className='flex justify-center items-center p-6 lg:p-14'>
                <Image src={facebook} href='facebook' style={{margin: '0 10px'}} />
                <Image src ={Insta} href= 'Insta' style={{margin: '0 10px'}} />
                <Image src ={linkedIn} href= 'LinkedIn' style={{margin: '0 10px'}} />
              </div>
            </div>
        </div>
        <div className="flex flex-col lg:w-[55%] justify-center mt-8 mx-4">
          <form
            className="text-primary mb-3 contact-form w-full max-w-2xl"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="careerName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="careerName"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.careerName ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
                {...register("careerName", {
                  required: { value: true, message: "Your Name is required" },
                })}
              />
              {errors?.careerName && (
                <p className="mt-2 text-red-500">{errors?.careerName?.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="careerEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="careerEmail"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.careerEmail ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                {...register("careerEmail", {
                  required: { value: true, message: "Your Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors?.careerEmail && (
                <p className="mt-2 text-red-500">{errors?.careerEmail?.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label htmlFor="careerTelephone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                id="careerTelephone"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.careerTelephone ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
                {...register("careerTelephone", {
                  required: {
                    value: true,
                    message: "Your Phone Number is required",
                  },
                  pattern: {
                    value:
                      /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              {errors?.careerTelephone && (
                <p className="mt-2 text-red-500">{errors?.careerTelephone?.message}</p>
              )}
            </div>

            {/* Website */}
            <div className="mb-6">
              <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="text"
                id="websiteURL"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.websiteURL? "border-red-500" : ""
                }`}
                placeholder="Enter website"
                {...register("websiteURL", {
                  required: {
                    value: false,
                    message: "Enter the URL to your website if you have one.",
                  }
                })}
              />
              {errors?.websiteURL && (
                <p className="mt-2 text-red-500">{errors?.websiteURL?.message}</p>
              )}
            </div>

              {/*Instagram */}
              <div className="mb-6">
              <label htmlFor="Insta" className="block text-sm font-medium text-gray-700">
                Instagram
              </label>
              <input
                type="text"
                id="Insta"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.Insta? "border-red-500" : ""
                }`}
                placeholder="Enter website"
                {...register("Insta", {
                  required: {
                    value: false,
                    message: "Enter your Instagram",
                  }
                })}
              />
              {errors?.Insta && (
                <p className="mt-2 text-red-500">{errors?.Insta?.message}</p>
              )}
            </div>

            {/* Company */}
            <div className="mb-6">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="companyName"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.companyName ? "border-red-500" : ""
                }`}
                placeholder="Enter company name"
                {...register("companyName", {
                  required: {
                    value: true,
                    message: "Your Company name is required",
                  },
                  // maxLength: {
                  //   value: 16,
                  //   message: "Must be a 16 digit number",
                  // },
                  // minLength: {
                  //   value: 16,
                  //   message: "Must be a 16 digit number",
                  // },
                })}
              />
              {errors?.companyName && (
                <p className="mt-2 text-red-500">{errors?.companyName?.message}</p>
              )}
            </div>


            {/* How many photos are you looking for? */}
            <div className="mb-6">
              <label htmlFor="numbersOfPhotos" className="block text-sm font-medium text-gray-700">
              How many photos are you looking for?
              </label>
              <input
                type="number"
                id="numbersOfPhotos"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.numbersOfPhotos ? "border-red-500" : ""
                }`}
                placeholder="Enter number of photos"
                {...register("numbersOfPhotos", {
                  required: {
                    value: true,
                    message: "Number of photos is required",
                  },
                })}
              />
              {errors?.numbersOfPhotos && (
                <p className="mt-2 text-red-500">{errors?.numbersOfPhotos?.message}</p>
              )}
            </div>

            {/* Dropdown 1 */}
            <div className="mb-6">
              <label htmlFor="dropdown1" className="block text-sm font-medium text-gray-700">
                What type of content are you looking to create?
              </label>
              <select
                id="dropdown1"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.dropdown1 ? "border-red-500" : ""
                }`}
                {...register("dropdown1", {
                  required: {
                    value: true,
                    message: "Please select an option",
                  },
                })}
              >
                <option value="" disabled>Select an option</option>
                {dropdownOptions1.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors?.dropdown1 && (
                <p className="mt-2 text-red-500">{errors?.dropdown1?.message}</p>
              )}
            </div>

            {/* Dropdown 2 */}
            <div className="mb-6">
              <label htmlFor="dropdown2" className="block text-sm font-medium text-gray-700">
              If you require a model for your shoot
              </label>
              <select
                id="dropdown2"
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.dropdown2 ? "border-red-500" : ""
                }`}
                {...register("dropdown2", {
                  required: {
                    value: true,
                    message: "Please select an option",
                  },
                })}
              >
                <option value="" disabled>Select an option</option>
                {dropdownOptions2.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors?.dropdown2 && (
                <p className="mt-2 text-red-500">{errors?.dropdown2?.message}</p>
              )}
            </div>


            {/* projectBudget */}
            <div className="mb-6">
              {/* <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-700">
              What is your budget for this project? (If you require models and a location, please include this in your budget option below) 
              <div className="flex flex-wrap items-center mt-4">
                <div className="mb-2">
                  <h4>Below are example price ranges. Yours may differ</h4>
                </div>
                <div className="flex flex-wrap justify-around items-center ">
                  <div className="flex flex-col w-[47%] justify-start items-start p-4 ml-0 m-2" style={{border:'1px solid #ddd', borderRadius:'12px'}}>
                    <h4 className="" style={{fontWeight:'700',fontSize:'20px'}}>75k - 1L </h4>
                    <p className="mt-4 text-[#777]">15-20 styled images will be given</p>
                  </div>
                  <div className="flex flex-col w-[47%] justify-start items-start p-4 mr-0 m-2" style={{border:'1px solid #ddd', borderRadius:'12px'}}>
                    <h4 className="" style={{fontWeight:'700',fontSize:'20px'}}>100k - 150k</h4>
                    <p className="mt-4 text-[#777]">20-30 styled images will be given</p>
                  </div>
                  <div className="flex flex-col w-[47%] justify-start items-start p-4 ml-0 m-2" style={{border:'1px solid #ddd', borderRadius:'12px'}}>
                    <h4 className="" style={{fontWeight:'700',fontSize:'20px'}}>150k - 250k </h4>
                    <p className="mt-4 text-[#777]">30-50 styled images will be given</p>
                  </div>
                  <div className="flex flex-col w-[47%] justify-start items-start p-4 mr-0 m-2" style={{border:'1px solid #ddd', borderRadius:'12px'}}>
                    <h4 className="" style={{fontWeight:'700',fontSize:'20px'}}>250k - 400k </h4>
                    <p className="mt-4 text-[#777]">50-80 styled images will be given</p>
                  </div>
                </div>
              </div>
              </label> */}
              {/* <textarea
                id="projectBudget"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("projectBudget")}
              ></textarea> */}
            </div>


            {/* Additional information */}

            <h4 className="mb-4 font-bold">Let&apos;s understand your requirement even better</h4>

            {/* Location preference */}
            <div className="mb-6">
              <label htmlFor="locationPreference" className="block text-sm font-medium text-gray-700">
                Please let us know if you have any location preferences 
              </label>
              <textarea
                id="locationPreference"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("locationPreference")}
              ></textarea>
            </div>


            {/* products */}
            <div className="mb-6">
              <label htmlFor="products" className="block text-sm font-medium text-gray-700">
              Please list the products you would like photographed:
              </label>
              <textarea
                id="products"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("products")}
              ></textarea>
            </div>

            {/* deadline */}
            <div className="mb-6">
              <label htmlFor="deadLine" className="block text-sm font-medium text-gray-700">
                Do you have a soft and/or hard deadline for receiving the images? (If you have a specific date you need the images by, please state this below)
              </label>
              <textarea
                id="deadLine"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("deadLine")}
              ></textarea>
            </div>

          

              {/*props */}
              <div className="mb-6">
              <label htmlFor="props" className="block text-sm font-medium text-gray-700">
                Please list any specific props you&apos;d like to see (or not see) in the photos:
              </label>
              <textarea
                id="props"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("props")}
              ></textarea>
            </div>


            {/*props budget and suggestion */}
            <div className="mb-6">
              <label htmlFor="propsBudgetAndSuggestion" className="block text-sm font-medium text-gray-700">
                Do you have a budget for props? *I may suggest specific props I would need to purchase to help bring out the BEST results for your photos.
              </label>
              <textarea
                id="propsBudgetAndSuggestion"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("propsBudgetAndSuggestion")}
              ></textarea>
            </div>


            {/*product combination */}
            <div className="mb-6">
              <label htmlFor="productCombination" className="block text-sm font-medium text-gray-700">
                Are there any product combinations that must occur in a single photo? (Please list each photo combination required)
              </label>
              <textarea
                id="productCombination"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("productCombination")}
              ></textarea>
            </div>


            {/*brand colors */}
            <div className="mb-6">
              <label htmlFor="brandColors" className="block text-sm font-medium text-gray-700">
                What are your brand&apos;s colours? Please list both colour names and hex codes
              </label>
              <textarea
                id="brandColors"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("brandColors")}
              ></textarea>
            </div>
            
            {/* Message (optional) */}
            <div className="mb-6">
              <label htmlFor="careerMessage" className="block text-sm font-medium text-gray-700">
                Message (optional)
              </label>
              <textarea
                id="careerMessage"
                rows="3"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Leave a message here"
                {...register("careerMessage")}
              ></textarea>
            </div>


            {/* References*/}
            <div className="mb-6">
              <label htmlFor="References" className="block text-sm font-normal text-gray-700 mb-4">
              Please upload any reference or inspo images/other brands to this document or please send via DM on Instagram. Inspo images are really important to help us visualise the style you&apos;re after and ensure we are on the same page visually.
              </label>
              <input
                type="file"
                id="References"
                multiple
                className={`  mt-1 p-2 h-[50px] border rounded-md w-full ${
                  errors.References ? "border-red-500" : ""
                }`}
                {...register("References", {
                  required: {
                    value: true,
                    message: "Your CV is required",
                  },
                })}
              />
              {errors?.References && (
                <p className="mt-2 text-red-500">{errors?.References?.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit" style={{background: 'rgb(1, 28, 42)'}}
                className="bg-blue-500 text-white rounded-xl p-5 px-4 py-2 w-full bg-primary hover:bg-primary-dark mb-6"
              >
                Submit
              </button>
            </div>
          </form>
      </div>
      </div>
      </div>
      <Footer />
    </section>
  );
}
