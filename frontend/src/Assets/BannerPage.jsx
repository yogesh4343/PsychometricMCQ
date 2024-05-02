import React from 'react'
import Heading from './Heading';
import BannerImg from "../Images/bannerImg.jpeg"
import Button from './Button';
import { NavLink } from 'react-router-dom';

const BannerPage = () => {
  let bannerHeading = "The World’s Most Powerful Psychometric Career Assessment";
  let btn = "Request a Call Back";


  return (
    <div className=" bg-gradient-to-b from-pink-400  to-orange-400 h-full p-7 md:p-14   w-[100vw] cursor-pointer">

      <div className="  mainContainer max-w-[99%] md:max-w-[60%] gap-12 font-bold w-full justify-center flex items-center m-auto flex-col"  >
        <div className="heading text-center text-white"> <Heading heading={bannerHeading} /> </div>
        <p className="text-center font-bold  text-xm md:text-lg text-gray-800">Using advanced machine learning, psychometrics, and career satisfaction data, <span className="bg-yellow-500 p-1 border-none rounded-md">StudFlare</span> has reimagined what a career test can be.
          StudFlare brings to you 30+ scientific and meticulously designed Psychometric Career Assessment to discover your true potential and interest.</p>

        <NavLink to="/contact"> <Button btn={btn} /> </NavLink>


        <div className="bottom text-white font-bold flex justify-around w-full flex-col md:flex-row gap-5">

          <div className="ratingCont text-center">
            <div className="top">Rating</div>
            <div className="stars  text-2xl gap-2">⭐️⭐️⭐️⭐️</div>
            <div>4 Out of 5</div>
          </div>

          <div className="counter flex gap-4 w-[20rem] flex-col md:flex-row">
            <div className="text-center">500M Queation Answered</div>
            <div className="text-center"> 500+ Degrees and Careers </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BannerPage
