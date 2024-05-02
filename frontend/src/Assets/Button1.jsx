import React from 'react'

const Button1 = (props) => {
    const btn =   props.btn
    const width =   props.width
  return (
    <>
        <div className={`button pt-5 pb-5 text-center pl-8 pr-8 bg-[#3477f0]  sm:w-${width} rounded-2xl text-white font-semibold cursor-pointer hover:scale-y-110 1s `}>
               {btn}
        </div> 
    </>
  )
}

export default Button1
