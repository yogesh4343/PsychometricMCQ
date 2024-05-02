import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ id, title, questions, minutes, price, discount, button, img }) => {
  return (
    <div >
      <NavLink to={{ pathname: `/assignment/${id}`, state: { title } }} className="flex flex-col bg-white border rounded-xl  w-[16rem] h-full shadow-xl ">
        <img className="w-full  rounded-t-xl h-[15rem]" src={img} alt="Image Description" />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800   text-center">
            {title}
          </h3>
          <p className="mt-1 text-gray-500">
            {questions} Questions
          </p>
          <p className="mt-1 text-gray-500">
            {minutes} Minutes
          </p>
          <p className="flex  text-center gap-3 items-center align-items"> <p className="mt-1 text-gray-500 line-through">
            ₹{price}
          </p>
            <span className="text-red-400 font-bold items-center text-center   "> ₹{discount}</span></p>
          <a className="mt-2 py-2 px-3 font-bold text-center inline-flex justify-center items-center w-full gap-x-2 text-sm rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            {button}
          </a>
        </div>
      </NavLink>
    </div>
  )
}

export default Card
