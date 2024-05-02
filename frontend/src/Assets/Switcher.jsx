import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Century21 from '../Components/Century21/Century21'
import Psychometric from '../Components/Psychometric/Psychometric'
import Button from './Button'

const Switcher = () => {
  let btn = "Psychometric Career Test"
  let btn1 = "21st Century Career Test"

  const [psychometricSwitch, setPsychometricSwitch] = useState(true);

  return (
    <div>
      <div className="switcherCo flex gap-4 m-auto max-w-[90%] justify-center md:max-w-[60%] w-full cursor-pointer pt-5 flex-col text-center md:flex-row">
        <NavLink to="/psychometric"> <div className="psycho font-bold"><Button btn={btn} /></div> </NavLink>
        <NavLink to="/century">  <div className="century font-bold"><Button btn={btn1} /></div> </NavLink>
      </div>
    </div>
  )
}

export default Switcher
