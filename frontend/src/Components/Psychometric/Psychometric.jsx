import React from 'react'
import BannerPage from '../../Assets/BannerPage'
import CardPsychometric from './CardPsychometric'
import Footer from '../../Assets/Footer';
import Switcher from '../../Assets/Switcher'
import PsychometricJson from "../../PsychometricJson.json";
import Contact from '../Contact/Contact';
import NavBar from '../Nav/NavBar';

const Psychometric = () => {
  return (
    <div className="">
      <NavBar />
      <BannerPage />
      <Switcher />

      <div className="psycho max-w-[96%] md:max-w-[76%] w-full m-auto p-6">
        <div className="heads text-center  text-2xl font-bold p-7">  Here is  Psychometric Test...</div>
        <p className="cont text-center">
          StudFlare brings to you scientific and meticulously designed Psychometric Assessments to discover your true potential and interest ,learning styles and skills to excel in 21st Century
        </p>

        <div className="cards flex gap-5 justify-center flex-wrap p-6">
          {PsychometricJson.map((curEl, idx) => {
            return <CardPsychometric id={curEl.id} title={curEl.title} img={curEl.img} questions={curEl.questions} minutes={curEl.minutes} price={curEl.price} discount={curEl.discount} button={curEl.Button} />;
          })}
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Psychometric
