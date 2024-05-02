import React from 'react'
import BannerPage from '../../Assets/BannerPage'
import Card from './CardCentury';
import Switcher from '../../Assets/Switcher';
import CenturyJson from "../../CenturyJson.json";
import NavBar from '../Nav/NavBar';

const Century21 = () => {
  return (
    <div className="">
      <NavBar />
      <BannerPage />
      <Switcher />

      <div className="psycho max-w-[90%] md:max-w-[76%] w-full m-auto p-6">
        <div className="heads text-center  text-2xl font-bold p-7">  Here is  21th Century Test...</div>
        <p className="cont text-center">
          StudFlare brings to you scientific and meticulously designed Psychometric Assessments to discover your true potential and interest ,learning styles and skills to excel in 21st Century
        </p>

        <div className="cards flex gap-5 justify-center flex-wrap p-6">
          {CenturyJson.map((curEl, idx) => {
            return <Card id={curEl.id} title={curEl.title} img={curEl.img} questions={curEl.questions} minutes={curEl.minutes} price={curEl.price} discount={curEl.discount} button={curEl.Button} />;
          })}
        </div>
      </div>

    </div>
  )
}

export default Century21
